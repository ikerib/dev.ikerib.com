'use strict';

var mongoose = require('mongoose'),
    Post     = mongoose.model('Post'),
    Utils    = require('../utils/utilities');

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
  var tags, i = 0, length = 0;

  Post.find().sort('-created').exec(function (err, posts) {
    if (err) {
      res.render(err, {
        status: 500
      });
    }
    else {
      for (length = posts.length; i < length; i++) {
        posts[i].body = Utils.truncate(posts[i].body, 0, 500);
      }
      tags = Utils.extractTags(posts);
      res.render('admin/dashboard', {
        user: req.user, posts: posts, tags: tags
      });
    }
  });
};