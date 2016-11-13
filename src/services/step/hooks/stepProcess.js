'use strict';

const judgeHook = require('../../../helpers/judge');
const gameModel = require('../../game/game-model');

module.exports = function (hook) {

  gameModel.findOne(
    {_id:hook.data.gameId}
  ).exec().then(function (game) {
    const judge = judgeHook(game);
    judge.makeStep(hook.data.type);
    const outcome = judge.getOutcome(hook.data.type);

    if(outcome !== null) {
      game.outcome = outcome;
    }

    game.markModified('cards');
    game.markModified('clientCards');
    game.markModified('dealerCards');
    game.save();
  });

  return Promise.resolve(hook);
};
