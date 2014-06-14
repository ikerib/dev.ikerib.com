'use strict';

var mongoose    = require('mongoose'),
    Post        = mongoose.model('Post'),
    Utils = require('../utils/utilities');

exports.posts = function (req, res, next) {
  Post.find().sort('-created').exec(function (err, posts) {
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
      return next(new Error('Failed to load post ' + slug));
    }
    req.post = post;
    next();
  });
};

exports.all = function (req, res) {
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

      res.render('index', { posts: posts, tags: tags });
    }
  });
};

exports.show = function(req, res) {
  var tags = Utils.extractTags(req.posts);

  res.render('post', { post: req.post, posts: req.posts, tags: tags });
};

exports.tag = function(req, res) {
  var tags, i = 0, length = 0;

  Post.find({ 'tags.tag': req.params.tag })
    .sort('-created').exec(function (err, posts) {
      if (err) {
        res.render(err, {
          status: 500
        });
      }
      else {
        for (length = posts.length; i < length; i++) {
          posts[i].body = Utils.truncate(posts[i].body, 0, 500);
        }

        tags = Utils.extractTags(req.posts);

        res.render('tag', {
          taggedPosts: posts,
          posts: req.posts,
          tags: tags,
          tag: req.params.tag
        });
      }
  });
};