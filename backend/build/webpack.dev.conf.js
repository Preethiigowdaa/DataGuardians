const base = require('./webpack.base.conf');

base.mode = 'development';
base.output.filename = 'index-dev.js';
base.externals = [
    function (_context, request, callback) {
        if (request[0] == '.') {
            callback();
        } else {
            callback(null, "require('" + request + "')");
        }
    },
];

module.exports = base;
