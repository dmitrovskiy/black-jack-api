'use strict';

import test from 'ava';
import request from '../helpers/request';
import {assert} from 'chai';
import randomString from 'randomstring';

import userModel from '../../../src/services/user/user-model';
import gameModel from '../../../src/services/game/';

const userStub = {
  email: `${randomString.generate(12)}@test.com`
};

test.before('prepare a user', async t => {
  await userModel.remove();
  await userModel
    .create({email: userStub.email})
    .then(res => {
      userStub.id = res._id.toString();
    });
});

test.after('clean up a user', async t => {
  await userModel.remove({email: userStub.email});
});

test('game: should be initialized', async t => {
  await request
    .post('/games')
    .send({
      userId: userStub.id,
      bet: 10
    })
    .expect(res => {
      assert.isDefined(res.body.clientCards);
      assert.isDefined(res.body.dealerCards);
    })
    .expect(201);
});
