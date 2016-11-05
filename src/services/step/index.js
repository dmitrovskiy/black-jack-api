'use strict';

const stepModel = require('./step-model');
const service = require('feathers-mongoose');
const hooks = require('./hooks');

module.exports = function () {
  const app = this;

  const options = {Model: stepModel};

  app.use('/steps', service(options));

  const stepService = app.service('/steps');

  stepService.before(hooks.before);
  stepService.after(hooks.after);
};
