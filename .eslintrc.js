module.exports = {
  root: true,
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  extends: [
    "plugin:nuxt/recommended",
    "eslint:recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  ignorePatterns: [".eslintrc.js"],
};
