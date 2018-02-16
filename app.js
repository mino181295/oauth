const express = require('express');
const authRoutes = require('./routes/auth-routes.js');

const passport = require('./config/passport-setup');

const app = express();

/* Static setup fir the css files */
app.use('/styles', express.static('styles'));

app.use(passport.initialize());
app.use(passport.session());

/* Setup view engine */
app.set('view engine', 'ejs');

/* Main routes */
app.get('/', (request, response) => {
    response.render('home', {
        user: passport.user
    });
});

/* Create home route */
app.use('/auth', authRoutes);

/* Starts the server on the port */
app.listen(3000);
