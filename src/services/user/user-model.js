'use strict';

import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },
    cash: {
      type: Number,
      default: 0
    }
  },
  {
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id;
        return ret;
      }
    }
  }
);

export default mongoose.model('user', userSchema);
