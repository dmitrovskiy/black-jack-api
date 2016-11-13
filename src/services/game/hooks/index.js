'use strict';

const sanitize = require('./sanitize');
const initialize = require('./intialize');

module.exports.before = {
  create: [
    sanitize,
    initialize
  ],
  update: [sanitize],
  patch: [sanitize]
};
module.exports.after = {};
