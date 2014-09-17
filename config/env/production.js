'use strict';
var MONGOHQ_URL="mongodb://ikerdev:berahero8>@kahana.mongohq.com:10021/ikerdev"
module.exports = {
  db    : MONGOHQ_URL,
  secret: 'mysessionsecretkey',
  app   : {
    name: 'ikerdevbloga'
  }
};
