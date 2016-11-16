'use strict';

import test from 'ava';
import request from '../helpers/request';
import {assert} from 'chai';
import randomString from 'randomstring';
import userModel from '../../../src/services/user/user-model';

const userStub = {
  email: `${randomString.generate(12)}@test.com`
};

test.before('prepare a user', async t => {
  await userModel.remove({email: userStub.email});
  await userModel.create({email: userStub.email, cash: 0})
    .then(res => {
      userStub.id = res._id.toString();
    });
});

test.after('clean up a user up', async t => {
  await userModel.remove({email: userStub.email});
});

test('payment: charge a user\'s cash', async t => {
  await request
    .post('/payments')
    .send({
      userId: userStub.id,
      amount: 10
    })
    .expect(201);

  await userModel
    .findOne({_id: userStub.id})
    .then(res => {
      assert(res.cash, 10);
    });
});
