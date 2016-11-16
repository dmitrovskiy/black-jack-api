'use strict';

import test from 'ava';
import {assert} from 'chai';
import randomString from 'randomstring';
import request from '../helpers/request';

import userModel from '../../../src/services/user/user-model';
import gameModel from '../../../src/services/game/game-model';
import stepModel from '../../../src/services/step/step-model';
import defaultCards from '../../../default-data/cards.json';

const user = {
  email: `${randomString.generate(12)}@test.com`,
  cash: 10
};
const game = {
  bet: 10,
  dealerCards: [{sign: 0, type: 0}, {sign: 1, type: 0}],
  clientCards: [{sign: 2, type: 0}, {sign: 10, type: 0}],
  cards: defaultCards.slice()
};
const step = {};

test.before('clean up a possible test user', async t => {
  await userModel.remove({email: user.email});
});

test.before('create a test user', async t => {
  await userModel
    .create(user)
    .then(res => {
      user.id = res._id.toString()
    });
});

test.before('create a test game', async t => {
  game.userId = user.id;
  await gameModel
    .create(game)
    .then(res => {
      game.id = res._id.toString()
    });
});

test.after('clean up a test user', async t => {
  await userModel.remove({_id: user.id});
});

test.after('clean up a test game', async t => {
  await gameModel.remove({_id: game.id});
});

test.after('clean up a test step', async t => {
  await stepModel.remove({_id: step.id});
});

test('create a test step', async t => {
  step.gameId = game.id;
  step.type = 'hit';

  await request
    .post('/steps')
    .send(step)
    .expect(res => {
      assert.isDefined(res.body, 'id');
    })
    .expect(201)
    .then(res => {
      step.id = res.id;
    });
});


