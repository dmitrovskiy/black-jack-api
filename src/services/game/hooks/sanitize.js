'use strict';

module.exports = function(hook) {
  delete hook.data.state;
  delete hook.data.outcome;

  return Promise.resolve(hook);
};
