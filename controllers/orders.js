const ordersService = require('../services/orders');

const get = async (req, res) => {
  try {
    const result = await ordersService.get();
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error',
    });
  }
};
const getByRef = async (req, res) => {
  try {
    const {
      params: { ref },
    } = req;
    const result = await ordersService.getByRef(ref);
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
      body: { ref, cart, email, address, city, phone, paymentMethod },
    } = req;
    const existingOrder = await ordersService.getByRef(ref);
    if (existingOrder) {
      return null;
    }
    const result = await ordersService.create(
      ref,
      cart,
      email,
      address,
      city,
      phone,
      paymentMethod
    );
    res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error',
    });
  }
};

const update = async (req, res) => {
  try {
    const {
      params: { ref },
      body: fields,
    } = req;
    await ordersService.update(ref, fields, '$set');
    const result = await ordersService.get();
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error',
    });
  }
};

module.exports = { get, getByRef, create, update };
