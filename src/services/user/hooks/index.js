'use strict';

import sanitize from './sanitize';

export default {
  before: {
    create: [sanitize],
    update: [sanitize],
    patch: [sanitize]
  },
  after: {}
};
