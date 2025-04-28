import { Package } from "@manypkg/get-packages";
import { info, warn } from "@changesets/logger";
import * as npmUtils from "./npm-utils";
import { exec } from "child_process";
import { promisify } from "util";
import { Octokit } from "@octokit/rest";
import { createAppAuth } from "@octokit/auth-app";

const execAsync = promisify(exec);

type PublishedState = "never" | "published" | "only-pre";

type PkgInfo = {
  name: string;
  localVersion: string;
  publishedState: PublishedState;
  publishedVersions: string[];
  packageDir?: string;
};

export type PublishedResult = {
  name: string;
  newVersion: string;
  published: boolean;
};

async function getInstallationToken() {
  console.log("Starting getInstallationToken");
  const appId = process.env.GITHUB_APP_ID;
  const privateKey = process.env.GITHUB_APP_PRIVATE_KEY;
  const dispatchRepoOwner = process.env.DISPATCH_REPO_OWNER;

  if (!appId || !privateKey || !dispatchRepoOwner) {
    console.log("Missing required environment variables");
    throw new Error(
      "GITHUB_APP_ID, GITHUB_APP_PRIVATE_KEY, or DISPATCH_REPO_OWNER is not set in the environment variables"
    );
  }

  console.log("Creating app authentication");
  const auth = createAppAuth({
    appId,
    privateKey,
  });

  console.log("Fetching installations");
  const appAuthentication = await auth({ type: "app" });
  const octokit = new Octokit({ auth: appAuthentication.token });
  const { data: installations } = await octokit.apps.listInstallations();
  const installation = installations.find(
    (inst) => inst.account?.login === dispatchRepoOwner
  );

  if (!installation) {
    console.log(`No installation found for owner: ${dispatchRepoOwner}`);
    throw new Error(`No installation found for owner: ${dispatchRepoOwner}`);
  }

  console.log(`Installation ID: ${installation.id}`);
  console.log(
    "Generating installation token using createInstallationAccessToken"
  );
  const { data: tokenData } = await octokit.apps.createInstallationAccessToken({
    installation_id: installation.id,
  });

  console.log("Installation token generated");
  console.log("Token Permissions:", tokenData.permissions);
  return tokenData.token;
}

async function triggerRepositoryDispatch(packagesInfo: PkgInfo[]) {
  console.log("Starting triggerRepositoryDispatch");
  const branch = (
    await execAsync("git rev-parse --abbrev-ref HEAD")
  ).stdout.trim();
  const commit = (await execAsync("git rev-parse HEAD")).stdout.trim();

  console.log(`Branch: ${branch}, Commit: ${commit}`);

  const payload = {
    event_type: "publish_packages",
    client_payload: {
      packages: packagesInfo.map((pkgInfo) => ({
        packageName: pkgInfo.name,
        packageDir: pkgInfo.packageDir,
        localVersion: pkgInfo.localVersion,
      })),
      branch,
      commit,
    },
  };

  const dispatchRepoOwner = process.env.DISPATCH_REPO_OWNER;
  const dispatchRepoName = process.env.DISPATCH_REPO_NAME;

  if (!dispatchRepoOwner || !dispatchRepoName) {
    console.log("Missing required repository environment variables");
    throw new Error(
      "DISPATCH_REPO_OWNER or DISPATCH_REPO_NAME is not set in the environment variables"
    );
  }

  console.log("Fetching installation token");
  const installationToken = await getInstallationToken();

  console.log("Creating Octokit instance");
  const octokit = new Octokit({
    auth: installationToken,
  });

  console.log("Triggering repository dispatch event");
  const response = await octokit.repos.createDispatchEvent({
    owner: dispatchRepoOwner,
    repo: dispatchRepoName,
    event_type: payload.event_type,
    client_payload: payload.client_payload,
  });

  if (response.status !== 204) {
    console.log(`Failed to trigger repository dispatch: ${response.status}`);
    throw new Error(
      `Failed to trigger repository dispatch: ${response.status}`
    );
  }

  console.log(
    `Triggered repository dispatch for ${packagesInfo.length} packages`
  );
}

