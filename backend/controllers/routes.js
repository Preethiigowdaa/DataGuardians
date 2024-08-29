'use strict';

/* Importing modules */
const { jwtVerifyToken } = require('./../services/jwt');
//const searchController = require('./search/searchController');
const express = require('express');
const router = express.Router();

// /* Calling products router without any token validation*/
// router.use('/products', require('./products/productsRouter'));
// router.use('/specs', require('./specs/specsRouter'));
// router.use('/supports', require('./support/supportsRouter'));
// router.use('/bot', require('./chatBot/botRouter'));
// router.use('/nav', require('./navigator/navigatorRouter'));
// router.route('/search').post(searchController.search);

/* 
A middleware that checks if the request has a token in the header. 
If it does, it verifies the token
and if it is valid, it passes the request to the next middleware.
 */
router.use(async (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next();
    } else if (!req.headers['x-auth-token']) {
        return res.status(APP_DATA.STATUS_CODES.FORBIDDEN_ERROR_CODE).json({
            message: APP_DATA.APP_MESSAGES.FORBIDDEN,
        });
    } else {
        try {
            const decodedData = await jwtVerifyToken(
                req.headers['x-auth-token'],
            );
            req.tokenDecoded = decodedData;
            next();
        } catch (err) {
            return res
                .status(APP_DATA.STATUS_CODES.UNAUTHORIZED_ERROR_CODE)
                .json({
                    message: APP_DATA.APP_MESSAGES.UNAUTHORIZED,
                    error: err,
                });
        }
    }
});

/* Exporting the router object to be used in the main app.js file. */
module.exports = router;
