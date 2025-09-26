module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-debugger': 'error',
  },
};
