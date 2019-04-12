module.exports = {
    extends: [
        require.resolve('eslint-config-airbnb'),
        require.resolve('eslint-config-prettier/react'),
        require.resolve('./globals/env'),
        require.resolve('./globals/jest'),
        require.resolve('./globals/mocha'),
        require.resolve('./globals/wdio'),
        require.resolve('./rules/babel'),
        require.resolve('./rules/general'),
        require.resolve('./rules/import'),
        require.resolve('./rules/jest'),
        require.resolve('./rules/jsx-a11y'),
        require.resolve('./rules/react'),
    ],
    parser: 'babel-eslint',
    env: {
        browser: true,
        jest: true,
        mocha: true,
        node: true,
        es6: true,
    },
    plugins: [
        'babel',
        'jest',
        'react',
    ],
};
