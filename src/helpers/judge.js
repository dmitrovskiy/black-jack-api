'use strict';

const _ = require('lodash');

const
  ace = 0,
  ten = 9,
  king = 13;

module.exports = {
  estimateGame: estimateGame,
  rateCards: rateCards
};

function estimateGame(game) {
  
}

function rateCards(cards) {
  let sumWithoutAces = _.sumBy(cards, function (item) {
    let value = 0;
    if (_.inRange(item.sign, ten, king + 1)) {
      value = 10;
    } else {
      value = item.sign;
    }
    return value;
  });

  let acesCount = _.size(_.filter(cards, function (item) {
    return item.sign === ace;
  }));

  let sumAces = sumWithoutAces > 10 ? acesCount : acesCount * 11 ;

  return sumWithoutAces + sumAces;
}
