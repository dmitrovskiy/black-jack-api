'use strict';

import mongoose, { Schema } from 'mongoose';

const gameSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    bet: {
      type: Number,
      required: true
    },
    clientCards: {
      type: Array
    },
    dealerCards: {
      type: Array
    },
    cards: {
      type: Array
    },
    outcome: {
      type: String,
      enum: ['push', 'clientBJ', 'clientFail', 'clientWin']
    }
  },
  {
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret._id;
        delete ret.cards;
        return ret;
      }
    },
    timestamps: true
  }
);

export default mongoose.model('game', gameSchema);
