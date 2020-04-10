const express = require('express');
const router = express.Router();
const { get, create, update } = require('../controllers/orders');

router.get('/', get);
router.post('/', create);
router.patch('/:ref', update);
// router.delete("/:id", remove);

module.exports = router;
