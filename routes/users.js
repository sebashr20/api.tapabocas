const express = require('express');
const router = express.Router();
const { get, create, update, remove, login } = require('../controllers/users');

router.get('/', get);
router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', remove);
router.post('/login', login);

module.exports = router;
