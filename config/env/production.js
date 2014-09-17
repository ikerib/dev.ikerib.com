'use strict';
// var MONGOHQ_URL="mongodb://ikerdev:berahero8>@kahana.mongohq.com:10021/ikerdev"
var connectionUri = url.parse(process.env.MONGOHQ_URL);
var dbName = connectionUri.pathname.replace(/^\//, '');
module.exports = {
  db    : process.env.MONGOHQ_URL,
  secret: 'mysessionsecretkey',
  app   : {
    name: 'ikerdevbloga'
  }
};
