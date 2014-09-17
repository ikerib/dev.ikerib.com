'use strict';

module.exports = {
  db    : process.env.('MONGOHQ_URL'),
  secret: 'mysessionsecretkey',
  app   : {
    name: 'ikerdevbloga'
  }
};
