const express = require('express');
const router = express.Router();
const { get, getByRef, create, update } = require('../controllers/orders');

router.get('/', get);
router.get('/:ref', getByRef);
router.post('/', create);
router.patch('/:ref', update);

module.exports = router;
