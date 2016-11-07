'use strict';

const assert = require('chai').assert;
const shoe = require('../../src/helpers/shoe');

describe('helpers.shoe', function () {
  describe('helpers.shoe.getCard', function () {
    it('should get random card from cards', function () {
      let card = shoe.getCard([{sign: 0, type: 0}]);
      assert.isObject(card);
    });
    it('should pull from cards', function () {
      let cards = [{sign: 0, type: 0}];
      shoe.getCard(cards);
      assert.equal(0, cards.length);
    })
  });
});
