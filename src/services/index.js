'use strict';

const user = require('./user');
const payment = require('./payment');
const game = require('./game');
const mongoose = require('mongoose');

module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(user);
  app.configure(payment);
  app.configure(game);
};
