'use strict';

/* Importing the jsonwebtoken module. */
const jwt = require('jsonwebtoken');

const { encodeMessage, decodeMessage } = require('./encrypt');

/* Exporting the function jwtTokenGenerate to generate jwt token. */
exports.jwtGenerateToken = (data = {}) => {
    return jwt.sign(
        { data: encodeMessage(JSON.stringify(data)) },
        APP_DATA.CONFIG.SECRET_TOKEN,
        {
            expiresIn: APP_DATA.CONFIG.TOKEN_EXPIRE_TIME,
        },
    );
};

/* This is a function that is used to verify the token. */
exports.jwtVerifyToken = (token = '') => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, APP_DATA.CONFIG.SECRET_TOKEN, (err, decoded) => {
            if (err) {
                return reject();
            } else {
                const _decoded = decodeMessage(decoded.data);
                return resolve(JSON.parse(_decoded));
            }
        });
    });
};
