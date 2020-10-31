module.exports = {
  hooks: {
    'pre-commit': 'yarn tsc && yarn lint-staged',
  },
};
