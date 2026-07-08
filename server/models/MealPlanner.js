const mongoose = require("mongoose");

const MealPlannerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  meals: [
    {
      type: {
        type: String,
        required: true
      },
      recipeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
        required: true
      }
    }
  ]
});

module.exports = mongoose.model("MealPlanner", MealPlannerSchema);
