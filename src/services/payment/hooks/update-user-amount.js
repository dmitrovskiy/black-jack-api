'use strict';

const userModel = require('../../user/user-model');
const Promise = require('bluebird');

module.exports = function(hook) {
  userModel.update(
    {
      _id: hook.data.userId
    },
    {
      $inc: {
        cash: hook.data.amount
      }
    }
  ).exec();

  return Promise.resolve(hook);
};
