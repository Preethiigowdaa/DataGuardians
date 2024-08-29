'use strict';

const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const express = require('express');
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');

const app = express();
const port = 3000;
// const productsDataBase = require('../API/controllers/products/productsDataBase');

if (APP_DATA.CONFIG.ENV === 'DEV') {
    const cors = require('cors');
    app.use(cors());
}

app.use(helmet());
app.use(compression());
app.use(express.json());
//app.use(morgan(APP_DATA.CONFIG.LOG_FORMAT));
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// const storage = new Storage({
//     keyFilename: './key-file-from-service-account.json',
// });

// const storage = new Storage({
//     projectId: 'mgcp-m4-amfi',
//     credentials: {
//         "type": "service_account",
//         "project_id": "mgcp-m4-amfi",
//         "private_key_id": "0fd2193d8398a400ae7884b6bc479e9069ea96b7",
//         "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDLYp8r+/qLfT9T\nvxMu2BAVx7GMP/qNzp2Z7wnUSYaZ9sTZbNayabIvGUT+m1559brPjTiun2QP5Fbl\nDNa9uZk2uc6t6wgQT2FuleRUFcZDtow1WqxBLm7kg+ppnYDYbB8Em/fyHyvzq0P7\nKitHlx75NOU6jygqTE2pAzlAgpbsyrX7XKH5Q5cg+ZyzHlHoSnK7LJKBC5O3fIqG\nGNHOUl0BfIcjEGmiB4mcHgPkY5U0rybx4blu7UIDjvIGLb0Tm+Yu67lkr2nqWnUS\nyYQXFaB16yO/HTIwdAieSJNJZLK6wpMtDoEdzL6z+UVeDaPkpoGsSrExdzM7zPK8\n6CSemlddAgMBAAECggEAYOKwp3/IGPXHmondxgVoGDACLKj3nuDro75CxO1noOV0\nXYzi86e1GYmkm9MAnQGJhcCk3U6RmJ5yJHfKviNxUKgPxDq/oyFlbQwbclDTG0OV\nI/93Ki/H5LTQkJJWpAJRfl0cLqtZwSB3aGjsqBRdzWI8xnoWrJufrSEbf1cWNWL7\n/D1VSPmIxfKDq1jTOode7wP2aMuVhr+nwquQ6AKi6jc/LBPn0NxLWr7+17cyIUIC\nZWSC+bgQEIvD/nQIyN6g2kOcz7IAGsnLVSjR1GJ9VImBo79TNPtgdU1yTeisGmPV\n1oTrGEVl9TcOZ4U2hYCETZKrk5dALhYgBDKxDWsfgwKBgQDpf8mUIc5qArg+Je3J\nF0I68q2Xe4g4DodbqEBte5SRttMj0TbZ0o8pTLzFQPjh3qLWB0mDbmS26TkG8Yp6\nrzpDjpZeOmVfv0H1EQyGZKQIGFE6GWq/ZcHof+LYQW3nQlghmfEuDaS+IIE5TkpJ\nNW9MGZq0Bpbop+Nk1D2w1KYBJwKBgQDe+/N5PiTMOy/LuCQo9rsVusDwGeLWFEck\nXBXz6a/LEDG/KlEmx0xKjh1+2t1qbiaf4Q38DP8/lpEqxbh9xfIb+qHUJ1nfGG/7\nE7DfGeV+BNAb8amE26PyueUTZUFznn9C94//GP3n2RdIMQq25EcOsBa6yljcqHec\nP31nTbCt2wKBgQCQF77SviX+P51pJMjfro29iOLdN2txhG29f0/7ACdH4LXdRY9+\nzjRwfR2E8Lpl0JlWUPrps6dNRRFfGpGlchsXc5eRoKHMe199lz7OdK7RHAiMPQEm\nCeqmyry3TXFAJC301mYCUIMYnUCBl7G6CdKb+LUCYYqhGnH2WA+V3zRuQwKBgQCj\nvcYbaRvicS/22+CJyCy3lyzo40lkRP284HYqZ5b0eY7ePvfajw0hzlwwdA2Vgw+P\n5da8GNsy2aD+FLUWfs37578AKGlhXvOUHvCJ091m/afIbVw7OIKa0hE6fedjPKdd\nCKfP/o0svIjRNVoV1WmsingWcFJyrq8uqJywyCcOcwKBgH60aT/TruE7BQRSRPHG\nv2vFtdaEmcFNELz5P1k4NKbcNhzmwR5C+OdJlmsqtBpHhtk5Y0aOlHcfVSa+HogJ\nZAUoltrftdxlZdqidkVjOnHWxqavxjgSRK1wZg/0+RmEJBuRchwhQ0/NkE4C1P3L\n8l3EBw4IQEVv+iggicwhPFVJ\n-----END PRIVATE KEY-----\n",
//         "client_email": "mgcp-m4-amfi-cloudstorage-sa@mgcp-m4-amfi.iam.gserviceaccount.com",
//         "client_id": "103548146661361656092",
//         "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//         "token_uri": "https://oauth2.googleapis.com/token",
//         "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//         "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mgcp-m4-amfi-cloudstorage-sa%40mgcp-m4-amfi.iam.gserviceaccount.com",
//         "universe_domain": "googleapis.com"
//     },
// });

