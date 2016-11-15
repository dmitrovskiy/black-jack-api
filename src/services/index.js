'use strict';

import user from './user';
import payment from './payment';
import game from './game';
import step from './step';
import mongoose from 'mongoose';
import Promise from 'bluebird';

export default function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = Promise;

  app.configure(user);
  app.configure(payment);
  app.configure(game);
  app.configure(step);
};
