'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stepSchema = new Schema(
  {
    gameId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    stepType: {
      type: String,
      enum: ['hit', 'stand']
    }
  },
  {}
);

module.exports = mongoose.model('step', stepSchema);
