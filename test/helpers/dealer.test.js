'use strict';

const assert = require('chai').assert;
const sinon = require('sinon');
const dealer = require('../../src/helpers/dealer');

describe('helpers.dealer', function () {
  describe('#makeStep', function () {
    it('should rate cards 1 time', function () {
      let shoeStub = {};
      let rateCards = sinon.stub();
      rateCards.onFirstCall().returns(16);
      rateCards.onSecondCall().returns(18);

      let handStub = {
        rateCards: rateCards,
        takeCard: sinon.spy()
      };

      let tempDealer = dealer(shoeStub, handStub);

      tempDealer.makeStep();

      assert.isTrue(handStub.takeCard.calledOnce);
    });
  });
});
