"use strict";

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

      res.render("index", { posts: posts, tags: tags });
    }
  });
};

exports.show = function(req, res) {
  var tags = _tags(req.posts);

  res.render("post", { post: req.post, posts: req.posts, tags: tags });
};

exports.tag = function(req, res) {
  var tags, i = 0, length = 0;

  Post.find({ 'tags.tag': req.params.tag }).sort('-created').exec(function (err, posts) {
    if (err) {
      res.render(err, {
        status: 500
      });
    }
    else {
      for (length = posts.length; i < length; i++) {
        posts[i].body = validations.truncate(posts[i].body, 0, 500);
      }

      tags = _tags(req.posts);

      res.render('tag', {
        taggedPosts: posts,
        posts: req.posts,
        tags: tags,
        tag: req.params.tag
      });
    }
  });
};

// Administration

exports.manage = function (req, res) {
  if (!req.params) {
    res.render('admin/create');
  }
  
  res.render('admin/create', { post: req.post });
};

exports.create = function (req, res) {

  var _tags = req.body.tag.split(/[ ,]+/);
  var post = new Post(req.body);
 
  for (var i = 0, length = _tags.length; i < length; i++) {
    post.tags.push({ tag: _tags[i] });
  }

  post.save(function (err) {
    if (err) {
      return res.send(500, err);
    }
    res.redirect('/dashboard');
  });
};

exports.update = function (req, res) {
  var post = req.post;
  var _tags = req.body.tag.split(/[ ,]+/);
  console.log(req.post);
  post           = _.extend(post, req.body);
  post.tags = [];
  
  for (var i = 0, length = _tags.length; i < length; i++) {
    post.tags.push({ tag: _tags[i] });
  }
  
  post.updatedAt = Date.now();

  post.save(function (err) {
    if (err) {
      return res.send(500, err);
    }
    res.redirect('/dashboard');
  });
};

exports.delete = function (req, res) {
  var post = req.post;

  post.remove(function (err) {
    if (err) {
      return res.send(500, err);
    }
    res.redirect('/dashboard');
  });
};