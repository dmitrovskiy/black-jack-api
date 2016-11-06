'use strict';

const assert = require('chai').assert;
const userSanitize = require('../../../../src/services/user/hooks/sanitize');

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
