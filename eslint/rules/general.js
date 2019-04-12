const __CI__ = !!process.env.CI;

const RestrictedModules = {
    patterns: [
        'react-addons-*',
    ],
};

module.exports = {
    rules: {
        'arrow-body-style': 0,
        'arrow-parens': [ 2, 'as-needed' ],
        'class-methods-use-this': 0,
        'comma-dangle': [ 2, 'always-multiline' ],
        'array-bracket-spacing': [ 2, 'always', {
            singleValue: false,
            objectsInArrays: false,
            arraysInArrays: false,
        }],
        'consistent-return': 0,
        'default-case': 0,
        'function-paren-newline': [ 2, 'consistent' ],
        'generator-star-spacing': 1,
        'global-require': 1,
        indent: [ 'error', 4, {
            /**
             * this fixes some oddities around how interpolations inside styled-components
             * template literals are indented
             */
            ignoredNodes: [ 'TemplateLiteral', 'TemplateElement', 'JSXElement', 'TemplateLiteral *' ],
            SwitchCase: 1,
        }],
        'linebreak-style': 0,
        'max-len': [ 2, {
            code: 120,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
            ignoreUrls: true,
        }],
        'new-cap': 0,
        'no-await-in-loop': 1,
        'no-confusing-arrow': 0,
        'no-console': __CI__ ? 2 : 1,
        'no-debugger': __CI__ ? 2 : 1,
        'no-else-return': 0,
        'no-extra-boolean-cast': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-prototype-builtins': 0,
        'no-restricted-globals': [ 2, 'event' ],
        'no-restricted-imports': [ 2, RestrictedModules ],
        'no-restricted-modules': [ 2, RestrictedModules ],
        'no-restricted-syntax': [
            2,
            'ForInStatement',
            'LabeledStatement',
            'WithStatement',
        ],
        'no-return-assign': 0,
        'no-return-await': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 0,
        'no-unused-expressions': 0,
        'no-use-before-define': 0,
        'object-property-newline': [ 2, { allowMultiplePropertiesPerLine: false }],
        'object-shorthand': 1,
        'one-var': [ 2, 'never' ],
        'padded-blocks': [ 2, 'never' ],
        'prefer-const': 2,
        'prefer-destructuring': [ 2, {
            array: false,
            object: true,
        }],
    },
};
