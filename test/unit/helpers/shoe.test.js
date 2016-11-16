'use strict';

import test from 'ava';
import Shoe from '../../../src/helpers/shoe';
import {assert} from 'chai';

test.beforeEach(t => {
  t.context.shoe = new Shoe([{sign: 0, type: 0}]);
});

test('#getNextCard: should pull from cards', t => {
  t.context.shoe.getNextCard();
  assert.equal(0, t.context.shoe.cards.length);
});

test('#getNextCard: should get random card from cards', t => {
  let card = t.context.shoe.getNextCard();
  assert.isObject(card);
});
