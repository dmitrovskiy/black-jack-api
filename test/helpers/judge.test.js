'use strict';

import {assert} from 'chai';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import rateCases from './rateCases';

let dealerStub = function () {
  return {};
};
let handStub = function () {
  return {};
};
let shoeStub = function () {
  return {};
};

const Judge = proxyquire(
  '../../src/helpers/judge',
  {
    '../dealer': dealerStub,
    '../hand': handStub,
    '../shoe': shoeStub
  }
);

describe('helpers.judge', function () {
  describe('#makeStep', function () {
    it('should call dealer.makeStep on stand', function () {
      let judge = new Judge({});
      judge.dealer = {makeStep: sinon.spy()};
      judge.makeStep('stand');

      assert.isTrue(judge.dealer.makeStep.calledOnce);
    });
    it('should take card on hit', function () {
      let judge = new Judge({});
      judge.clientHand = {takeCard: sinon.spy()};
      judge.makeStep('hit');

      assert.isTrue(judge.clientHand.takeCard.calledOnce);
    });
  });

  describe('#getOutcome', function () {
    rateCases.forEach(function (rateCase) {
      it(`should be "${rateCase.outcome}" on client:${rateCase.clientHand}, dealer:${rateCase.dealerHand}, step: ${rateCase.step}`, function () {
        let judge = new Judge({});
        judge.dealer = {
          hand: {
            rateCards: sinon.stub().returns(rateCase.dealerHand)
          }
        };
        judge.clientHand = {
          rateCards: sinon.stub().returns(rateCase.clientHand)
        };
        assert.equal(rateCase.outcome, judge.getOutcome(rateCase.step));
      });
    });
  });
});

