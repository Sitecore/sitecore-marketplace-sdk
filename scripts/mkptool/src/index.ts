#!/usr/bin/env node
import { Command } from "commander";
import publish from "./publish";

const cwd = process.cwd();

const program = new Command();

program
  .name("mkptool")
  .description("Helper tool for marketplace")
  .version("1.0.0");

program
  .command("publish")
  .description("Start internal npm package publish")
  .option(
    "--skip <packages>",
    "Comma-separated list of packages to skip publishing"
  )
  .action(async (options: { skip?: string }) => {
    const skipPackages = options.skip ? options.skip.split(",") : ["mkptool"];
    console.log(`Skipping packages: ${skipPackages.join(", ")}`);
    await publish(cwd, { gitTag: true, skipPackages });
  });

program.parse();
