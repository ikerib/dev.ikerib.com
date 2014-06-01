'use strict';

var _  = require('lodash'),
    fs = require('fs');

process.env.NODE_ENV = ~fs.readdirSync('./config/env').map(function (file) {
  return file.slice(0, -3);
}).indexOf(process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';


module.exports = _.extend(
  require('./env/all'),
  require('./env/' + process.env.NODE_ENV) || {}
);


var models_path = __dirname + '/../models',
    walk = function (path) {
      fs.readdirSync(path).forEach(function (file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
          if (/(.*)\.(js)/.test(file)) {
            require(newPath);
          }
        }
        else if (stat.isDirectory()) {
          walk(newPath);
        }
      });
    };
walk(models_path);