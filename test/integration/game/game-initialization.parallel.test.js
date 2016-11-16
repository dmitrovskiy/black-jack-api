'use strict';

import test from 'ava';
import request from '../helpers/request';
import {assert} from 'chai';
import randomString from 'randomstring';

import userModel from '../../../src/services/user/user-model';
import gameModel from '../../../src/services/game/game-model';

const user = {
  email: `${randomString.generate(12)}@test.com`,
  cash: 10
};

const game = {};

test.before('clean up a possible test user', async t => {
  await userModel.remove({email: user.email});
});

test.before('create a test user', async t => {
  await userModel
    .create(user)
    .then(res => {
      user.id = res._id.toString();
    });
});

test.after('clean up a test user', async t => {
  await userModel.remove({email: user.email});
});

test.after('clean up a test game', async t => {
  await gameModel.remove({_id: game.id});
});

test('should be initialized when created', async t => {
  await request
    .post('/games')
    .send({
      userId: user.id,
      bet: 10
    })
    .expect(res => {
      assert.isDefined(res.body.id);
      assert.isDefined(res.body.clientCards);
      assert.isDefined(res.body.dealerCards);
    })
    .expect(201)
    .then(res => {
      game.id = res.body.id;
    });
});
