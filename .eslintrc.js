module.exports = {
  extends: [
    "react-app",
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  rules: {
    "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")], // https://stackoverflow.com/q/39114446/2771889
    "import/prefer-default-export": 0, // https://stackoverflow.com/q/54245654/2771889
    "react/sort-comp": "off", // https://github.com/yannickcr/eslint-plugin-react/issues/1214
    "no-restricted-syntax": [ // Allow `ForOfStatement` but keep other defaults https://github.com/airbnb/javascript/issues/1271#issuecomment-548688952
      "error",
      {
        selector: "ForInStatement",
        message: "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "import/no-anonymous-default-export": "error", // https://github.com/c-hive/guides/blob/a82e1b37ef662c8f8d7485793f99970080f40dca/js/best-practices.md#name-functions-when-exporting
    "import/no-extraneous-dependencies": [ // https://stackoverflow.com/q/44939304/2771889
      "error",
      {
        "devDependencies": ["**/*.test.js", "**/*.test.jsx", "src/setupTests.js"]
      },
    ],
  },
  "env": {
    "browser": true,
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  },
};
