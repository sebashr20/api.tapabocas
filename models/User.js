const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    default: null,
    lowercase: true,
    unique: true,
    sparse: true,
  },
  password: { type: String, required: true },
});

module.exports = model('User', userSchema);
