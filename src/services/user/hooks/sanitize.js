'use strict';

export default async function (hook) {
  delete hook.data.cash;
  return hook;
};
