import { program } from "commander";
import { readPackageUpSync } from "read-pkg-up";

import { InitiateOptions, initiate } from "./commands/initiate";

const pkg = readPackageUpSync({ cwd: __dirname })?.packageJson;

if (!pkg) {
  throw new Error("Could not find package.json, which we kind of need...");
}

const command = (name: string) =>
  program.command(name).option("--debug", "Get more logs in debug mode", false);

command("init")
  .description("Initialize Schadenfreude into your project.")
  .action((options: InitiateOptions) => {
    initiate(options, pkg).catch(() => process.exit(1));
  });

command("build")
  .description("Build your Schadenfreude project.")
  .action((options) => {
    initiate(options, pkg).catch(() => process.exit(1));
  });

command("develop")
  .description("Develop your Schadenfreude project.")
  .action((options) => {
    initiate(options, pkg).catch(() => process.exit(1));
  });

program.on("command:*", ([invalidCmd]) => {
  console.error(" Invalid command: %s.\n See --help for a list of available commands.", invalidCmd);

  /**
   * TODO: add suggestion magic
   */

  process.exit(1);
});

program.usage("<command> [options]").version(pkg.version).parse(process.argv);
