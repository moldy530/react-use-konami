module.exports = {
    rules: {
        'import/default': 2, // Ensure a default export is present, given a default import.
        'import/export': 2, // Report any invalid exports, i.e. re-export of the same name
        'import/extensions': 0, // Ensure consistent use of file extension within the import path
        'import/first': [2, false], // Ensure all imports appear before other statements
        'import/max-dependencies': 0, // Limit the maximum number of dependencies a module can have
        'import/named': 2, // Ensure named imports correspond to a named export in the remote file.

        // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
        'import/namespace': [2, { allowComputed: true }],

        'import/newline-after-import': 2, // Enforce a newline after import statements
        'import/no-absolute-path': 0, // Forbid import of modules using absolute paths
        'import/no-amd': 2, // Report AMD require and define calls.
        'import/no-anonymous-default-export': 0, // Forbid anonymous values as default exports
        'import/no-commonjs': 0, // Report CommonJS require calls and module.exports or exports.*.
        'import/no-deprecated': 1, // Report imported names marked with @deprecated documentation tag
        'import/no-duplicates': 2, // Report repeated import of the same module in multiple places
        'import/no-dynamic-require': 0, // Forbid require() calls with expressions
        'import/no-extraneous-dependencies': 0, // Forbid the use of extraneous packages
        'import/no-internal-modules': 0, // Prevent importing the submodules of other modules
        'import/no-mutable-exports': 2, // Forbid the use of mutable exports with var or let.
        'import/no-named-as-default': 0, // Report use of exported name as identifier of default export
        'import/no-named-as-default-member': 0, // Report use of exported name as property of default export
        'import/no-named-default': 0, // Forbid named default exports
        'import/no-namespace': 0, // Report namespace imports
        'import/no-nodejs-modules': 0, // No Node.js builtin modules.
        'import/no-restricted-paths': 0, // Restrict which files can be imported in a given folder
        'import/no-unassigned-import': 0, // Forbid unassigned imports
        'import/no-unresolved': [2, {
            ignore: [
                // images
                '\\.(gif|png|jpg|jpeg|svg|webp|bmp|apng|tiff|svg)$',

                // webpack loader statements
                '^\\!?[A-Za-z-0-9]+\\!.*?$',
            ],
        }], // Ensure imports point to a file/module that can be resolved.
        'import/no-webpack-loader-syntax': 0, // Forbid Webpack loader syntax in imports
        'import/order': 0, // Enforce a convention in module import order
        'import/prefer-default-export': 0, // Prefer a default export if module exports a single name
        'import/unambiguous': 0, // Report potentially ambiguous parse goal (script vs. module)
    },
};
