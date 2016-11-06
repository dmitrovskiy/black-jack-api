'use strict';

const assert = require('chai').assert;
const proxyquire = require('proxyquire');
const sinon = require('sinon');

var userModelStub = {};
const updateUserAmount = proxyquire(
  '../../../../src/services/payment/hooks/update-user-amount',
  {
    '../../user/user-model': userModelStub
  }
);

describe('services.payment.hooks.update-user-amount', function () {
  beforeEach('create hook stub', function () {
    this.hook = {
      data: {
        userId: 123,
        amount: 10
      }
    }
  });


  it('should update a user', function () {
    let execSpy = sinon.spy();
    userModelStub.update = sinon.stub().returns({exec: execSpy});

    updateUserAmount(this.hook);
    assert.isTrue(execSpy.calledOnce);
  });

});
