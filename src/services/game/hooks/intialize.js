'use strict';

import Judge from '../../../helpers/judge';
import Shoe from '../../../helpers/shoe';
import defaultCards from '../../../../default-data/cards';

export default async function (hook) {
  const cards = defaultCards.slice();
  const shoe = new Shoe(cards);

  hook.data.dealerCards = [
    shoe.getNextCard(),
    shoe.getNextCard()
  ];
  hook.data.clientCards = [
    shoe.getNextCard(),
    shoe.getNextCard()
  ];
  hook.data.cards = cards;

  const judge = new Judge(hook.data);
  const outcome = judge.getOutcome('initial');

  if(outcome !== null) {
    hook.data.outcome = outcome;
  }

  return hook;
};

