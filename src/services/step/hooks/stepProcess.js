'use strict';

import Judge from '../../../helpers/judge';
import gameModel from '../../game/game-model';

export default async function (hook) {

   await gameModel
    .findOne({
      _id: hook.data.gameId
    })
    .exec()
    .then( game => {
      const judge = new Judge(game);
      judge.makeStep(hook.data.type);
      const outcome = judge.getOutcome(hook.data.type);

      if (outcome !== null) {
        game.outcome = outcome;
      }

      game.markModified('cards');
      game.markModified('clientCards');
      game.markModified('dealerCards');
      game.save();
    });

  return hook;
};

function something (a, b){
  return a + b;
}

something(1,2); // = 3
