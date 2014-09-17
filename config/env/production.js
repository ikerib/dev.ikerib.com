'use strict';

module.exports = {
  db    : os.getenv('MONGOHQ_URL'),
  secret: 'mysessionsecretkey',
  app   : {
    name: 'ikerdevbloga'
  }
};
