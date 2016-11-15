'use strict';

import {assert} from 'chai';
import _ from 'lodash';
import Hand from '../../src/helpers/hand';
import sinon from 'sinon';
import cardCases from './cardCases';

describe('helpers.hand', function () {
  describe('#rateCards', function () {
    cardCases.forEach(function (item) {
      it(`should return ${item.sum} from ${item.cards}`, function () {
        let cards = _.map(item.cards, (sign) => ({sign: sign, type: 0}));
        assert.equal(item.sum, new Hand(cards).rateCards());
      });
    });
  });

  describe('#takeCard', function () {
    it('should take a card', function () {
      let shoeStub = {
        getNextCard: sinon.stub().returns({})
      };
      let hand = new Hand([]);
      hand.takeCard(shoeStub);
      assert.equal(1, hand.cards.length);
    });
  });
});
