const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    default: null,
    lowercase: true,
    unique: true,
    sparse: true,
  },
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
});

module.exports = model('User', userSchema);
