export default {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-recommended-vue', 'stylelint-config-recess-order'],
  rules: {
    'no-empty-source': null,
    'at-rule-no-unknown': null,
    'property-no-unknown': null,
    'function-no-unknown': null,
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'scss/no-global-function-names': null,
    'selector-pseudo-class-no-unknown': null,
  },
  ignoreFiles: ['dist/**/*', 'index.html'],
}
