'use strict';

import stepModel from './step-model';
import service from 'feathers-mongoose';
import hooks from './hooks';

export default function () {
  const app = this;

  const options = {Model: stepModel};

  app.use('/steps', service(options));

  const stepService = app.service('/steps');

  stepService.before(hooks.before);
  stepService.after(hooks.after);
};
