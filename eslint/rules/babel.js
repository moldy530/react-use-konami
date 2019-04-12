module.exports = {
    'rules': {
        'babel/new-cap': 1, // Ignores capitalized decorators (@Decorator)
        'babel/object-curly-spacing': ["error", "always"], // doesn't complain about export x from "mod"; or export * as x from "mod"
        'babel/no-invalid-this': 0, // doesn't fail when inside class properties (class A { a = this.b; })
        'babel/semi': 0, // doesn't fail when using for await (let something of {}). Includes class properties
    },
};
