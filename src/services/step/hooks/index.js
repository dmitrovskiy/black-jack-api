'use strict';

import stepProcess from './stepProcess';

export default {
  before: {},
  after: {
    create: [
      stepProcess
    ]
  }
};

