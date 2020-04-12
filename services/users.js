const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const get = async () => {
  const users = await User.find();
  return users;
};

const getByEmail = async (email) => {
  const user = await User.findOne({ email: email });
  return user;
};

const create = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    email: email,
    password: hashedPassword,
  });
  return user;
};

const login = async (user) => {
  const token = await jwt.sign(
    { userId: user.id, email: user.email },
    'jwtsecretkey',
    {
      expiresIn: '1h',
    }
  );
  return { userId: user.id, token, tokenExp: 1 };
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

module.exports = { get, getByEmail, create, update, remove, login };
