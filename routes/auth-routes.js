const router = require('express').Router();
const passport = require('passport');

router.get('/login', (request, response) => {
    response.render('login');
});

router.get('/logout', (request, response) => {
});

router.get('/google', passport.authenticate('google', { 
        scope: ['profile']
    })
);

router.get('/google/success', passport.authenticate('google'), (request, response) => {
    response.redirect("/");
});

router.get('/facebook', passport.authenticate('facebook', { 
        scope: ['public_profile', 'user_friends'] 
    })
);

router.get('/facebook/success', passport.authenticate('facebook'), (request, response) => {
    response.redirect("/");
});

module.exports = router;