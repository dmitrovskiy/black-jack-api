'use strict';

const assert = require('chai').assert;
const _ = require('lodash');
const hand = require('../../src/helpers/hand');
const sinon = require('sinon');
const cardCases = require('./cardCases');

describe('helpers.hand', function () {
  describe('#rateCards', function () {
    cardCases.forEach(function (item) {
      it(`should return ${item.sum} from ${item.cards}`, function () {
        let cards = _.map(item.cards, function (sign) {
          return {sign: sign, type: 0};
        });
        assert.equal(item.sum, hand(cards).rateCards());
      });
    });
  });

  describe('#takeCard', function () {
    it('should take a card', function () {
      let shoeStub = {
        getNextCard: sinon.stub().returns({})
      };
      let tempHand = hand([]);
      tempHand.takeCard(shoeStub);
      assert.equal(1, tempHand.cards.length);
    });
  });
});
