'use strict';

import test from 'ava';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import rateCases from './rateCases';
import _ from 'lodash';
import {assert} from 'chai';

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

test('#makeStep: should call dealer.makeStep on stand', t => {
  let judge = new Judge({});
  judge.dealer = {makeStep: sinon.spy()};
  judge.makeStep('stand');

  assert.isTrue(judge.dealer.makeStep.calledOnce);
});

test('#makeStep: should take card on hit', t => {
  let judge = new Judge({});
  judge.clientHand = {takeCard: sinon.spy()};
  judge.makeStep('hit');

  assert.isTrue(judge.clientHand.takeCard.calledOnce);
});

_.forEach(rateCases, i => {
  test(`should be "${i.outcome}" on client:${i.clientHand}, dealer:${i.dealerHand}, step: ${i.step}`, t => {
    let judge = new Judge({});
    judge.dealer = {
      hand: {
        rateCards: sinon.stub().returns(i.dealerHand)
      }
    };
    judge.clientHand = {
      rateCards: sinon.stub().returns(i.clientHand)
    };
    assert.equal(i.outcome, judge.getOutcome(i.step));
  });
});
