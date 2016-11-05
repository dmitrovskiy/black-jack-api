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
    state: {
      type: String,
      enum: ['pending', 'end'],
      default: 'pending'
    },
    outcome: {
      type: String,
      enum: ['client', 'croupier']
    }
  },
  {
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id;
        return ret;
      }
    },
    timestamps: true
  }
);

module.exports = mongoose.model('game', gameSchema);
