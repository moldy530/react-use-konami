'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/use-konami.production.min.js');
} else {
    module.exports = require('./cjs/use-konami.development.js');
}
