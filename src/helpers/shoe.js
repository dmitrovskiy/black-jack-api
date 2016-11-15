'use strict';

import _ from 'lodash';

class Shoe {
  constructor(cards) {
    this.cards = cards;
  }

  getNextCard() {
    return _.pullAt(this.cards, _.random(this.cards.length-1))[0];
  }
}

export default Shoe;
