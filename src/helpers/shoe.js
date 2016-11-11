'use strict';

const _ = require('lodash');

module.exports = function (cards) {
  let shoe = {
    cards: cards
  };

  shoe.getNextCard = function () {
    return _.pullAt(this.cards, _.random(this.cards.length-1))[0];
  };

  return shoe;
};
