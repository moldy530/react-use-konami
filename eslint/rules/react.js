module.exports = {
    rules: {
        'react/boolean-prop-naming': 0, // Enforces consistent naming for boolean props
        'react/default-props-match-prop-types': 2, // Prevent extraneous defaultProps on components
        'react/display-name': 0, // Prevent missing displayName in a React component definition
        'react/forbid-component-props': 0, // Forbid certain props on Components
        'react/forbid-elements': 0, // Forbid certain elements
        'react/forbid-prop-types': 0, // Forbid certain propTypes
        'react/forbid-foreign-prop-types': 0, // Forbid foreign propTypes
        'react/jsx-boolean-value': 0, // Enforce boolean attributes notation in JSX (fixable)
        'react/jsx-closing-bracket-location': 2, // Validate closing bracket location in JSX (fixable)
        'react/jsx-closing-tag-location': 2, // Validate closing tag location in JSX (fixable)
        'react/jsx-curly-spacing': 2, // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions (fixable)
        'react/jsx-equals-spacing': 2, // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
        'react/jsx-filename-extension': 0, // Restrict file extensions that may contain JSX
        'react/jsx-first-prop-new-line': 2, // Enforce position of the first prop in JSX (fixable)
        'react/jsx-handler-names': 0, // Enforce event handler naming conventions in JSX
        'react/jsx-indent': ['error', 4], // Validate JSX indentation (fixable)
        'react/jsx-indent-props': ['error', 4], // Validate props indentation in JSX (fixable)
        'react/jsx-key': 2, // Validate JSX has key prop when in array or iterator
        'react/jsx-max-props-per-line': [2, { maximum: 3 }], // Limit maximum of props on a single line in JSX (fixable)
        'react/jsx-no-bind': 2, // Prevent usage of .bind() and arrow functions in JSX props
        'react/jsx-no-comment-textnodes': 2, // Prevent comments from being inserted as text nodes
        'react/jsx-no-duplicate-props': 0, // Prevent duplicate props in JSX
        'react/jsx-no-literals': 0, // Prevent usage of unwrapped JSX strings
        'react/jsx-no-target-blank': 2, // Prevent usage of unsafe target='_blank'
        'react/jsx-no-undef': 0, // Disallow undeclared variables in JSX
        'react/jsx-pascal-case': 2, // Enforce PascalCase for user-defined JSX components
        'react/jsx-sort-props': 2, // Enforce props alphabetical sorting (fixable)
        'react/jsx-tag-spacing': [2, {
            beforeSelfClosing: 'always',
        }], // Validate whitespace in and around the JSX opening and closing brackets (fixable)
        'react/jsx-uses-react': 1, // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-vars': 1, // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-wrap-multilines': [2, {
            arrow: 'parens-new-line',
            assignment: 'parens-new-line',
            condition: 'ignore',
            declaration: 'parens-new-line',
            logical: 'ignore',
            prop: 'parens-new-line',
            return: 'parens-new-line',
        }], // Prevent missing parentheses around multilines JSX (fixable)
        'react/no-array-index-key': 0, // Prevent using Array index in key props
        'react/no-children-prop': 0, // Prevent passing children as props
        'react/no-danger': 0, // Prevent usage of dangerous JSX properties
        'react/no-danger-with-children': 2, // Prevent problem with children and props.dangerouslySetInnerHTML
        'react/no-deprecated': 2, // Prevent usage of deprecated methods
        'react/no-did-mount-set-state': 0, // Prevent usage of setState in componentDidMount
        'react/no-did-update-set-state': 0, // Prevent usage of setState in componentDidUpdate
        'react/no-direct-mutation-state': 2, // Prevent direct mutation of this.state
        'react/no-find-dom-node': 0, // Prevent usage of findDOMNode
        'react/no-is-mounted': 0, // Prevent usage of isMounted
        'react/no-multi-comp': 0, // Prevent multiple component definition per file
        'react/no-redundant-should-component-update': 2, // Prevent usage of shouldComponentUpdate when extending React.PureComponent
        'react/no-render-return-value': 2, // Prevent usage of the return value of React.render
        'react/no-set-state': 0, // Prevent usage of setState
        'react/no-typos': 0, // Prevent common casing typos
        'react/no-string-refs': 0, // Prevent using string references in ref attribute.
        'react/no-unescaped-entities': 2, // Prevent invalid characters from appearing in markup
        'react/no-unknown-property': 0, // Prevent usage of unknown DOM property (fixable)
        'react/no-unused-prop-types': 0, // Prevent definitions of unused prop types
        'react/no-will-update-set-state': 0, // Prevent usage of setState in componentWillUpdate
        'react/prefer-es6-class': 2, // Enforce ES5 or ES6 class for React Components
        'react/prefer-stateless-function': 0, // Enforce stateless React Components to be written as a pure function
        'react/prop-types': 0, // Prevent missing props validation in a React component definition
        'react/react-in-jsx-scope': 2, // Prevent missing React when using JSX
        'react/require-default-props': 0, // Enforce a defaultProps definition for every prop that is not a required prop
        'react/require-optimization': 0, // Enforce React components to have a shouldComponentUpdate method
        'react/require-render-return': 0, // Enforce ES5 or ES6 class for returning value in render function
        'react/self-closing-comp': [2, {
            component: true,
            html: false,
        }], // Prevent extra closing tags for components without children (fixable)
        'react/sort-comp': 0, // Enforce component methods order; autofixable via https://github.com/reactjs/react-codemod/blob/master/transforms/sort-comp.js
        'react/sort-prop-types': 0, // Enforce propTypes declarations alphabetical sorting
        'react/style-prop-object': 0, // Enforce style prop value being an object
        'react/void-dom-elements-no-children': 2, // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    },
};
