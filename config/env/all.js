'use strict';

var path     = require('path'),
    rootPath = path.normalize(__dirname + '/../..');

module.exports = {
  sessionSecret: 'ikerdevbloga',
  sessionCollection: 'sessions',
  root: rootPath,
  port: process.env.PORT || 3000,
  db: process.env.MONGOLAB_URI
};