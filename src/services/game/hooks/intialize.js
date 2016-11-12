'use strict';

const defaultCards = require('../../../../default-data/cards');

module.exports = function () {
  return function (hook) {

    hook.data.cards = defaultCards;
    return Promise.resolve(hook);
  };
};
