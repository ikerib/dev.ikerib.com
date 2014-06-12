'use strict';

var mongoose    = require("mongoose"),
    _           = require("lodash"),
    Post        = mongoose.model("Post"),
    validations = require("../utils/validations");

var _tags = function (posts) {
  var i, j, k = 0, postsLength, tagsLength, tags = [];

  for (i = 0, postsLength = posts.length; i < postsLength; i++) {
    for (j = 0, tagsLength = posts[i].tags.length; j < tagsLength; j++) {
      tags[k] = posts[i].tags[j].tag;
      k++;
    }
  }
  return _.uniq(tags);
};

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

  Post.find().sort("-created").exec(function (err, posts) {
    if (err) {
      res.render(err, {
        status: 500
      });
    }
    else {
      for (length = posts.length; i < length; i++) {
        posts[i].body = validations.truncate(posts[i].body, 0, 500);
      }
      tags = _tags(posts);
      res.render('admin/dashboard', {
        user: req.user, posts: posts, tags: tags
      });
    }
  });
};