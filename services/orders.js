const Order = require('../models/Order');

const get = async () => {
  const orders = await Order.find();
  return orders;
};

const getByRef = async (ref) => {
  const orders = await Order.findOne({ ref: ref });
  return orders;
};

const create = async (
  ref,
  cart,
  email,
  address,
  city,
  phone,
  paymentMethod
) => {
  const order = await Order.create({
    ref: ref,
    cart: cart,
    email: email,
    address: address,
    city: city,
    phone: phone,
    paymentMethod: paymentMethod,
    createdAt: new Date().toLocaleString('es-CO', {
      timeZone: 'America/Bogota',
    }),
  });
  return order;
};

const update = async (ref, field, method) => {
  const order = await Order.findOneAndUpdate(
    { ref: ref },
    { [method]: field },
    { new: true }
  );
  return order;
};

module.exports = { get, getByRef, create, update };
