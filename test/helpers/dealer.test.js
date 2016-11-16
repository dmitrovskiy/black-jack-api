'use strict';

import test from 'ava';
import sinon from 'sinon';
import Dealer from '../../src/helpers/dealer';
import {assert} from 'chai';

test('#makeStep: should rate cards 1 time', t => {
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

