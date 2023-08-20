#!/usr/bin/env node
/* eslint-disable check-file/no-index */

const majorNodeVersion = parseInt(process.version.toString().replace("v", "").split(".")[0], 10);
if (majorNodeVersion < 16) {
  console.error("To run schadenfreude you need to have node 16 or higher");
  process.exit(1);
}

require("../dist/cli.cjs");
