'use strict';

const assert = require('chai').assert;
const shoe = require('../../src/helpers/shoe');

describe('helpers.shoe', function () {
  it('should return all default cards', function () {
    this.cards = shoe.loadCards();
    assert(52, this.cards.length);
  });

  it('should get random card from cards', function () {
    let card = shoe.getCard(this.cards);
    assert.isObject(card);
  });
});
