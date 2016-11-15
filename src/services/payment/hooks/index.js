'use strict';

import updateUserAmount from './update-user-amount';

export default {
  before: {},
  after: {
    create: [updateUserAmount]
  }
};
