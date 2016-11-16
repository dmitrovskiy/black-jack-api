'use strict';

import test from 'ava';
import _ from 'lodash';
import Hand from '../../src/helpers/hand';
import sinon from 'sinon';
import cardCases from './cardCases';
import {assert} from 'chai';

_.forEach(cardCases, i => {
  test(`#rateCards: should return ${i.sum} from ${i.cards}`, t => {
    let cards = _.map(i.cards, (sign) => ({sign: sign, type: 0}));
    assert.equal(i.sum, new Hand(cards).rateCards());
  });
});

test('#takeCard: should take a card', t => {
  let shoeStub = {
    getNextCard: sinon.stub().returns({})
  };
  let hand = new Hand([]);
  hand.takeCard(shoeStub);
  assert.equal(1, hand.cards.length);
});