// const bucketName = 'mgcp-m4-bucket';
// const bucket = storage.bucket(bucketName);

// const upload = multer({
//     storage: multer.memoryStorage(),
//     limits: {
//         fileSize: 5 * 1024 * 1024, // 5MB limit
//     },
// });

// app.use('/ProductImages', express.static('ProductImages'));

// app.post('/api/v1/products/:productId/:indicationId/:tab_key/productImages', upload.single('image'), async (req, res) => {
//     try {
//         const { productId, indicationId, tab_key } = req.params;
//         //  console.log()
//         const file = req.file;
//         //  console.log('file', file);
//         if (!file) {
//             return res.status(400).json({ error: 'No file uploaded.' });
//         }
//         const destinationPath = `product-images/${file.originalname}`;
//         // Upload the file to Google Cloud Storage
//         await bucket.file(destinationPath).createWriteStream().end(file.buffer);
//         // Get the public URL of the uploaded file
//         const publicUrl = `https://storage.cloud.google.com/${bucketName}/${destinationPath}`;

//         // Check if indicationId is available and set it accordingly
//         const indicationIdValue = Number(indicationId) || null;

//         // Save image details to the database
//         const savedImage = await productsDataBase.saveProductImage({
//             productId: Number(productId),
//             indicationId: indicationIdValue,
//             tabKey: String(tab_key),
//         }, publicUrl);

//         // Respond with the public URL
//         res.json({ imageUrl: publicUrl });
//         //console.log('savedImage', savedImage)
//     } catch (error) {
//         console.error("Error handling file upload:", error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.delete('/api/v1/products/:productId/:indicationId/:tab_key/productImages', async (req, res) => {
//     try {
//         const { productId, indicationId, tab_key } = req.params;
//         const { pi_key } = req.body;
//         // console.log('pi_key', pi_key);

//         const indicationIdValue = Number(indicationId) || null;
//         //  console.log('indicationIdValue', indicationIdValue);
//         // Delete the image record from the database
//         const deletedImage = await productsDataBase.deleteProductImage({
//             productId: Number(productId),
//             indicationId: indicationIdValue,
//             tabKey: String(tab_key),
//             pi_key: String(pi_key),
//         });

//         // Respond with success
//         res.json({ isSuccess: true });
//     } catch (error) {
//         console.error('Error handling image deletion:', error);
//         res.status(500).json({ isSuccess: false, error: 'Internal Server Error' });
//     }
// });


app.use('/api/v1', require('./controllers/routes'));

app.use((req, res) => {
    res.status(APP_DATA.STATUS_CODES.NOT_FOUND_ERROR_CODE).json({
        message: APP_DATA.APP_MESSAGES.NOT_FOUND,
    });
});

module.exports = app;

process.on('unhandledRejection', reason => {
    console.error(reason);
    process.exit(1);
});

process.on('uncaughtException', error => {
    console.error(error);
    process.exit(1);
});