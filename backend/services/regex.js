'use strict';

/* Exporting a function that returns a regex. */
exports.USZipcodeRegex = () => {
    return /\d{5}([ \\-]\d{4})?/;
};

exports.phoneNumberRegex = str => {
    return (str || '').replace(/[^0-9+]/g, '');
};
