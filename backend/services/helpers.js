'use strict';

const { executeQuery } = require('./postgre');

/* This is a function that is used to escape the string. */
exports.escapeString = value => {
    if (value === null || value === undefined) {
        return 'NULL';
    }

    // Check if the value is a string, and escape it
    if (typeof value === 'string') {
        const escapedValue = value.replace(/'/g, "''");
        return "'" + escapedValue + "'";
    }

    return value; // For non-string values, return as is
};

/* This is a function that is used to check if the value is a number or not. */
exports.isNumber = (n = 0) => {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
};

/* This is a function that is used to convert the value to number. */
exports.toNumber = (n = 0) => {
    if (this.isNumber(n)) {
        return parseInt(n, 10);
    }
    return 0;
};

exports.runQuery = query => {
    return executeQuery(query);
};
