const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');

// Home routes
route.get('/', homeController.homePage);
route.post('/', homeController.receiveForm);

// About routes
route.get('/about', aboutController.homePage);

module.exports = route;