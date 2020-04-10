const Order = require('../models/Order');

const getAll = async () => {
  const orders = await Order.find();
  return orders;
};

const create = async (ref, cart, address, phone) => {
  const order = await Order.create({
    ref: ref,
    cart: cart,
    address: address,
    phone: phone,
  });
  return order;
};

// const update = async (id, field, method) => {
//   const user = await User.findOneAndUpdate(
//     { _id: id },
//     { [method]: field },
//     { new: true }
//   );
//   return user;
// };

// const remove = async id => {
//   await User.findByIdAndRemove(id);
//   return null;
// };

module.exports = { getAll, create };
