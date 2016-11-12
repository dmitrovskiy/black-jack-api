'use strict';

module.exports = function(hook) {
  delete hook.data.state;
  delete hook.data.outcome;
  delete hook.data.clientCards;
  delete hook.data.dealerCards;
  delete hook.data.cards;

  return Promise.resolve(hook);
};
