'use strict';

const assert = require('chai').assert;
const shoe = require('../../src/helpers/shoe');

describe('helpers.shoe', function () {
  describe('#getNextCard', function () {
    beforeEach('setup shoe cards', function () {
      this.shoe = shoe([{sign: 0, type: 0}]);
    });
    it('should get random card from cards', function () {
      let card = this.shoe.getNextCard();
      assert.isObject(card);
    });
    it('should pull from cards', function () {
      this.shoe.getNextCard();
      assert.equal(0, this.shoe.cards.length);
    });
  });
});
