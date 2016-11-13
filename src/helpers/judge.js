'use strict';

const hand = require('./hand');
const shoe = require('./shoe');
const dealer = require('./dealer');

module.exports = function (game) {
  let judge = {};

  judge.game = game;
  judge.shoe = shoe(game.cards);
  judge.dealer = dealer(judge.shoe, hand(game.dealerCards));
  judge.clientHand = hand(game.clientCards);

  judge.makeStep = function (step) {
    switch (step) {
      case 'stand':
        this.dealer.makeStep();
        break;
      case 'hit':
        this.clientHand.takeCard(this.shoe);
        break;
    }
  };

  judge.getOutcome = function (step) {
    let dealerPoints = this.dealer.hand.rateCards();
    let clientPoints = this.clientHand.rateCards();
    let outcome = null;

    switch (step) {
      case 'initial':
        if (clientPoints > 21) {
          outcome = 'clientFail';
        } else if (clientPoints == 21) {
          if (dealerPoints == 21) {
            outcome = 'push';
          } else {
            outcome = 'clientBJ';
          }
        }
        break;
      case 'hit':
        if (clientPoints > 21) {
          outcome = 'clientFail';
        } else if (clientPoints == 21) {
          if (dealerPoints == 21) {
            outcome = 'push';
          } else {
            outcome = 'clientWin';
          }
        }
        break;
      case 'stand':
        if (clientPoints == dealerPoints) {
          outcome = 'push';
        } else if (dealerPoints == 21 || dealerPoints > clientPoints && dealerPoints < 21) {
          outcome = 'clientFail';
        } else if (clientPoints == 21 || dealerPoints < clientPoints || dealerPoints > 21) {
          outcome = 'clientWin';
        }
        break;
    }

    return outcome;
  };

  return judge;
};
