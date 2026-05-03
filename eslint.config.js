import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'
import prettier from 'eslint-config-prettier'
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },

  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['api/**/*.ts'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.node,
    },
    rules: {
      'no-console': 'off',
    },
  },

  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],

    files: ['**/*.{ts,tsx}'],

    ignores: ['api/**/*.ts'],

    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      '@stylistic': stylistic,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      ...reactHooks.configs.recommended.rules,

      'react/react-in-jsx-scope': 'off',

      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      'unused-imports/no-unused-imports': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',

      'no-console': 'warn',

      ...prettier.rules,

      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
        { blankLine: 'always', prev: 'if', next: ['const', 'let', 'using'] },
      ],
    },
  },
)
