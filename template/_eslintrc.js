module.exports = {
    root: true,
    plugins: ['react-hooks'],
    extends: ['@react-native-community'],
    rules: {
        semi: ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
        'import/resolver': {
            'babel-module': {},
        },
    },
}
