const ordersService = require("../services/orders");

const getAll = async (req, res) => {
  try {
    const result = await ordersService.getAll();
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
};

const create = async (req, res) => {
  try {
    const {
      body: { ref, cart, address, phone },
    } = req;
    const result = await ordersService.create(ref, cart, address, phone);
    res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
};

// const update = async (req, res) => {
//   try {
//     const {
//       params: { id },
//       body: fields
//     } = req;
//     const result = await ordersService.update(id, fields, "$set");
//     res.status(200).json(result);
//   } catch (error) {
//     return res.status(500).json({
//       message: "Server Error"
//     });
//   }
// };

// const remove = async (req, res) => {
//   try {
//     const {
//       params: { id }
//     } = req;
//     const result = await ordersService.remove(id);
//     res.status(204).json(result);
//   } catch (err) {
//     return res.status(500).json({
//       message: "Server Error"
//     });
//   }
// };

module.exports = { getAll, create };
