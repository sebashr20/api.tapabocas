const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
  {
    ref: { type: String, required: true, default: null },
    cart: [
      {
        id: { type: String, required: true, default: null },
        quantity: { type: Number, required: true, default: null },
      },
    ],
    address: { type: String, required: true, default: null },
    city: { type: String, required: true, default: null },
    phone: { type: Number, required: true, default: null },
    status: { type: String, required: false, default: 'PENDING' },
    paymentMethod: { type: String, required: true, default: null },
    wompiId: { type: String, required: false, default: null },
  },
  { timestamps: true }
);

module.exports = model('Order', orderSchema);
