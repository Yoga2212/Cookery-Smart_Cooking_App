const express = require("express");
const router = express.Router();
const { addPantryItem, getPantry } = require("../controllers/pantryController");
const auth = require("../middleware/authMiddleware");

router.post("/add", auth, addPantryItem);
router.get("/", auth, getPantry);

module.exports = router;
