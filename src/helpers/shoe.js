'use strict';

const _ = require('lodash');
const defaultCards = require('../../default-data/cards');

module.exports = {
  getCard: getCard
};

function getCard(cards) {
  return _.pullAt(cards, _.random(cards.length-1))[0];
}
