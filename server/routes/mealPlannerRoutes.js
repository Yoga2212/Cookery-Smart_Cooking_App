const express = require("express");
const router = express.Router();
const { addMeal, getMealsWithNutrition } = require("../controllers/mealPlannerController");
const auth = require("../middleware/authMiddleware");

router.post("/add", auth, addMeal);
router.get("/", auth, getMealsWithNutrition);

module.exports = router;
