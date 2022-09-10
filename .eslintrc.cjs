/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'standard-with-typescript',
        'prettier',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    ignorePatterns: ['jest.config.cjs', '.prettierrc.cjs', 'lint-staged.config.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaVersion: 12,
        project: ['./tsconfig.json'],
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'import'],
    reportUnusedDisableDirectives: true,
    root: true,
    settings: {
        'import/resolver': {
            typescript: true,
            node: true,
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts'],
        },
    },
    rules: {
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/space-before-function-paren': [
            'error',
            {
                anonymous: 'ignore',
                named: 'never',
            },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow-as-parameter',
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
        'import/extensions': [
            'error',
            'never',
            {
                protocol: 'always',
                json: 'always',
            },
        ],
        'import/no-cycle': ['error'],
        'import/no-self-import': ['error'],
        'no-case-declarations': ['off'],
        'no-void': [
            'error',
            {
                allowAsStatement: true,
            },
        ],
    },
    overrides: [
        {
            files: ['**/__tests__/**'],
            plugins: ['jest'],
            extends: ['plugin:jest/recommended'],
            rules: {
                '@typescript-eslint/consistent-type-assertions': [
                    'error',
                    {
                        assertionStyle: 'as',
                        objectLiteralTypeAssertions: 'allow',
                    },
                ],
            },
        },
    ],
};
