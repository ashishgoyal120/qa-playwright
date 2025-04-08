import tsESLint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    // TypeScript configuration
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': tsESLint,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },

    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-floating-promises': 'error', // It will give error if we foget to add await, a call or function that returns a promise
      '@typescript-eslint/await-thenable': 'error', // It will give error if we use await on a non-promise value
      '@typescript-eslint/no-unused-vars': 'error', // It will give error if we declare a variable but never use it
      '@typescript-eslint/no-explicit-any': 'error', // If 'error' it will give error if we use 'any' type e.g name : string, if 'OFF' it will not give error e.g name : any
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'variable', format: ['camelCase'] },
        { selector: 'function', format: ['camelCase'] },
        { selector: 'class', format: ['PascalCase'] },
        { selector: 'interface', format: ['PascalCase'], prefix: ['I'] },
        { selector: 'enum', format: ['PascalCase'] },
        { selector: 'typeAlias', format: ['PascalCase'] },
        { selector: 'parameter', format: ['camelCase'] },
      ],
    },
  },
  prettier,
];
