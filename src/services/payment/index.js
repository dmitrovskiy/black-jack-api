'use strict';

const paymentModel = require('./payment-model');
const service = require('feathers-mongoose');
const hooks = require('./hooks');

module.exports = function () {
  const app = this;

  const options = {Model: paymentModel};

  app.use('/payments', service(options));

  app.use('/users/:id/payments', {
    find: function (params) {
      return paymentModel.find({userId: params.id});
    }
  });

  const paymentService = app.service('/payments');

  paymentService.before(hooks.before);
  paymentService.after(hooks.after);
};
