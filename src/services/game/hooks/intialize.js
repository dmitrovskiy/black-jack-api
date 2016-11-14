'use strict';

const judgeHelper = require('../../../helpers/judge');
const shoeHelper = require('../../../helpers/shoe');
const defaultCards = require('../../../../default-data/cards');
const Promise = require('bluebird');

module.exports = function (hook) {
  let cards = defaultCards.slice();
  const shoe = shoeHelper(cards);

  hook.data.dealerCards = [
    shoe.getNextCard(),
    shoe.getNextCard()
  ];
  hook.data.clientCards = [
    shoe.getNextCard(),
    shoe.getNextCard()
  ];
  hook.data.cards = cards;

  const judge = judgeHelper(hook.data);
  const outcome = judge.getOutcome('initial');

  if(outcome !== null) {
    hook.data.outcome = outcome;
  }

  return Promise.resolve(hook);
};
