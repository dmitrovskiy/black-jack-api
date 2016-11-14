'use strict';

const Promise = require('bluebird');

module.exports = function (hook) {
  delete hook.data.cash;
  return Promise.resolve(hook);
};
