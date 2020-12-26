/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    amd: true,
    node: true,
    mocha: true
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "linebreak-style": [
      "error",
      "windows"
    ],
    "comma-dangle": 0,
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "object-curly-newline": ["error", {
      "ObjectExpression": "always",
      "ObjectPattern": { "multiline": true },
      "ImportDeclaration": "never",
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
  }]
  },
};
