'use strict';

module.exports = function (shoe, hand) {
  let dealer = {
    shoe: shoe,
    hand: hand
  };

  dealer.makeStep = function () {
    while(hand.rateCards() < 17) {
      hand.takeCard(shoe);
    }
  };

  return dealer;
};
