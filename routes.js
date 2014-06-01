'use strict';

var Post = require('./controllers/post');

module.exports = function (app, passport) {
  app.get("/", Post.all);
  app.get("/posts/:postSlug", Post.show);
  app.get('/posts/tag/:tag', Post.tag);

  app.param('postSlug', Post.post);
  app.param('postSlug', Post.posts);
  app.param('tag', Post.posts);
};
