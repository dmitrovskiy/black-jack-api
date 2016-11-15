'use strict';

import userModel from '../../user/user-model';

export default async function(hook) {
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

  return hook;
};
