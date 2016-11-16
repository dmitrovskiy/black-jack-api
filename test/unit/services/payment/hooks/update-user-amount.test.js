'use strict';

import {assert} from 'chai';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import test from 'ava';

let userModelStub = {};
const updateUserAmount = proxyquire(
  '../../../../../src/services/payment/hooks/update-user-amount',
  {
    '../../user/user-model': userModelStub
  }
);

test.beforeEach(t => {
  t.context.hook = {
    data: {
      userId: 123,
      amount: 10
    }
  };
});

test('should update a user', t => {
  let execSpy = sinon.spy();
  userModelStub.update = sinon.stub().returns({exec: execSpy});

  updateUserAmount(t.context.hook);
  assert.isTrue(execSpy.calledOnce);
});
