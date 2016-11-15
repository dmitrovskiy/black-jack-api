'use strict';

import {assert} from 'chai';
import Shoe from '../../src/helpers/shoe';

describe('helpers.shoe', function () {
  describe('#getNextCard', function () {
    beforeEach('setup shoe cards', function () {
      this.shoe = new Shoe([{sign: 0, type: 0}]);
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
