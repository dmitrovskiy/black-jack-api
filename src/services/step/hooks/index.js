'use strict';

const stepProcess = require('./stepProcess');

module.exports.before = {};
module.exports.after = {
  create: [
    stepProcess
  ]
};
