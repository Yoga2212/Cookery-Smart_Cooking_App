const MealPlanner = require("../models/MealPlanner");
const Recipe = require("../models/Recipe");

// Add meal
const addMeal = async (req, res) => {
  try {
    const { date, type, recipeId } = req.body;

    let mealPlan = await MealPlanner.findOne({ userId: req.userId, date });

    if (!mealPlan) {
      mealPlan = new MealPlanner({
        userId: req.userId,
        date,
        meals: [{ type, recipeId }]
      });
    } else {
      mealPlan.meals.push({ type, recipeId });
    }

    await mealPlan.save();
    res.json({ msg: "Meal added", mealPlan });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// Get meals + nutrition calculation
const getMealsWithNutrition = async (req, res) => {
  try {
    const { date } = req.query;
    const mealPlans = await MealPlanner.find({ userId: req.userId, date }).populate("meals.recipeId");

    if (!mealPlans.length) return res.json({ msg: "No meals found for this date" });

    let totals = { calories: 0, protein: 0, fat: 0, carbs: 0 };

    mealPlans.forEach(plan => {
      plan.meals.forEach(m => {
        if (m.recipeId && m.recipeId.nutrition) {
          totals.calories += m.recipeId.nutrition.calories || 0;
          totals.protein += m.recipeId.nutrition.protein || 0;
          totals.fat += m.recipeId.nutrition.fat || 0;
          totals.carbs += m.recipeId.nutrition.carbs || 0;
        }
      });
    });

    res.json({ mealPlans, totals });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

module.exports = { addMeal, getMealsWithNutrition };
