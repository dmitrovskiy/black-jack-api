'use strict';

const paymentsModel = require('./payments-model');
const ObjectId = require('mongoose').Schema.Types.ObjectId;
const service = require('feathers-mongoose');
const hooks = require('./hooks');

module.exports = function () {
  const app = this;

  const options = {Model: paymentsModel};

  app.use('/payments', service(options));

  app.use('/users/:id/payments', {
    find: function (params) {
      return paymentsModel.find({userId: ObjectId(params.id)});
    }
  });

  const paymentsService = app.service('/payments');

  paymentsService.before(hooks.before);
  paymentsService.after(hooks.after);
};
