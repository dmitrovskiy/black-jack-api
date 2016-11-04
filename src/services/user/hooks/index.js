'use strict';

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [
    function (hook) {
      console.log(hook.result.toJSON());
      Promise.resolve(hook);
    }
  ],
  update: [],
  patch: [],
  remove: []
};
