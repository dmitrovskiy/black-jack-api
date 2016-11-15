'use strict';

import sanitize from './sanitize';
import initialize from './intialize';

export default {
  before: {
    create: [
      sanitize,
      initialize
    ],
    update: [sanitize],
    patch: [sanitize]
  },

  after: {}
};
