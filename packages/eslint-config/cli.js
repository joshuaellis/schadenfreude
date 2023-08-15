module.exports = {
  extends: ["./base"],
  env: {
    node: true,
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
  },
};
