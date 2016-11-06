'use strict';

const userModel = require('../../user/user-model');

module.exports = function(hook) {
  return userModel.update(
    {
      _id: hook.data.userId
    },
    {
      $inc: {
        cash: hook.data.amount
      }
    }
  ).exec();
};
