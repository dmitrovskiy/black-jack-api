'use strict';

import {assert} from 'chai';
import sinon from 'sinon';
import Dealer from '../../src/helpers/dealer';

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

      let dealer = new Dealer(shoeStub, handStub);

      dealer.makeStep();

      assert.isTrue(handStub.takeCard.calledOnce);
    });
  });
});
