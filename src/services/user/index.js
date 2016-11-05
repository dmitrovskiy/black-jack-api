'use strict';

const service = require('feathers-mongoose');
const user = require('./user-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: user
  };

  app.use('/users', service(options));
  const userService = app.service('/users');

  userService.before(hooks.before);
  userService.after(hooks.after);

};
