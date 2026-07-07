const materialTokenPattern = '/var\\(--mat-sys-[a-z0-9-]+\\)/';
const cssVariablePattern = '/var\\(--[a-z0-9-]+\\)/';

module.exports = {
  extends: ['stylelint-config-standard-scss'],
  ignoreFiles: ['dist/**', 'coverage/**', 'node_modules/**'],
  rules: {
    'alpha-value-notation': 'percentage',
    'at-rule-no-unknown': null,
    'color-function-notation': 'modern',
    'color-named': 'never',
    'color-no-hex': true,
    'custom-property-pattern': '^(mat-sys|app|portfolio|tw|mdc|mat)-[a-z0-9-]+$',
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-no-important': true,
    'function-disallowed-list': ['rgb', 'rgba', 'hsl', 'hsla'],
    'max-nesting-depth': [2, { ignore: ['pseudo-classes'] }],
    'no-descending-specificity': null,
    'property-disallowed-list': [
      'background-image',
      'box-shadow',
      'filter',
      'text-shadow',
    ],
    'scale-unlimited/declaration-strict-value': [
      ['/color$/', 'background', 'background-color', 'border-color', 'outline-color', 'fill', 'stroke'],
      {
        ignoreValues: [materialTokenPattern, cssVariablePattern, 'currentColor', 'transparent', 'inherit', 'initial', 'unset'],
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['apply', 'reference', 'tailwind', 'theme', 'source', 'utility', 'variant', 'custom-variant'],
      },
    ],
    'selector-class-pattern': [
      '^[a-z][a-z0-9]*(?:-[a-z0-9]+)*(?:__(?:[a-z0-9]+-?)+)?(?:--(?:[a-z0-9]+-?)+)?$',
      {
        message: 'Use readable kebab-case or BEM class names, for example component__element--modifier.',
      },
    ],
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-max-specificity': '0,3,0',
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep'],
      },
    ],
  },
};
