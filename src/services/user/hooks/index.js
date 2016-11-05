'use strict';

const sanitize = require('./sanitize');

exports.before = {
  create: [sanitize],
  update: [sanitize],
  patch: [sanitize]
};

exports.after = {};
