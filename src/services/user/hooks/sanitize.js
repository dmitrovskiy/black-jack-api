'use strict';

module.exports = function (hook) {
  delete hook.data.cash;
  return Promise.resolve(hook);
};
