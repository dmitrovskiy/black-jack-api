'use strict';

import mongoose, { Schema } from 'mongoose';

const stepSchema = new Schema(
  {
    gameId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    type: {
      type: String,
      enum: ['hit', 'stand']
    }
  },
  {
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret._id;
        return ret;
      }
    }
  }
);

export default mongoose.model('step', stepSchema);
