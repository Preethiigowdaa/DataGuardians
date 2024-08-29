const resolve = require('path').resolve;

module.exports = {
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    entry: ['./bin/www'],
    output: {
        filename: 'index.js',
        path: resolve(__dirname, './../dist'),
    },
};
