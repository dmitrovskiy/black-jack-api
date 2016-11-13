'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.cards;
        return ret;
      }
    },
    timestamps: true
  }
);

module.exports = mongoose.model('game', gameSchema);
