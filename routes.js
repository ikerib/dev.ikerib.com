'use strict';

var Post  = require('./controllers/post'),
    User  = require('./controllers/user'),
    Admin = require('./controllers/admin');

module.exports = function (app, passport) {
  app.get('/', Post.all);
  
  app.get('/feed', Post.feed);
  
  
  app.get('/login', User.login);
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash   : true
  }));
  app.get('/logout', User.logout);
  
  
  app.get('/dashboard', User.isLoggedIn, User.dashboard, Post.all);
  
  app.get('/artikuluak/berria', User.isLoggedIn, Admin.manage);
  app.post('/create-post', User.isLoggedIn, Admin.create);
  
  app.get('/artikuluak/editatu/:postSlug', User.isLoggedIn, Admin.manage);
  app.post('/update-post/:postSlug', User.isLoggedIn, Admin.update);
  
  app.get('/delete-post/:postSlug', User.isLoggedIn, Admin.delete);
  
  
  app.get('/artikuluak/:postSlug', Post.show);
  app.get('/artikuluak/etiketak/:tag', Post.tag);
  
  app.param('postSlug', Post.post);
  app.param('postSlug', Post.posts);
  app.param('tag', Post.posts);
};
