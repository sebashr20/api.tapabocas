const User = require('../models/User');

const getAll = async () => {
  const users = await User.find();
  return users;
};

const create = async (email, firstName, lastName) => {
  const user = await User.create({
    email: email,
    firstName: firstName,
    lastName: lastName,
  });
  return user;
};

const update = async (id, field, method) => {
  const user = await User.findOneAndUpdate(
    { _id: id },
    { [method]: field },
    { new: true }
  );
  return user;
};

const remove = async (id) => {
  await User.findByIdAndRemove(id);
  return null;
};

module.exports = { getAll, create, update, remove };
