'use strict';

import test from 'ava';
import request from '../helpers/request';
import {assert} from 'chai';
import randomString from 'randomstring';
import userModel from '../../../src/services/user/user-model';

const userStub = {
  email: `${randomString.generate(12)}@test.com`
};

test.before('clean up possible existing user', async t => {
  await userModel.remove({email: userStub.email});
});

test.after('clean up created user', async t => {
  await userModel.remove({email: userStub.email});
});

test('user: create a test user', async t => {
  await request
    .post('/users')
    .send({email: userStub.email})
    .expect(res => {
      assert.property(res.body, 'email');
      assert.isDefined(res.body, 'cash');
      assert.isDefined(res.body, 'id');
    })
    .expect(201);
});
