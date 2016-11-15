'use strict';

import {assert} from 'chai';
import gameSanitize from '../../../../src/services/game/hooks/sanitize';

describe('services.game.hooks.sanitize', function (){
  beforeEach('create hook stub', function () {
    this.hook = {
      data: {
        state: 'test',
        outcome: 'test'
      }
    };
  });

  it('should sanitize state field', function () {
    return gameSanitize(this.hook)
      .then(function(hook) {
        assert.isUndefined(hook.data.state);
      });
  });

  it('should sanitize outcome field', function () {
    return gameSanitize(this.hook)
      .then(function(hook) {
        assert.isUndefined(hook.data.outcome);
      });
  });
});
