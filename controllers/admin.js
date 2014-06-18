'use strict';

var mongoose = require("mongoose"),
    _        = require("lodash"),
    Post     = mongoose.model("Post"),
    Utils    = require('../utils/utilities');

var _addTags = function (tags, post) {
  var _tags = tags.split(/[ ,]+/);

  for (var i = 0, length = _tags.length; i < length; i++) {
    post.tags.push({ tag: _tags[i] });
  }
  
  post.tags = _.uniq(post.tags, 'tag');

  return post;
};

exports.manage = function (req, res) {
  var tags;
  
  if (!req.params) {
    res.render('admin/create');
  }
  
  tags = Utils.extractTags(req.posts);
  
  res.render('admin/create', { post: req.post, tags: tags });
};

exports.create = function (req, res) {
  var post = new Post(req.body);
  post     = _addTags(req.body.tag, post);
  
  post.save(function (err) {
    if (err) {
      return res.send(500, err);
    }
    res.redirect('/dashboard');
  });
};

exports.update = function (req, res) {
  var post  = req.post;
  post      = _.extend(post, req.body);
  post.tags = [];
  post      = _addTags(req.body.tag, post);
  
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