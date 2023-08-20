import { PackageJson } from "read-pkg-up";

export interface InitiateOptions {}

export const initiate = async (options: InitiateOptions, pkg: PackageJson) => {
  // eslint-disable-next-line no-console
  console.log("hello");
};
