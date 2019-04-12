module.exports = {
    root: true,
    extends: [
        require.resolve('./eslint'),
        'react-app',
    ],
    rules: {
        'global-require': 'off',
        "react-hooks/rules-of-hooks": 'error',
    },
    settings: {
        'import/resolver': {
            'babel-module': {
                'root': ['./src'],
            },
            'eslint-import-resolver-typescript': true,
        },
    },
    plugins: [
        'react-hooks',
        'module-resolver'
    ],
};
