const Order = require('../models/Order');

const get = async () => {
  const orders = await Order.find();
  return orders;
};

const create = async (ref, cart, address, city, phone) => {
  const order = await Order.create({
    ref: ref,
    cart: cart,
    address: address,
    city: city,
    phone: phone,
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

// const remove = async id => {
//   await User.findByIdAndRemove(id);
//   return null;
// };

module.exports = { get, create, update };
