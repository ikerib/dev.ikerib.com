'use strict';

var Post = require('./controllers/post'),
    User = require('./controllers/user');

module.exports = function (app, passport) {
  app.get("/", Post.all);
  app.get("/posts/:postSlug", Post.show);
  app.get('/posts/tag/:tag', Post.tag);

  app.param('postSlug', Post.post);
  app.param('postSlug', Post.posts);
  app.param('tag', Post.posts);
  
  
  app.get('/login', User.login);
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash   : true
  }));
  app.get('/dashboard', User.isLoggedIn, User.dashboard);
  app.get('/logout', User.logout);
};
