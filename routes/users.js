const express = require('express');
const router = express.Router();
const {
  get,
  create,
  update,
  remove,
  login,
  sendEmail,
} = require('../controllers/users');

router.get('/', get);
router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', remove);
router.post('/login', login);
router.post('/email', sendEmail);

module.exports = router;