async function waitForPackagesToBePublished(packagesInfo: PkgInfo[]) {
  const maxRetries = parseInt(process.env.PUBLISH_MAX_RETRIES || "10", 10);
  const delayMs = parseInt(process.env.PUBLISH_RETRY_DELAY_MS || "15000", 10);

  console.log("Waiting for packages to be published...");

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    console.log(`Attempt ${attempt} of ${maxRetries}`);

    const unpublishedPackages = [];

    for (const pkgInfo of packagesInfo) {
      const { name, localVersion } = pkgInfo;
      console.log(
        `Checking if package ${name} version ${localVersion} is published...`
      );

      const response = await npmUtils.infoAllow404(pkgInfo.name);

      if (
        !response.published ||
        !response.pkgInfo.versions.includes(localVersion)
      ) {
        unpublishedPackages.push(pkgInfo);
        console.log(
          `Package ${name} version ${localVersion} is not yet published.`
        );
      } else {
        console.log(`Package ${name} version ${localVersion} is published.`);
      }
    }

    if (unpublishedPackages.length === 0) {
      console.log("All packages are published.");
      return;
    }

    if (attempt < maxRetries) {
      console.log(`Waiting for ${delayMs}ms before retrying...`);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    } else {
      throw new Error(
        "Some packages were not published within the allowed retries."
      );
    }
  }
}

export default async function publishPackages({
  packages,
}: {
  packages: Package[];
}) {
  if (!process.env.GITHUB_WORKSPACE) {
    throw new Error("GITHUB_WORKSPACE environment variable is not set.");
  }

  const packagesByName = new Map(packages.map((x) => [x.packageJson.name, x]));
  const publicPackages = packages.filter((pkg) => !pkg.packageJson.private);
  const unpublishedPackagesInfo = await getUnpublishedPackages(publicPackages);

  if (unpublishedPackagesInfo.length === 0) {
    return [];
  }

  const repoRoot = process.env.GITHUB_WORKSPACE;

  const packagesInfo = unpublishedPackagesInfo.map((pkgInfo) => {
    const pkg = packagesByName.get(pkgInfo.name)!;
    const relativePackageDir = pkg.dir
      .replace(repoRoot, "")
      .replace(/^\\|\//, "");
    return {
      ...pkgInfo,
      packageDir: relativePackageDir,
    };
  });

  await triggerRepositoryDispatch(packagesInfo);

  await waitForPackagesToBePublished(packagesInfo);

  return packagesInfo.map((pkgInfo) => ({
    published: true,
    name: pkgInfo.name,
    newVersion: pkgInfo.localVersion,
  }));
}

async function getUnpublishedPackages(packages: Array<Package>) {
  const results: Array<PkgInfo> = await Promise.all(
    packages.map(async ({ packageJson }) => {
      const response = await npmUtils.infoAllow404(packageJson.name);
      let publishedState: PublishedState = "never";
      if (response.published) {
        publishedState = "published";
      }

      return {
        name: packageJson.name,
        localVersion: packageJson.version,
        publishedState,
        publishedVersions: response.pkgInfo.versions || [],
      };
    })
  );

  const packagesToPublish: Array<PkgInfo> = [];

  for (const pkgInfo of results) {
    const { name, localVersion, publishedVersions } = pkgInfo;
    if (!publishedVersions.includes(localVersion)) {
      packagesToPublish.push(pkgInfo);
      info(
        `${name} is being published because our local version (${localVersion}) has not been published on npm`
      );
    } else {
      // If the local version is behind npm, something is wrong, we warn here, and by not getting published later, it will fail
      warn(
        `${name} is not being published because version ${localVersion} is already published on npm`
      );
    }
  }

  return packagesToPublish;
}
