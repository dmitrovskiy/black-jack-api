'use strict';

const assert = require('chai').assert;
const judge = require('../../src/helpers/judge');
const _ = require('lodash');

const cardCases = require('./cardCases');

describe('helpers.judge', function() {
  describe('helpers.judge.rateCards', function (){
    cardCases.forEach(function (item) {
      it(`should return ${item.sum} from ${item.cards}`, function () {
        let cards = _.map(item.cards, function (sign) {
          return {sign: sign};
        });
        assert.equal(item.sum, judge.rateCards(cards));
      });
    });
  });
});
