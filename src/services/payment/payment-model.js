'use strict';

import mongoose, { Schema } from 'mongoose';

const paymentSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true
    }
  },
  {
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret._id;
        return ret;
      }
    },
    timestamps: true
  }
);

export default mongoose.model('payment', paymentSchema);
