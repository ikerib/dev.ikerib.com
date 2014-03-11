"use strict";

var mongoose    = require("mongoose"),
    Post        = mongoose.model("Post");


exports.all = function (req, res) {
  Post.find().sort("-created").exec(function (err, posts) {
    if (err) {
      res.render(err, {
        status: 500
      });
    }
    else {
      res.render("index", { posts: posts });
    }
  });
};