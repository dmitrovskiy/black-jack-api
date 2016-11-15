'use strict';

class Dealer {
  constructor(shoe, hand) {
    this.shoe = shoe;
    this.hand = hand;
  }

  makeStep() {
    while (this.hand.rateCards() < 17) {
      this.hand.takeCard(this.shoe);
    }
  }
}

export default Dealer;
