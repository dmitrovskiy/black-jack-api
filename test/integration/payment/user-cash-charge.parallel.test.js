'use strict';

import test from 'ava';
import request from '../helpers/request';
import {assert} from 'chai';
import randomString from 'randomstring';
import userModel from '../../../src/services/user/user-model';

const user = {
  email: `${randomString.generate(12)}@test.com`,
  cash: 0
};

test.before('clean up a possible test user', async t => {
  await userModel.remove({email: user.email});
});

test.before('create a test user', async t => {
  await userModel.create(user)
    .then(res => {
      user.id = res._id.toString();
    });
});

test.after('clean up a test user', async t => {
  await userModel.remove({email: user.email});
});

test('should charge a user\'s cash', async t => {
  await request
    .post('/payments')
    .send({
      userId: user.id,
      amount: 10
    })
    .expect(201);

  await userModel
    .findOne({_id: user.id})
    .then(res => {
      assert(res.cash, 10);
    });
});
