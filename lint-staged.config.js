module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --quiet',
    'git add',
    'jest --bail --findRelatedTests',
  ],
};
