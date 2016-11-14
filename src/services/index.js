'use strict';

const user = require('./user');
const payment = require('./payment');
const game = require('./game');
const step = require('./step');
const mongoose = require('mongoose');
const Promise = require('bluebird');

module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = Promise;

  app.configure(user);
  app.configure(payment);
  app.configure(game);
  app.configure(step);
};
