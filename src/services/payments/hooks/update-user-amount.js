'use strict';

const userModel = require('../../user/user-model');
const ObjectId = require('mongoose').Schema.Types.ObjectId;

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
};
