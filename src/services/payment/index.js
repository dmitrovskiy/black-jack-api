'use strict';

import paymentModel from './payment-model';
import service from 'feathers-mongoose';
import hooks from './hooks';

export default function () {
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
