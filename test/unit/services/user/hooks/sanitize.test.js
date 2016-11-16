'use strict';

import {assert} from 'chai';
import userSanitize from '../../../../../src/services/user/hooks/sanitize';
import test from 'ava';

test.beforeEach(t => {
  t.context.hook = {
    data: {
      cash: 10
    }
  };
});

test('should sanitize cash field', async t => {
  await userSanitize(t.context.hook)
    .then(hook => {
      assert.isUndefined(hook.data.cash);
    });
});
