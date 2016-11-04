'use strict';

const mongoose = require('mongoose');
const mongooseHidden = require('mongoose-hidden')();
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  }
});

userSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

userSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret, options) {
    delete ret._id;
    return ret;
  }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
