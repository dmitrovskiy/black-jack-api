'use strict';

const assert = require('chai').assert;
const proxyquire = require('proxyquire');
const sinon = require('sinon');
const rateCases = require('./rateCases');

let dealerStub = function () {
  return {};
};
let handStub = function () {
  return {};
};
let shoeStub = function () {
  return {};
};

const judge = proxyquire(
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
      let tempJudge = judge({});
      tempJudge.dealer = {makeStep: sinon.spy()};
      tempJudge.makeStep({type: 'stand'});

      assert.isTrue(tempJudge.dealer.makeStep.calledOnce);
    });
    it('should take card on hit', function () {
      let tempJudge = judge({});
      tempJudge.clientHand = {takeCard: sinon.spy()};
      tempJudge.makeStep({type: 'hit'});

      assert.isTrue(tempJudge.clientHand.takeCard.calledOnce);
      assert.isTrue(tempJudge.hit);
    });
  });

  describe('#getOutcome', function () {
    rateCases.forEach(function (rateCase) {
      it(`should return "${rateCase.outcome}" on client:${rateCase.clientHand}, dealer:${rateCase.dealerHand}`, function () {
        let tempJudge = judge({});
        tempJudge.dealer = {
          hand: {
            rateCards: sinon.stub().returns(rateCase.dealerHand)
          }
        };
        tempJudge.clientHand = {
          rateCards: sinon.stub().returns(rateCase.clientHand)
        };
        assert.equal(rateCase.outcome, tempJudge.getOutcome());
      });
    });
  });
});

