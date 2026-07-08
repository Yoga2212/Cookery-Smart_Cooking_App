// server/seedRecipes.js
const mongoose = require("mongoose");
const Recipe = require("./models/Recipe");

mongoose.connect("mongodb://127.0.0.1:27017/smartcooking")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error: ", err.message));

// ----------------------------
// Category: Breakfast (15 Recipes)
// ----------------------------
const breakfastRecipes = [
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Idli",
    category: "Breakfast",
    preparingTime: "20 mins + 8-12 hrs ferment",
    ingredients: [
      "Parboiled rice — 2 cups",
      "Urad dal — 1 cup",
      "Salt — 1 tsp",
      "Water — as needed"
    ],
    steps: [
      "Wash and soak rice and urad dal separately for 4-6 hours.",
      "Grind urad dal to smooth batter, rice to slightly coarse batter.",
      "Mix both batters, add salt, and ferment overnight (8-12 hours).",
      "Grease idli molds, pour batter, and steam for 10-12 minutes.",
      "Let cool for 2 minutes, remove idlis gently, serve hot with chutney and sambar."
    ],
    nutrition: {
      calories: 140,
      protein: 4,
      fat: 0.4,
      carbs: 29
    },
    image: "Images/breakfast/idli.png"
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Dosa",
    category: "Breakfast",
    preparingTime: "30 mins + 8-12 hrs ferment",
    ingredients: [
      "Parboiled rice — 2 cups",
      "Urad dal — 1 cup",
      "Salt — 1 tsp",
      "Water — as needed",
      "Oil — 2 tsp"
    ],
    steps: [
      "Prepare fermented batter same as idli.",
      "Heat a non-stick pan, pour a ladle of batter and spread thin in circular motion.",
      "Drizzle oil around edges, cook until golden and crisp.",
      "Flip if desired and cook for 30 seconds.",
      "Serve hot with coconut chutney and sambar."
    ],
    nutrition: {
      calories: 180,
      protein: 5,
      fat: 3,
      carbs: 32
    },
    image: "Images/breakfast/dosa.png"
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Pongal",
    category: "Breakfast",
    preparingTime: "25 mins",
    ingredients: [
      "Raw rice — 1 cup",
      "Moong dal — ¼ cup",
      "Ginger — 1 tsp, grated",
      "Black pepper — ½ tsp",
      "Cumin seeds — ½ tsp",
      "Curry leaves — few",
      "Ghee — 2 tbsp",
      "Salt — 1 tsp",
      "Water — 3 cups"
    ],
    steps: [
      "Roast moong dal lightly until aromatic.",
      "Boil rice and dal in water with salt, cook until soft.",
      "In ghee, sauté ginger, black pepper, cumin seeds, and curry leaves.",
      "Pour tempering over cooked rice-dal mixture.",
      "Serve hot with coconut chutney."
    ],
    nutrition: {
      calories: 250,
      protein: 6,
      fat: 7,
      carbs: 40
    },
    image: "Images/breakfast/pongal.png"
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Poori Masala",
    category: "Breakfast",
    preparingTime: "30 mins",
    ingredients: [
      "Whole wheat flour — 2 cups",
      "Salt — ½ tsp",
      "Water — as needed",
      "Oil — for deep frying",
      "Potatoes — 3 medium, boiled and mashed",
      "Onion — 1, chopped",
      "Green chilies — 2, chopped",
      "Turmeric — ¼ tsp",
      "Coriander leaves — handful, chopped"
    ],
    steps: [
      "Knead wheat flour with water and salt to soft dough. Rest 15 min.",
      "Roll small balls into discs for pooris.",
      "Deep fry in hot oil until golden and puffed.",
      "Prepare potato masala by sautéing onion, green chilies, turmeric, mashed potatoes, and coriander.",
      "Serve hot poori with potato masala."
    ],
    nutrition: {
      calories: 350,
      protein: 7,
      fat: 15,
      carbs: 45
    },
    image: "Images/breakfast/poori_masala.png"
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Upma",
    category: "Breakfast",
    preparingTime: "20 mins",
    ingredients: [
      "Semolina (Rava) — 1 cup",
      "Water — 2 ½ cups",
      "Onion — 1, chopped",
      "Green chilies — 2, chopped",
      "Ginger — 1 tsp, grated",
      "Curry leaves — few",
      "Mustard seeds — ½ tsp",
      "Ghee — 1 tbsp",
      "Salt — 1 tsp",
      "Coriander leaves — for garnish"
    ],
    steps: [
      "Dry roast semolina until light golden, set aside.",
      "Heat ghee in pan, add mustard seeds, curry leaves, onion, green chilies, and ginger; sauté 2-3 minutes.",
      "Add water and salt, bring to boil.",
      "Slowly add roasted semolina, stirring continuously to avoid lumps.",
      "Cook 5 min, garnish with coriander leaves, serve hot."
    ],
    nutrition: {
      calories: 220,
      protein: 5,
      fat: 6,
      carbs: 35
    },
    image: "Images/breakfast/upma.png"
  },

  // Add remaining 10 breakfast recipes in the same format, with unique `_id`, `title`, `preparingTime`, `ingredients`, `steps`, `nutrition`, and `image` path.
];

// ----------------------------
// Function to Seed Breakfast
// ----------------------------
async function seedBreakfast() {
  try {
    console.log("🧹 Cleaning existing Breakfast recipes...");
    await Recipe.deleteMany({ category: "Breakfast" });

    console.log("🌱 Seeding Breakfast recipes...");
    await Recipe.insertMany(breakfastRecipes);

    console.log("✅ Breakfast recipes seeded successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error seeding breakfast recipes:", err);
    mongoose.connection.close();
  }
}

// Run seeding
seedBreakfast();
