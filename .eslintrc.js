module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react'],
  rules: {
    // -- React
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-bind': 'off',

    // -- TypeScript
    '@typescript-eslint/no-use-before-define': 'off',

    // -- Miscellaneous
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
