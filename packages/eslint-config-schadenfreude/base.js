module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "turbo",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "prettier", "import", "check-file"],
  overrides: [
    {
      /**
       * We're allowing one index file that should be
       * at the root of the src folder.
       */
      files: ["**/src/index.[jt]s?(x)"],
      rules: {
        "check-file/no-index": "off",
      },
    },
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    /**
     * You can warn or error, but a normal log is not allowed in the FE codebase,
     * this helps us catch "stragglers" whilst debugging issues.
     */
    "no-console": ["error", { allow: ["warn", "error"] }],
    /**
     * This is useful for refs especially when you know the
     * element will exist on mount within the component.
     */
    "@typescript-eslint/no-non-null-assertion": "off",
    /**
     * Useful for when you only need to access certain args of a function.
     * e.g. `new Array(10).map((_, i) => i)` – it won't complain about `_`.
     */
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    /**
     * This produces an import list like:
     *
     * ```js
     * import React from 'react';
     *
     * import PropTypes from 'prop-types';
     *
     * import LocalesProviderContext from './context';
     * ```
     *
     * where `react` is always first followed by library imports
     * and then local code imports are managed independently.
     */
    "import/order": [
      "error",
      {
        groups: [
          ["external", "internal", "builtin"],
          "parent",
          ["sibling", "index"],
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    /**
     * We only want named exports:
     *
     * ```jsx
     * const Apple = () => <div />;
     *
     * export { Apple }
     * ```
     */
    "import/no-default-export": "error",
    /**
     * Enforce file location for particular types of files.
     */
    "check-file/folder-match-with-fex": [
      "error",
      {
        "*.test.{js,jsx,ts,tsx}": "**/__tests__/",
      },
    ],
    /**
     * No index files – flatter structure.
     * Edge cases can disable the eslint rule.
     */
    "check-file/no-index": "error",
    /**
     * Enforce naming convention for files,
     * all JSX component files must be PascalCase.
     * All other files must be camelCase.
     *
     * no dashes, no underscores and definitely no spaces.
     */
    "check-file/filename-naming-convention": [
      "error",
      { "**/*.{js,ts}": "CAMEL_CASE", "**/*.{jsx,tsx}": "PASCAL_CASE" },
      { ignoreMiddleExtensions: true },
    ],
    "no-duplicate-imports": "off",
    "no-unused-vars": "off",
  },
};
