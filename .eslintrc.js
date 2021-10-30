module.exports = {
  root: true,
  
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  globals: { "delay": false, "jest": false, "JSX": false },
  rules: {
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn"
  }
};
