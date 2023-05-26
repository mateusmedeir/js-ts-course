require('dotenv').config(); // Environment vairables .env
const express = require('express');
const app = express();
const mongoose = require('mongoose'); // Database connection
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.emit('ready');
})
.catch(error => console.log(error)); // To identidy a client's browser
const session = require('express-session');
const MongoStore = require('connect-mongo'); // For sessions to be saved in the database
const flash = require('connect-flash'); // Flash messages
const routes = require('./routes'); // Application routes
const path = require('path');
const helmet = require('helmet'); // Security
const csrf = require('csurf'); // Form security
const { globalMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware'); // Midllewares

app.use(helmet()); // Starting Helmet

app.use(express.urlencoded( {extended: true })); // Enabling Forms
app.use(express.json()); // Enabling JSON
app.use(express.static(path.resolve(__dirname, 'public'))); // Allows static files (img, css, js, ...) to be accessed directly
const sessionOptions = session({
    secret: 'aswdsadwadawsdasd a adsdasdasd adasdw fefedsds ay()',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
}); // Session configuration

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); // Defines the files to be rendered on the screeen (html, ejs, ...)
app.set('view engine', 'ejs'); // Render the files

app.use(csrf());

// Middlewares
app.use(globalMiddleware);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('ready', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000');
    });
});