let schema;

// this is a no-op if directory service is not installed

try {
    // eslint-disable-next-line global-require
    schema = require('@zocdoc/directory-service/schema.json');
} catch (e) { /* */ }

module.exports = {
    'rules': schema ? {
        'graphql/template-strings': ['error', {
            'env': 'apollo',
            'schemaJson': schema,
        }],
    } : {},
};
