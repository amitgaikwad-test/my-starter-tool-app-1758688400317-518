export default [
  {
    files: ['src/**/*.{js,jsx}'],
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react'],
    parserOptions: {
      ecmaVersion: 2023,
      ecmaFeatures: {
        jsx: true
      }
    }
  }
];