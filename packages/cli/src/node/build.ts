import { PackageJson } from "read-pkg-up";

export interface BuildOptions {}

export const build = (options: BuildOptions, pkg: PackageJson) => {
  // eslint-disable-next-line no-console
  console.log("building");
};
