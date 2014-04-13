"use strict";

var Post    = require("./controllers/post"),
    Comment = require("./controllers/comment");

module.exports = function (app) {
  app.get("/", Post.all);
  app.get("/:postSlug", Post.show);

  app.param('postSlug', Post.post);
  app.param('postSlug', Post.posts);
};