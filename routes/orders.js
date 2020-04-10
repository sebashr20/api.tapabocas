const express = require('express');
const router = express.Router();
const { getAll, create } = require('../controllers/orders');

router.get('/', getAll);
router.post('/', create);
// router.patch("/:id", update);
// router.delete("/:id", remove);

module.exports = router;
