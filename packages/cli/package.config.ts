import { defineConfig } from "@sanity/pkg-utils";
import { visualizer } from "rollup-plugin-visualizer";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  bundles: [
    {
      source: "./src/cli/cli.ts",
      require: "./dist/cli.js",
    },
  ],
  runtime: "node",
  dist: "dist",
  tsconfig: "tsconfig.dist.json",

  // Remove this block to enable strict export validation
  extract: {
    rules: {
      "ae-forgotten-export": "off",
      "ae-incompatible-release-tags": "off",
      "ae-internal-missing-underscore": "off",
      "ae-missing-release-tag": "off",
    },
  },
  rollup: {
    plugins: [
      visualizer({
        emitFile: true,
        filename: "stats.html",
      }),
    ],
  },
});
