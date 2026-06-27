const prettierPlugin = require('eslint-plugin-prettier');
const typescriptParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const angularPlugin = require('@angular-eslint/eslint-plugin');
const angularTemplatePlugin = require('@angular-eslint/eslint-plugin-template');
const angularTemplateParser = require('@angular-eslint/template-parser');
const angularEslint = require('angular-eslint');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

const collectRules = (configs) => Object.assign({}, ...configs.map((config) => config.rules ?? {}));

module.exports = [
  {
    ignores: ['.cache/', '.git/', '.github/', 'node_modules/'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.spec.json'],
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@angular-eslint': angularPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...collectRules(angularEslint.configs.tsRecommended),
      ...prettierPlugin.configs?.rules,
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
        },
      ],

      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'signature',

            'public-static-field',
            'public-instance-field',

            'protected-static-field',
            'protected-instance-field',

            'private-static-field',
            'private-instance-field',

            'public-constructor',
            'protected-constructor',
            'private-constructor',

            'public-static-method',
            'public-instance-method',

            'protected-static-method',
            'protected-instance-method',

            'private-static-method',
            'private-instance-method',
          ],
        },
      ],

      'no-console': ['error', { allow: ['warn', 'error'] }],

      'max-lines': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
      'max-len': [
        'error',
        {
          code: 120,
          ignoreUrls: true,
          ignoreComments: true,
          ignorePattern: '^import\\s.+',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/prefer-readonly': ['error', { onlyInlineLambdas: false }],
      '@typescript-eslint/no-empty-function': ['error', { allow: [] }],
      '@angular-eslint/prefer-on-push-component-change-detection': ['warn'],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        },
      ],
      '@angular-eslint/prefer-output-readonly': 'error',
      '@angular-eslint/prefer-standalone': ['error'],
      'max-lines-per-function': ['error', { max: 50, skipComments: true, skipBlankLines: true }],
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularTemplateParser,
    },
    plugins: {
      '@angular-eslint/template': angularTemplatePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...collectRules(angularEslint.configs.templateRecommended),
      ...collectRules(angularEslint.configs.templateAccessibility),
      'prettier/prettier': [
        'error',
        {
          parser: 'angular',
          printWidth: 120,
          bracketSameLine: true,
        },
      ],
      'max-lines': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
      'max-len': ['error', { code: 240 }],
      '@angular-eslint/template/prefer-self-closing-tags': ['error'],
      '@angular-eslint/template/prefer-ngsrc': ['error'],
      '@angular-eslint/template/prefer-control-flow': ['error'],
      '@angular-eslint/template/no-any': ['error'],
      '@angular-eslint/template/no-distracting-elements': ['error'],
      '@angular-eslint/template/no-inline-styles': ['error'],
      '@angular-eslint/template/no-negated-async': ['error'],
      '@angular-eslint/template/no-positive-tabindex': ['error'],
      '@angular-eslint/template/no-interpolation-in-attributes': ['error'],
      '@angular-eslint/template/attributes-order': [
        'error',
        {
          order: [
            'STRUCTURAL_DIRECTIVE',
            'TEMPLATE_REFERENCE',
            'ATTRIBUTE_BINDING',
            'INPUT_BINDING',
            'TWO_WAY_BINDING',
            'OUTPUT_BINDING',
          ],
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
];
