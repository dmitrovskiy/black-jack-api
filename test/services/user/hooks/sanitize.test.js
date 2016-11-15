'use strict';

import {assert} from 'chai';
import userSanitize from '../../../../src/services/user/hooks/sanitize';

describe('services.user.hooks.sanitize', function (){
  beforeEach('create hook stub', function () {
    this.hook = {
      data: {
        cash: 10
      }
    };
  });

  it('should sanitize cash field', function () {
    return userSanitize(this.hook)
      .then(function(hook) {
        assert.isUndefined(hook.data.cash);
      });
  });
});
