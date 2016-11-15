'use strict';

import service from 'feathers-mongoose';
import user from './user-model';
import hooks from './hooks';

export default function() {
  const app = this;

  const options = {
    Model: user
  };

  app.use('/users', service(options));
  const userService = app.service('/users');

  userService.before(hooks.before);
  userService.after(hooks.after);
};
