module.exports = {
  extends: [
    "eslint-config-airbnb-base",
    "prettier",
    "plugin:react/recommended",
  ],
  parser: "@babel/eslint-parser",
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "import/extensions": 0,
    "import/no-unresolved": 1,
    "react/prop-types": 1,
    "import/prefer-default-export": 0,
    "no-console": 0,
    "no-alert": 0,
  },
};
