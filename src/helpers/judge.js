'use strict';

const hand = require('./hand');
const shoe = require('./shoe');
const dealer = require('./dealer');

module.exports = function (game) {
  let judge = {
    game: game,
    dealer: dealer(shoe, hand(game.dealerCards)),
    clientHand: hand(game.clientCards),
    hit: false
  };

  judge.makeStep = function (step) {
    switch(step.type) {
      case 'stand':
        this.dealer.makeStep();
        break;
      case 'hit':
        this.clientHand.takeCard(shoe);
        this.hit = true;
        break;
    }
  };

  judge.getOutcome = function () {
    if(this.hit) {
      return 'hit';
    }

    let dealerPoints = this.dealer.hand.rateCards();
    let clientPoints = this.clientHand.rateCards();
    let outcome;

    if(clientPoints == 21) {
      if(dealerPoints == 21) {
        outcome = 'push';
      } else {
        outcome = 'clientBJ';
      }
    } else if(clientPoints > 21) {
      outcome = 'clientFail';
    } else {
      if(dealerPoints == 21) {
        outcome = 'clientFail';
      } else if(dealerPoints > 21) {
        outcome = 'clientWin';
      } else {
        if(clientPoints > dealerPoints) {
          outcome = 'clientWin';
        } else if(clientPoints < dealerPoints) {
          outcome = 'clientFail';
        } else {
          outcome = 'push';
        }
      }
    }

    return outcome;
  };

  return judge;
};
