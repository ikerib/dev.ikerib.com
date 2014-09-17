'use strict';

var mongoose = require('mongoose'),
    Post     = mongoose.model('Post'),
    Utils    = require('../utils/utilities'),
    Feed     = require('feed');

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


exports.feed = function (req, res) {
  var feed, i, j, length;
  
  feed = new Feed({
    title      : 'ikerdev',
    description: 'Nire programazio kontuen txokoa',
    link       : 'http://blog.benatespina.com/',
    copyright  : 'All rights reserved 2014, @ikerib',
    author     : {
      name : 'Iker Ibarguren',
      email: 'ikerib@gmail.com',
      link : 'http://ikerib.github.com'
    }
  });
  
  Post.find().sort('-created').exec(function (err, posts) {
    if (err) {
      res.render(err, {
        status: 500
      });
    }
    for (i = 0, length = posts.length; i < length; i++) {
      feed.addItem({
        title      : posts[i].title,
        link       : 'http://blog.benatespina.com/artikuluak/' + posts[i].slug,
        description: posts[i].body,
        date       : posts[i].createdAt
      });
    }
    
    res.set('Content-Type', 'text/xml');
    res.send(feed.render('atom-1.0'));
  });
};