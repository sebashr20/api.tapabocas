const express = require("express");
const router = express.Router();
const { getAll, create, update, remove } = require("../controllers/users");

router.get("/", getAll);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);

module.exports = router;
