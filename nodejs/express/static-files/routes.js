const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const aboutController = require('./src/controllers/aboutController');

// Home routes
route.get('/', homeController.homePage);
route.post('/', homeController.receiveForm);

// About routes
route.get('/about', aboutController.homePage);

module.exports = route;