const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  ref: { type: String, required: true },
  cart: [
    {
      id: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  address: { type: String, required: true },
  phone: { type: Number, required: true },
});

module.exports = model('Order', orderSchema);
