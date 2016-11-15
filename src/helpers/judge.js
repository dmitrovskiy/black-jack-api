'use strict';

import Hand from './hand';
import Shoe from './shoe';
import Dealer from './dealer';

class Judge {
  constructor(game) {
    this.game = game;
    this.shoe = new Shoe(game.cards);
    this.dealer = new Dealer(this.shoe, new Hand(game.dealerCards));
    this.clientHand = new Hand(game.clientCards);
  }

  makeStep(step) {
    switch (step) {
      case 'stand':
        this.dealer.makeStep();
        break;
      case 'hit':
        this.clientHand.takeCard(this.shoe);
        break;
    }
  }

  getOutcome(step) {
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
  }
}

export default Judge;
