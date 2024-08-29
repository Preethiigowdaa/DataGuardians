'use strict';

process.chdir(__dirname);

const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./../controllers/routes.js'];

swaggerAutogen(outputFile, endpointsFiles);
