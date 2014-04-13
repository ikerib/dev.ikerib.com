"use strict";

var mongoose    = require("mongoose"),
    _           = require("lodash"),
    Post        = mongoose.model("Post"),
    validations = require("../utils/validations");


exports.posts = function (req, res, next) {
  Post.find().sort("-created").exec(function (err, posts) {
    if (err) {
      return next(err);
    }
    req.posts = posts;
    next();
  });
};

exports.post = function(req, res, next, slug) {
  Post.load(slug, function(err, post) {
    if (err) {
      return next(err);
    }
    else if (!post) {
      return next(new Error("Failed to load post " + slug));
    }
    req.post = post;
    next();
  });
};

exports.all = function (req, res) {
  Post.find().sort("-created").exec(function (err, posts) {
    if (err) {
      res.render(err, {
        status: 500
      });
    }
    else {
      for (var i = 0, length = posts.length; i < length; i++) {
        posts[i].body = validations.truncate(posts[i].body, 0, 500);
      }
        res.render("index", { posts: posts });
    }
  });
};

exports.show = function(req, res) {
  res.render("post", { post: req.post, posts: req.posts });
};