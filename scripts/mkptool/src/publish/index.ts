import publishPackages, { PublishedResult } from "./publishPackages";
import { ExitError } from "@changesets/errors";
import { error, log, success, warn } from "@changesets/logger";
import * as git from "@changesets/git";
import { getPackages } from "@manypkg/get-packages";

function logReleases(pkgs: Array<{ name: string; newVersion: string }>) {
  const mappedPkgs = pkgs.map((p) => `${p.name}@${p.newVersion}`).join("\n");
  log(mappedPkgs);
}

export default async function publish(
  cwd: string,
  {
    gitTag = true,
    skipPackages,
  }: { gitTag?: boolean; skipPackages?: string[] } = {}
) {
  let { packages, tool } = await getPackages(cwd);

  console.log("Skip", skipPackages);
  packages.forEach((pkg) => {
    console.log(pkg.packageJson.name);
  });

  packages = packages.filter(
    (pkg) => !skipPackages?.includes(pkg.packageJson.name)
  );

  const publishedPackages = await publishPackages({
    packages,
  });

  if (publishedPackages.length === 0) {
    warn("No unpublished projects to publish");
  }

  const successfulNpmPublishes = publishedPackages.filter((p) => p.published);
  const unsuccessfulNpmPublishes = publishedPackages.filter(
    (p) => !p.published
  );

  if (successfulNpmPublishes.length > 0) {
    success("packages published successfully:");
    logReleases(successfulNpmPublishes);

    if (gitTag) {
      // We create the tags after the push above so that we know that HEAD won't change and that pushing
      // won't suffer from a race condition if another merge happens in the mean time (pushing tags won't
      // fail if we are behind the base branch).
      log(`Creating git tag${successfulNpmPublishes.length > 1 ? "s" : ""}...`);

      await tagPublish(tool, successfulNpmPublishes, cwd);
    }
  }

  if (unsuccessfulNpmPublishes.length > 0) {
    error("packages failed to publish:");

    logReleases(unsuccessfulNpmPublishes);
    throw new ExitError(1);
  }
}

async function tagPublish(
  tool: string,
  packageReleases: PublishedResult[],
  cwd: string
) {
  if (tool !== "root") {
    for (const pkg of packageReleases) {
      const tag = `${pkg.name}@${pkg.newVersion}`;
      log("New tag: ", tag);
      await git.tag(tag, cwd);
    }
  } else {
    const tag = `v${packageReleases[0].newVersion}`;
    log("New tag: ", tag);
    await git.tag(tag, cwd);
  }
}
