'use strict';

const _ = require('lodash');
const defaultCards = require('../../default-data/cards');

module.exports = {
  getCard: getCard,
  loadCards: loadCards
};

function getCard(cards) {
  return cards[_.random(cards.length)];
}

function loadCards() {
  return defaultCards;
}
