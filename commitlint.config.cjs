module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'ci', 'pref', 'refactor', 'style', 'test', 'chore', 'build', 'revert', 'docs']
    ]
  }
}
