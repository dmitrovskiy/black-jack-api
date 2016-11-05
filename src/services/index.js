'use strict';

const user = require('./user');
const payments = require('./payments');
const mongoose = require('mongoose');

module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(user);
  app.configure(payments);
};
