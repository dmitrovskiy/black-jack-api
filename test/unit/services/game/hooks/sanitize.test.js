'use strict';

import test from 'ava';
import {assert} from 'chai';
import gameSanitize from '../../../../../src/services/game/hooks/sanitize';

test.beforeEach(t => {
  t.context.hook = {
    data: {
      state: 'test',
      outcome: 'test'
    }
  };
});

test('should sanitize state field', async t => {
    await gameSanitize(t.context.hook)
    .then(hook => {
      assert.isUndefined(hook.data.state);
    });
});

test('should sanitize outcome field', async t => {
  await gameSanitize(t.context.hook)
    .then(hook => {
      assert.isUndefined(hook.data.outcome);
    });
});
