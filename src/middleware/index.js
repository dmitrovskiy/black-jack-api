'use strict';

import handler from 'feathers-errors/handler';
import notFound from './not-found-handler';
import logger from './logger';

export default function () {
  const app = this;

  app.use(notFound());
  app.use(logger(app));
  app.use(handler());
};
