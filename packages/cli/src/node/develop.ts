import { PackageJson } from "read-pkg-up";

export interface DevelopOptions {}

export const develop = (options: DevelopOptions, pkg: PackageJson) => {
  // eslint-disable-next-line no-console
  console.log("developing");
};
