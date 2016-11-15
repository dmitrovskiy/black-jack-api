'use strict';

import _ from 'lodash';

class Hand {
  constructor(cards = []) {
    this.cards = cards;
  }

  takeCard(shoe) {
    this.cards.push(shoe.getNextCard());
  }

  rateCards() {
    let sumWithoutAces = _.sumBy(this.cards, (i) => {
      let value = 0;
      if (_.inRange(i.sign, 9, 14)) {
        value = 10;
      } else {
        value = i.sign;
      }
      return value;
    });

    let acesCount = _.size(_.filter(this.cards, (i) => i.sign === 0));
    let sumAces = sumWithoutAces > 10 ? acesCount : acesCount * 11;

    return sumWithoutAces + sumAces;
  }
}

export default Hand;
