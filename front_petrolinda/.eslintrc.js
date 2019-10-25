module.exports = {
  "parser": "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: "babel-eslint"
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-console":0,
    "react/forbid-component-props": 0,
    "react/forbid-prop-types":0,
    "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }]

  },
};
