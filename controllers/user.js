'use strict';

exports.login = function (req, res) {
  res.render('admin/login', {message: req.flash('loginMessage')});
};

exports.logout = function (req, res) {
  req.logout();
  res.redirect('/');
};

exports.isLoggedIn = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/');
};

exports.dashboard = function (req, res) {
  res.render('admin/dashboard', {
    user: req.user
  });
};