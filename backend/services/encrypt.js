'use strict';

/* Importing the crypto-js module. */

const CryptoJS = require('crypto-js');

const ENCRYPTION_MODE = CryptoJS.mode.CBC;
const ENCRYPTION_ALG = CryptoJS.AES;
const ENCRYPTION_UTF8 = CryptoJS.enc.Utf8;
const ENCRYPTION_KEY = ENCRYPTION_UTF8.parse(APP_DATA.ENCRYPTION_CONFIG.KEY);
const ENCRYPTION_IV = ENCRYPTION_UTF8.parse(APP_DATA.ENCRYPTION_CONFIG.IV);

/* A function that decrypts encodedMessage. */
exports.decodeMessage = encodedMessage => {
    return ENCRYPTION_ALG.decrypt(encodedMessage, ENCRYPTION_KEY, {
        iv: ENCRYPTION_IV,
        mode: ENCRYPTION_MODE,
    }).toString(ENCRYPTION_UTF8);
};

/* A function that encrypts message. */
exports.encodeMessage = message => {
    return ENCRYPTION_ALG.encrypt(message, ENCRYPTION_KEY, {
        iv: ENCRYPTION_IV,
        mode: ENCRYPTION_MODE,
    }).toString();
};
