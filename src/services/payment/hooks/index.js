'use strict';

const updateUserAmount = require('./update-user-amount');

exports.before = {};
exports.after = {
  create: [
    updateUserAmount
  ]
};
