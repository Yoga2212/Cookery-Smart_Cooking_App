const express = require("express");
const router = express.Router();
const { addGroceryItem, getGrocery } = require("../controllers/groceryController");
const auth = require("../middleware/authMiddleware");

router.post("/add", auth, addGroceryItem);
router.get("/", auth, getGrocery);

module.exports = router;
