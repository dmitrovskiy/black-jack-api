'use strict';

const _ = require('lodash');

module.exports = function (cards) {
  let hand = {
    cards: cards || []
  };

  hand.takeCard = function (shoe) {
    this.cards.push(shoe.getNextCard());
  };

  hand.rateCards = function () {
    let sumWithoutAces = _.sumBy(this.cards, function (item) {
      let value = 0;
      if (_.inRange(item.sign, 9, 14)) {
        value = 10;
      } else {
        value = item.sign;
      }
      return value;
    });

    let acesCount = _.size(_.filter(this.cards, function (item) {
      return item.sign === 0;
    }));

    let sumAces = sumWithoutAces > 10 ? acesCount : acesCount * 11 ;

    return sumWithoutAces + sumAces;
  };

  return hand;
};






