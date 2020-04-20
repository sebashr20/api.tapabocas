const bcrypt = require('bcryptjs');
const usersService = require('../services/users');
const emailService = require('../services/email');

const get = async (req, res) => {
  try {
    const result = await usersService.get();
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error',
    });
  }
};

const create = async (req, res) => {
  try {
    const {
      body: { email, password },
    } = req;
    const existingUser = await usersService.getByEmail(email);
    if (existingUser) {
      return res.status(401).json({
        message: 'User already exists',
      });
    }
    const result = await usersService.create(email, password);
    res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error',
    });
  }
};

const login = async (req, res) => {
  try {
    const {
      body: { email, password },
    } = req;
    const user = await usersService.getByEmail(email);
    if (!user) {
      return res.status(401).json({
        message: 'User does not exists',
      });
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      return res.status(401).json({
        message: 'Password is incorrect',
      });
    }
    const result = await usersService.login(user, password);
    res.status(200).json(result);
  } catch (error) {
    throw error;
  }
};

const update = async (req, res) => {
  try {
    const {
      params: { id },
      body: fields,
    } = req;
    const result = await usersService.update(id, fields, '$set');
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error',
    });
  }
};

const remove = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const result = await usersService.remove(id);
    res.status(204).json(result);
  } catch (err) {
    return res.status(500).json({
      message: 'Server Error',
    });
  }
};

const sendEmail = async (req, res) => {
  try {
    const {
      body: { to, from, subject, body, type },
    } = req;
    const emailData = { to, from, subject, body };
    const result = await emailService.compose(emailData, type);
    if (result === 202) {
      return res.status(200).json('Message sent');
    } else {
      return res.status(500).json({
        message: 'Message could not be sent',
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error',
    });
  }
};

module.exports = { get, create, update, remove, login, sendEmail };
