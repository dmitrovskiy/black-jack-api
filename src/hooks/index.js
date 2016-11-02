'use strict';

//TODO remove unnecessary hook
exports.myHook = function(options) {
  return function(hook) {
    console.log('My custom global hook ran. Feathers is awesome!');
  };
};
