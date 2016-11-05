'use strict';

const sanitize = require('./sanitize');

module.exports.before = {
  create: [sanitize],
  update: [sanitize],
  patch: [sanitize]
};
module.exports.after = {};
