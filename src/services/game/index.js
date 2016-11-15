'use strict';

import gameModel from './game-model';
import service from 'feathers-mongoose';
import hooks from './hooks';

export default function () {
  const app = this;

  const options = {Model: gameModel};

  app.use('/games', service(options));

  const gameService = app.service('/games');

  gameService.before(hooks.before);
  gameService.after(hooks.after);
};
