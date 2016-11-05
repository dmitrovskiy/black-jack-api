'use strict';

const gameModel = require('./game-model');
const service = require('feathers-mongoose');
const hooks = require('./hooks');

module.exports = function () {
  const app = this;

  const options = {Model: gameModel};

  app.use('/games', service(options));

  const gameService = app.service('/games');

  gameService.before(hooks.before);
  gameService.after(hooks.after);
};
