/* eslint-env node */
module.exports = {
  root: true,
  env: { browser: false, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'eslint-plugin-import-helpers',
    'sort-destructure-keys',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['.eslintrc.cjs', 'vitest.config.ts'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': ['error'],
    'import/extensions': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.ts'] },
    ],
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^@/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: false,
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': ['error'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};
