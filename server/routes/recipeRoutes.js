const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");
const { addRecipe, getRecipes, getRecipeById } = require("../controllers/recipeController");
const auth = require("../middleware/authMiddleware");

// 🟠 Add recipe (Protected)
router.post("/add", auth, addRecipe);

// 🟢 Get all recipes
router.get("/", getRecipes);

// 🔍 Search by name or category — must come BEFORE :id
router.get("/search", async (req, res) => {
  try {
    const query = req.query.query?.toLowerCase();

    if (!query) {
      return res.status(400).json({ message: "Query parameter missing" });
    }

    const recipes = await Recipe.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    });

    if (recipes.length === 0) {
      return res.status(404).json({ message: "No recipes found" });
    }

    res.json(recipes);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔵 Get recipe by ID (keep last)
router.get("/:id", getRecipeById);

module.exports = router;
