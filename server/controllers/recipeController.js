const Recipe = require("../models/Recipe");

// ➕ Add Recipe
const addRecipe = async (req, res) => {
  try {
    const { title, category, ingredients, steps, nutrition } = req.body;

    const recipe = new Recipe({
      title,
      category,
      ingredients,
      steps,
      nutrition,
      userId: req.userId
    });

    await recipe.save();
    res.json({ msg: "Recipe added", recipe });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// 📥 Get all Recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// 🔍 Search Recipes by Ingredient
const searchByIngredient = async (req, res) => {
  try {
    const { ingredient } = req.query;
    const recipes = await Recipe.find({
      ingredients: { $regex: ingredient, $options: "i" },
    });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// 📥 Get Recipe by ID
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ msg: "Recipe not found" });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

module.exports = { addRecipe, getRecipes, searchByIngredient, getRecipeById };


