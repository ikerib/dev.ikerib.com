'use strict';

var mongoose      = require('mongoose'),
    LocalStrategy = require('passport-local').Strategy,
    User          = mongoose.model('User');

module.exports = function(passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback : true
  },
  function (req, email, password, done) {
    if (email) {
      email = email.toLowerCase();
    }

    process.nextTick(function () {
      User.findOne({'email': email}, function (err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
            return done(null, false, req.flash(
              'loginMessage', 'Erabiltzailea ez da sartu duzuna!'
            ));
        }

        if (!user.validPassword(password)) {
            return done(null, false, req.flash(
              'loginMessage', 'Sartutako pasahitza ez da zuzena!'
            ));
        }
        else {
          return done(null, user);
        }
      });
    });
  }));
};
