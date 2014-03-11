"use strict";

var Post = require("./controllers/post"),

module.exports = function (app) {
  app.get("/", Post.all);
};