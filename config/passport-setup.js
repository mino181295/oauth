const keys = require('./keys');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL:'/auth/google/success'
    }, (accessToken, refreshToken, profile, done) => {
        module.exports.user = profile;
        done(null, profile);
    }
));

passport.use(new FacebookStrategy({
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret,
    callbackURL: "/auth/facebook/success",
    profileFields: ['id', 'first_name', 'last_name', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
      console.log(profile)
      module.exports.user = profile;
      done(null, profile);
  }
));

passport.serializeUser((user, done) => {
    done(null, user);
});
  
passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = passport;
