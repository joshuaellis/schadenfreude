module.exports = {
  extends: ["./base", "plugin:react/recommended", "plugin:react-hooks/recommended"],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks"],
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:jest-dom/recommended", "plugin:testing-library/react"],
      plugins: ["jest-dom", "@typescript-eslint"],
      rules: {
        "testing-library/prefer-screen-queries": "off",
        "testing-library/render-result-naming-convention": "off",
        // "testing-library/await-async-query": "off",
        // "testing-library/await-async-utils": "off",
        // "testing-library/no-await-sync-query": "off",
        // "testing-library/no-container": "off",
        // "testing-library/no-debugging-utils": "off",
        // "testing-library/no-dom-import": ["off", "react"],
        // "testing-library/no-node-access": "off",
        // "testing-library/no-promise-in-fire-event": "off",
        // "testing-library/no-render-in-setup": "off",
        // "testing-library/no-unnecessary-act": "off",
        // "testing-library/no-wait-for-empty-callback": "off",
        // "testing-library/no-wait-for-multiple-assertions": "off",
        // "testing-library/no-wait-for-side-effects": "off",
        // "testing-library/no-wait-for-snapshot": "off",
        // "testing-library/prefer-find-by": "off",
        // "testing-library/prefer-presence-queries": "off",
        // "testing-library/prefer-query-by-disappearance": "off",
        // "jest-dom/prefer-checked": "off",
        // "jest-dom/prefer-empty": "off",
        // "jest-dom/prefer-enabled-disabled": "off",
        // "jest-dom/prefer-focus": "off",
        // "jest-dom/prefer-in-document": "off",
        // "jest-dom/prefer-required": "off",
        // "jest-dom/prefer-to-have-attribute": "off",
        // "jest-dom/prefer-to-have-class": "off",
        // "jest-dom/prefer-to-have-style": "off",
        // "jest-dom/prefer-to-have-text-content": "off",
        // "jest-dom/prefer-to-have-value": "off"
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    /**
     * Currently, we allow:
     *
     * ```jsx
     * const Component = (props) => {
     *  return <div />;
     * };
     * ```
     */
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
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
        pathGroups: [{ pattern: "react", group: "external", position: "before" }],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    /**
     * These are turned off because, typescript.
     */
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
  },
};
