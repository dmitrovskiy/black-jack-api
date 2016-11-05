'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentsSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  createdOn: {
    type: Date
  }
});

paymentsSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

paymentsSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id;
    return ret;
  }
});

module.exports = mongoose.model('payment', paymentsSchema);
