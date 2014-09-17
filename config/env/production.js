'use strict';
// var MONGOHQ_URL="mongodb://ikerdev:berahero8>@kahana.mongohq.com:10021/ikerdev"
// var url = require('url');
// var connectionUri = url.parse(process.env.MONGOHQ_URL);
// var dbName = connectionUri.pathname.replace(/^\//, '');
console.log(process.env.MONGOHQ_URL);
module.exports = {
  db    : process.env.MONGOHQ_URL,
  secret: 'mysessionsecretkey',
  app   : {
    name: 'ikerdevbloga'
  }
};
