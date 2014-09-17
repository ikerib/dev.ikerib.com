'use strict';

module.exports = {
  db    : os.getenv('MONGOHQ_URL'),
  secret: 'mysessionsecretkey',
  app   : {
    name: 'ikerdevbloga'
  }
};
heroku config:set MONGOHQ_URL="mongodb://ikerdev:berahero8>@kahana.mongohq.com:10021/ikerdev"