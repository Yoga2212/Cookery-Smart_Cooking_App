// src/data/recipeData.js

export const recipeData = [
  // -------------------- Breakfast --------------------
 {
  id: 1,
  name: "Idli",
  category: "Breakfast",
  imageName: "idli",
  prepTime: "10 mins (plus soaking & fermenting)",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Idli rice - 2 cups",
      "Urad dal (split black gram) - 1 cup",
      "Fenugreek seeds - 1 teaspoon",
      "Salt - 1½ teaspoons or to taste",
      "Water - as required for soaking and grinding",
      "Oil - 1 teaspoon for greasing molds"
    ],
    optional: [
      "Flattened rice (poha) - 2 tablespoons, for softer idlis"
    ]
  },
  preparation: [
    "Step 1: Rinse the rice, urad dal, and fenugreek seeds separately 2–3 times until the water runs clear.",
    "Step 2: Soak the rice, dal, and fenugreek seeds in plenty of water for about 6 hours.",
    "Step 3: Drain the soaked urad dal and grind it to a smooth, fluffy batter using ½–¾ cup of water.",
    "Step 4: Grind the soaked rice to a slightly coarse batter using about ¾–1 cup of water.",
    "Step 5: Mix both batters together in a large bowl, add salt, and combine well using clean hands.",
    "Step 6: Cover and let the batter ferment overnight or 8–12 hours in a warm place until it doubles in volume.",
    "Step 7: Once fermented, stir the batter gently (do not overmix). If too thick, add a little water to adjust consistency.",
    "Step 8: Grease the idli molds with oil and pour the batter into each mold up to ¾ full.",
    "Step 9: Steam the idlis in an idli steamer or pressure cooker (without whistle) for 10–12 minutes on medium heat.",
    "Step 10: Let it cool slightly for 2 minutes, then gently unmold the idlis.",
    "Step 11: Serve hot with coconut chutney and sambar."
  ],
  nutrition: { calories: 58, protein: 2, carbs: 12, fat: 0.3 }
},
  {
  id: 2,
  name: "Dosa",
  category: "Breakfast",
  imageName: "dosa",
  prepTime: "15 mins (plus soaking & fermenting)",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Dosa rice - 2 cups",
      "Urad dal (split black gram) - 1 cup",
      "Fenugreek seeds - 1 teaspoon",
      "Chana dal - 1 tablespoon (for color and crispness)",
      "Cooked rice - 2 tablespoons (for softness)",
      "Salt - 1½ teaspoons or to taste",
      "Water - as required for grinding",
      "Oil or ghee - as required for cooking"
    ],
    optional: [
      "Butter - 1 tablespoon (for serving)"
    ]
  },
  preparation: [
    "Step 1: Wash and soak dosa rice, urad dal, fenugreek seeds, and chana dal in separate bowls for 4–6 hours.",
    "Step 2: Drain and grind urad dal to a smooth, fluffy paste using ½ cup of water.",
    "Step 3: Grind soaked rice and chana dal together with cooked rice using about 1 cup of water until slightly coarse.",
    "Step 4: Combine both batters in a large bowl, add salt, and mix thoroughly.",
    "Step 5: Cover and ferment overnight (8–12 hours) in a warm place until the batter rises and turns airy.",
    "Step 6: Gently mix the fermented batter. Add a little water if needed to make it pourable.",
    "Step 7: Heat a dosa tawa or cast-iron griddle over medium-high flame until hot.",
    "Step 8: Lightly grease with oil, pour one ladle of batter, and spread evenly in a circular motion to make a thin dosa.",
    "Step 9: Drizzle a few drops of oil or ghee around the edges and cook until golden brown and crisp.",
    "Step 10: Fold the dosa and serve immediately with chutney, sambar, or potato masala."
  ],
  nutrition: { calories: 120, protein: 3, carbs: 22, fat: 2 }
},
  {
  id: 3,
  name: "Pongal",
  category: "Breakfast",
  imageName: "pongal",
  prepTime: "10 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Raw rice - 1 cup",
      "Split moong dal - ½ cup",
      "Water - 4 cups",
      "Salt - 1 teaspoon or to taste",
      "Ginger (finely chopped) - 1 tablespoon",
      "Ghee - 2 tablespoons",
      "Cumin seeds - 1 teaspoon",
      "Whole black pepper - 1 teaspoon",
      "Cashews - 8 to 10 (broken)",
      "Curry leaves - 8 leaves"
    ],
    optional: [
      "Green chili - 1 (slit)",
      "Asafoetida - a pinch"
    ]
  },
  preparation: [
    "Step 1: Dry roast the moong dal in a pan on low flame until aromatic and lightly golden.",
    "Step 2: Wash the rice and add it to the roasted dal.",
    "Step 3: Pour 4 cups of water into a pressure cooker and add the rice-dal mixture.",
    "Step 4: Add salt and pressure cook for 3–4 whistles or until both are soft and mushy.",
    "Step 5: Once pressure releases, mash the mixture lightly with a spoon.",
    "Step 6: Heat ghee in a small pan; add cumin seeds, whole pepper, chopped ginger, and cashews.",
    "Step 7: Sauté till cashews turn golden, then add curry leaves and asafoetida.",
    "Step 8: Pour this tempering over the cooked rice-dal mixture and mix gently.",
    "Step 9: Adjust consistency by adding a little hot water if too thick.",
    "Step 10: Serve hot with coconut chutney, sambar, or a drizzle of ghee."
  ],
  nutrition: { calories: 210, protein: 6, carbs: 40, fat: 5 }
},
  {
  id: 4,
  name: "Poori Masala",
  category: "Breakfast",
  imageName: "poori_masala",
  prepTime: "20 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Wheat flour - 2 cups",
      "Salt - 1 teaspoon",
      "Water - as required to knead dough",
      "Oil - for deep frying",
      "Potatoes - 3 medium (boiled and mashed)",
      "Green peas - ¼ cup (optional)",
      "Onion - 1 large (sliced)",
      "Green chilies - 2 (slit)",
      "Mustard seeds - ½ teaspoon",
      "Curry leaves - 8 leaves",
      "Turmeric powder - ¼ teaspoon",
      "Oil - 1 tablespoon for masala",
      "Water - ½ cup for gravy consistency"
    ],
    optional: [
      "Coriander leaves - 1 tablespoon (for garnish)"
    ]
  },
  preparation: [
    "Step 1: Mix wheat flour and salt in a bowl, add little water, and knead into a stiff dough.",
    "Step 2: Cover the dough and rest it for 15 minutes.",
    "Step 3: Divide dough into small balls and roll them into small discs (pooris).",
    "Step 4: Heat oil in a deep pan and fry each poori until golden and puffed. Drain on tissue.",
    "Step 5: Heat 1 tbsp oil in another pan; add mustard seeds and let them splutter.",
    "Step 6: Add curry leaves, sliced onion, and green chilies. Sauté until onions turn translucent.",
    "Step 7: Add turmeric powder and mashed potatoes; mix well.",
    "Step 8: Add cooked peas and ½ cup of water to get semi-gravy consistency.",
    "Step 9: Simmer for 5 minutes, stirring occasionally. Adjust salt.",
    "Step 10: Garnish with coriander leaves and serve the masala with hot pooris."
  ],
  nutrition: { calories: 300, protein: 5, carbs: 45, fat: 12 }
},
  {
  id: 5,
  name: "Upma",
  category: "Breakfast",
  imageName: "upma",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Semolina (rava/suji) - 1 cup",
      "Water - 2½ cups",
      "Salt - 1 teaspoon or to taste",
      "Ghee or oil - 2 tablespoons",
      "Mustard seeds - ½ teaspoon",
      "Urad dal - ½ teaspoon",
      "Chana dal - 1 teaspoon",
      "Onion - 1 medium (finely chopped)",
      "Green chili - 1 (slit)",
      "Curry leaves - 8 leaves"
    ],
    optional: [
      "Cashews - 8 (halved)",
      "Grated carrot - 2 tablespoons",
      "Coriander leaves - 1 tablespoon for garnish"
    ]
  },
  preparation: [
    "Step 1: Dry roast semolina in a pan over low flame for 5–6 minutes until lightly golden and aromatic. Set aside.",
    "Step 2: Heat ghee or oil in a pan and add mustard seeds; let them splutter.",
    "Step 3: Add urad dal and chana dal and fry until golden brown.",
    "Step 4: Add cashews (if using) and fry until golden.",
    "Step 5: Add chopped onions, green chili, and curry leaves; sauté until onions turn soft.",
    "Step 6: Pour in 2½ cups of water and add salt. Bring it to a rolling boil.",
    "Step 7: Lower the flame and gradually add roasted semolina while stirring continuously to avoid lumps.",
    "Step 8: Stir well until the upma thickens and absorbs all the water.",
    "Step 9: Add grated carrot (optional) and mix gently.",
    "Step 10: Switch off the flame, cover, and rest for 2 minutes.",
    "Step 11: Fluff up with a fork and garnish with coriander leaves before serving hot."
  ],
  nutrition: { calories: 200, protein: 5, carbs: 36, fat: 6 }
},
  {
  id: 6,
  name: "Bread Omelette",
  category: "Breakfast",
  imageName: "bread_omlette",
  prepTime: "5 mins",
  cookTime: "10 mins",
  ingredients: {
    main: [
      "Eggs - 2 large",
      "Bread slices - 2",
      "Salt - ¼ teaspoon",
      "Black pepper powder - ¼ teaspoon",
      "Oil or butter - 1 tablespoon"
    ],
    optional: [
      "Onion - 2 tablespoons (finely chopped)",
      "Tomato - 2 tablespoons (finely chopped)",
      "Green chili - 1 small (finely chopped)",
      "Cheese slice - 1",
      "Coriander leaves - 1 tablespoon (chopped)"
    ]
  },
  preparation: [
    "Step 1: Crack eggs into a bowl and whisk until fluffy.",
    "Step 2: Add salt and pepper, and whisk again to combine evenly.",
    "Step 3: If using, mix in chopped onion, tomato, green chili, and coriander.",
    "Step 4: Heat a non-stick pan over medium flame and add 1 teaspoon of oil or butter.",
    "Step 5: Pour the egg mixture into the pan and spread it evenly to form a round omelette.",
    "Step 6: Cook until the bottom is lightly golden and the top is almost set.",
    "Step 7: Place one bread slice on one half of the omelette, then fold the omelette over the bread.",
    "Step 8: Add a cheese slice on top (optional), then cover with the second bread slice.",
    "Step 9: Press gently and toast both sides until golden brown.",
    "Step 10: Slice in half and serve hot with tomato ketchup or mint chutney."
  ],
  nutrition: { calories: 250, protein: 12, carbs: 30, fat: 10 }
},
  {
  id: 7,
  name: "Aloo Paratha",
  category: "Breakfast",
  imageName: "aloo_paratha",
  prepTime: "20 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Wheat flour - 2 cups",
      "Water - as required for kneading",
      "Salt - 1 teaspoon (for dough)",
      "Oil or ghee - 2 teaspoons (for dough)",
      "Potatoes - 3 medium (boiled and mashed)",
      "Green chili - 1 (finely chopped)",
      "Coriander leaves - 2 tablespoons (chopped)",
      "Cumin powder - ½ teaspoon",
      "Red chili powder - ½ teaspoon",
      "Garam masala - ¼ teaspoon",
      "Salt - ½ teaspoon (for stuffing)",
      "Oil or ghee - as required for cooking"
    ],
    optional: [
      "Butter - 1 tablespoon (for serving)"
    ]
  },
  preparation: [
    "Step 1: In a large bowl, mix wheat flour, salt, and oil.",
    "Step 2: Add water little by little and knead into a soft, smooth dough. Cover and rest for 15 minutes.",
    "Step 3: In another bowl, mash boiled potatoes until smooth.",
    "Step 4: Add chopped green chili, coriander, cumin powder, chili powder, garam masala, and salt. Mix well to form the stuffing.",
    "Step 5: Divide dough and stuffing into equal portions.",
    "Step 6: Roll one dough ball into a small circle, place stuffing in the center, and seal edges.",
    "Step 7: Flatten and gently roll again into a medium-thick paratha.",
    "Step 8: Heat a tawa and cook the paratha on both sides until light brown spots appear.",
    "Step 9: Apply oil or ghee on both sides and cook until golden and crisp.",
    "Step 10: Serve hot with butter, curd, or pickle."
  ],
  nutrition: { calories: 300, protein: 6, carbs: 45, fat: 12 }
},
  {
  id: 8,
  name: "Appam with Stew",
  category: "Breakfast",
  imageName: "appam_stew",
  prepTime: "15 mins (plus fermentation time)",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Raw rice - 1½ cups",
      "Grated coconut - ½ cup",
      "Cooked rice - ¼ cup",
      "Sugar - 1 teaspoon",
      "Salt - ½ teaspoon",
      "Instant yeast - 1 teaspoon",
      "Water - as required for grinding",
      "Coconut milk - 1 cup (for stew)",
      "Mixed vegetables (carrot, potato, beans, peas) - 1 cup (chopped)",
      "Onion - 1 (sliced)",
      "Green chili - 2 (slit)",
      "Ginger - 1 teaspoon (chopped)",
      "Curry leaves - 8 leaves",
      "Oil - 1 tablespoon",
      "Cinnamon - 1 small piece",
      "Clove - 2",
      "Salt - to taste"
    ],
    optional: [
      "Cashews - 6 (for garnish)"
    ]
  },
  preparation: [
    "Step 1: Wash and soak rice for 4 hours.",
    "Step 2: Grind soaked rice, grated coconut, cooked rice, sugar, and yeast with enough water into a smooth batter.",
    "Step 3: Transfer to a bowl, add salt, and let ferment for 8–10 hours or overnight until bubbly.",
    "Step 4: To make appams, heat an appam pan and pour a ladle of batter in the center.",
    "Step 5: Swirl the pan to spread the batter thinly along the edges and leave the center thick.",
    "Step 6: Cover with a lid and cook on medium flame for 2–3 minutes until edges are crisp and center is soft.",
    "Step 7: For stew, heat oil in a pan, add cinnamon, cloves, and curry leaves.",
    "Step 8: Add onion, green chili, and ginger; sauté until translucent.",
    "Step 9: Add chopped vegetables, salt, and ½ cup water. Cover and cook until vegetables are tender.",
    "Step 10: Pour in coconut milk and simmer for 2 minutes without boiling.",
    "Step 11: Serve hot appam with freshly made stew."
  ],
  nutrition: { calories: 220, protein: 5, carbs: 35, fat: 8 }
},
  {
  id: 9,
  name: "Poha",
  category: "Breakfast",
  imageName: "poha",
  prepTime: "10 mins",
  cookTime: "10 mins",
  ingredients: {
    main: [
      "Flattened rice (poha) - 1½ cups",
      "Onion - 1 medium (finely chopped)",
      "Green chili - 1 (slit)",
      "Peanuts - 2 tablespoons",
      "Mustard seeds - ½ teaspoon",
      "Curry leaves - 8 leaves",
      "Turmeric powder - ¼ teaspoon",
      "Salt - ¾ teaspoon or to taste",
      "Oil - 1½ tablespoons",
      "Lemon juice - 1 tablespoon"
    ],
    optional: [
      "Coriander leaves - 1 tablespoon (chopped)",
      "Grated coconut - 1 tablespoon"
    ]
  },
  preparation: [
    "Step 1: Rinse the poha gently in water for 10–15 seconds and drain completely. Set aside for 5 minutes.",
    "Step 2: Heat oil in a pan, add mustard seeds, and let them splutter.",
    "Step 3: Add peanuts and fry until golden brown. Remove and keep aside.",
    "Step 4: In the same pan, add curry leaves, onion, and green chili. Sauté until onions turn soft.",
    "Step 5: Add turmeric powder and salt; mix well.",
    "Step 6: Add rinsed poha and toss gently to coat with spices.",
    "Step 7: Sprinkle a few teaspoons of water if the poha seems dry and cook covered for 2–3 minutes.",
    "Step 8: Add fried peanuts back and mix lightly.",
    "Step 9: Turn off flame, drizzle lemon juice, and toss once more.",
    "Step 10: Garnish with coriander and grated coconut before serving hot."
  ],
  nutrition: { calories: 180, protein: 4, carbs: 35, fat: 4 }
},
  {
  id: 10,
  name: "Sandwich",
  category: "Breakfast",
  imageName: "sandwich",
  prepTime: "5 mins",
  cookTime: "5 mins",
  ingredients: {
    main: [
      "Bread slices - 4",
      "Butter - 2 tablespoons (softened)",
      "Cheese slices - 2",
      "Cucumber - 6 thin slices",
      "Tomato - 4 thin slices",
      "Onion - 4 rings",
      "Salt - a pinch",
      "Black pepper powder - a pinch"
    ],
    optional: [
      "Tomato ketchup - 1 tablespoon",
      "Mayonnaise - 1 tablespoon",
      "Green chutney - 1 tablespoon"
    ]
  },
  preparation: [
    "Step 1: Spread butter evenly on all bread slices.",
    "Step 2: On two slices, spread a thin layer of mayonnaise or green chutney if using.",
    "Step 3: Place cheese slices on the buttered side of the bread.",
    "Step 4: Arrange cucumber, tomato, and onion slices over the cheese.",
    "Step 5: Sprinkle a pinch of salt and pepper for flavor.",
    "Step 6: Cover with the remaining bread slices to form sandwiches.",
    "Step 7: Heat a sandwich toaster or tawa and toast both sides with a little butter until golden brown.",
    "Step 8: Remove and cut diagonally into halves.",
    "Step 9: Serve hot with ketchup or chutney of your choice.",
    "Step 10: Optionally, add lettuce or grilled vegetables for variation."
  ],
  nutrition: { calories: 220, protein: 8, carbs: 28, fat: 10 }
},
  {
  id: 11,
  name: "Idiyappam",
  category: "Breakfast",
  imageName: "idiyappam",
  prepTime: "15 mins",
  cookTime: "10 mins",
  ingredients: {
    main: [
      "Rice flour - 2 cups",
      "Water - 2 cups (hot)",
      "Salt - ½ teaspoon",
      "Oil - 1 teaspoon (for greasing)"
    ],
    optional: [
      "Grated coconut - 2 tablespoons",
      "Sugar - 1 tablespoon (for serving)"
    ]
  },
  preparation: [
    "Step 1: Boil water in a pan and add salt.",
    "Step 2: Slowly add the rice flour into boiling water while stirring continuously.",
    "Step 3: Mix until a soft, smooth dough forms.",
    "Step 4: Grease your palms lightly and roll the dough into small portions.",
    "Step 5: Fill the dough into an idiyappam press.",
    "Step 6: Grease idli plates with a little oil.",
    "Step 7: Press the dough into thin noodle-like circles on each plate.",
    "Step 8: Steam the idiyappam in an idli steamer for about 8–10 minutes.",
    "Step 9: Once done, remove from steamer and let it cool slightly.",
    "Step 10: Serve warm with grated coconut and sugar or with vegetable stew."
  ],
  nutrition: { calories: 190, protein: 4, carbs: 40, fat: 1 }
},
  {
  id: 12,
  name: "Rava Idli",
  category: "Breakfast",
  imageName: "rava_idli",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Semolina (Rava/Sooji) - 1 cup",
      "Yogurt - 1 cup",
      "Water - ½ cup (adjust as needed)",
      "Salt - 1 teaspoon",
      "Oil - 1 tablespoon",
      "Mustard seeds - ½ teaspoon",
      "Curry leaves - 5–6",
      "Green chili - 1 (finely chopped)",
      "Grated carrot - 2 tablespoons",
      "Baking soda - ¼ teaspoon"
    ],
    optional: [
      "Cashews - 5 (broken)",
      "Ghee - 1 teaspoon (for roasting)"
    ]
  },
  preparation: [
    "Step 1: Heat a pan and add oil or ghee.",
    "Step 2: Add mustard seeds and let them splutter.",
    "Step 3: Add curry leaves, chopped chili, and cashews, sauté lightly.",
    "Step 4: Add semolina and roast until light golden and aromatic.",
    "Step 5: Let the mixture cool for 5 minutes.",
    "Step 6: Add yogurt, salt, and water; mix to make a thick batter.",
    "Step 7: Stir in grated carrots for color and nutrition.",
    "Step 8: Rest the batter for 10–15 minutes.",
    "Step 9: Just before steaming, add baking soda and mix gently.",
    "Step 10: Pour batter into greased idli molds.",
    "Step 11: Steam for 10–12 minutes or until a toothpick comes out clean.",
    "Step 12: Serve hot with coconut chutney or sambar."
  ],
  nutrition: { calories: 180, protein: 5, carbs: 35, fat: 2 }
},
  {
  id: 13,
  name: "Vegetable Sevai",
  category: "Breakfast",
  imageName: "vegetable_sevai",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Rice vermicelli - 2 cups",
      "Mixed vegetables (carrot, beans, peas) - 1 cup (finely chopped)",
      "Onion - 1 (finely sliced)",
      "Mustard seeds - ½ teaspoon",
      "Urad dal - 1 teaspoon",
      "Green chili - 1 (slit)",
      "Curry leaves - 5–6",
      "Salt - 1 teaspoon",
      "Oil - 2 tablespoons"
    ],
    optional: [
      "Coriander leaves - 1 tablespoon (chopped)",
      "Lemon juice - 1 teaspoon"
    ]
  },
  preparation: [
    "Step 1: Boil water in a pan and add rice vermicelli.",
    "Step 2: Cook until soft, then drain and rinse with cold water.",
    "Step 3: Heat oil in a pan and add mustard seeds.",
    "Step 4: Add urad dal, curry leaves, and green chili; sauté until aromatic.",
    "Step 5: Add sliced onions and sauté until translucent.",
    "Step 6: Add chopped vegetables and cook until tender.",
    "Step 7: Add salt and mix well.",
    "Step 8: Add the cooked vermicelli and gently combine.",
    "Step 9: Cook for 2–3 minutes on low flame, mixing occasionally.",
    "Step 10: Turn off the heat and add coriander leaves and lemon juice.",
    "Step 11: Serve warm with coconut chutney or curd."
  ],
  nutrition: { calories: 200, protein: 5, carbs: 38, fat: 4 }
},
  {
  id: 14,
  name: "Khaman Dhokla",
  category: "Breakfast",
  imageName: "khaman_dhokla",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Gram flour (besan) - 1 cup",
      "Yogurt - ½ cup",
      "Water - ½ cup (adjust for consistency)",
      "Salt - ½ teaspoon",
      "Turmeric powder - ¼ teaspoon",
      "Sugar - 1 teaspoon",
      "Baking soda - ½ teaspoon",
      "Lemon juice - 1 teaspoon"
    ],
    optional: [
      "Mustard seeds - ½ teaspoon",
      "Green chili - 2 (slit)",
      "Curry leaves - 5–6",
      "Oil - 1 tablespoon",
      "Coriander leaves - 1 tablespoon (for garnish)"
    ]
  },
  preparation: [
    "Step 1: Mix gram flour, yogurt, turmeric, sugar, and salt in a bowl.",
    "Step 2: Gradually add water to form a smooth, thick batter.",
    "Step 3: Rest the batter for 15 minutes.",
    "Step 4: Add lemon juice and baking soda, then mix quickly.",
    "Step 5: Pour the batter into a greased steaming tray.",
    "Step 6: Steam for 15–20 minutes on medium flame.",
    "Step 7: Check with a toothpick — if it comes out clean, it’s done.",
    "Step 8: Let it cool slightly and cut into squares.",
    "Step 9: Heat oil in a small pan, add mustard seeds, curry leaves, and chili.",
    "Step 10: Pour this tempering over the dhokla pieces.",
    "Step 11: Garnish with coriander and serve with green chutney."
  ],
  nutrition: { calories: 220, protein: 6, carbs: 40, fat: 5 }
},
  {
  id: 15,
  name: "Ragi Puttu",
  category: "Breakfast",
  imageName: "ragi_puttu",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Ragi flour - 1 cup",
      "Grated coconut - ½ cup",
      "Salt - ¼ teaspoon",
      "Water - ½ cup (for moistening)"
    ],
    optional: [
      "Sugar - 1 tablespoon",
      "Banana - 1 (for serving)"
    ]
  },
  preparation: [
    "Step 1: Add salt to ragi flour in a mixing bowl.",
    "Step 2: Sprinkle water little by little and mix until flour becomes moist and crumbly.",
    "Step 3: The mixture should hold shape when pressed but crumble easily when released.",
    "Step 4: In a puttu maker, add 2 tablespoons grated coconut at the bottom.",
    "Step 5: Add a layer of the moistened ragi flour.",
    "Step 6: Continue alternating layers of coconut and flour until filled.",
    "Step 7: Close the lid and steam for 10–12 minutes on medium flame.",
    "Step 8: Once done, remove and let it cool for 2 minutes.",
    "Step 9: Gently push the puttu out using a stick.",
    "Step 10: Serve hot with banana, sugar, or curry."
  ],
  nutrition: { calories: 180, protein: 4, carbs: 36, fat: 2 }
},

  // -------------------- Lunch --------------------
{
  id: 16,
  name: "Sambar Rice",
  category: "Lunch",
  imageName: "sambar_rice",
  prepTime: "15 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Rice - 1 cup",
      "Toor dal (split pigeon peas) - ½ cup",
      "Tamarind - small lemon-sized ball (soaked in warm water)",
      "Mixed vegetables (carrot, drumstick, brinjal, beans) - 1 cup (chopped)",
      "Sambar powder - 2 tablespoons",
      "Mustard seeds - ½ teaspoon",
      "Turmeric powder - ¼ teaspoon",
      "Salt - 1½ teaspoons (or to taste)",
      "Oil - 2 tablespoons",
      "Water - 4 cups"
    ],
    optional: [
      "Coriander leaves - 2 tablespoons (chopped)",
      "Curry leaves - 8–10"
    ]
  },
  preparation: [
    "Step 1: Wash rice and dal together, add 4 cups of water, and pressure cook for 3–4 whistles until soft.",
    "Step 2: Mash the cooked rice and dal lightly and set aside.",
    "Step 3: Soak tamarind in warm water for 10 minutes and extract the juice.",
    "Step 4: Heat oil in a deep pan and add mustard seeds; let them splutter.",
    "Step 5: Add curry leaves, chopped vegetables, and turmeric powder; sauté for 2–3 minutes.",
    "Step 6: Add tamarind extract, sambar powder, salt, and bring to a boil.",
    "Step 7: Cook until vegetables are soft and the raw tamarind smell disappears.",
    "Step 8: Add the mashed rice–dal mixture and mix thoroughly.",
    "Step 9: Simmer for 5 minutes on low flame, stirring occasionally.",
    "Step 10: Garnish with chopped coriander and serve hot with papad or pickle."
  ],
  nutrition: { calories: 320, protein: 8, carbs: 60, fat: 5 }
},
{
  id: 17,
  name: "Rasam Rice",
  category: "Lunch",
  imageName: "rasam_rice",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Cooked rice - 2 cups",
      "Tamarind - small lemon-sized ball (soaked)",
      "Tomatoes - 2 (chopped)",
      "Rasam powder - 1 tablespoon",
      "Mustard seeds - ½ teaspoon",
      "Garlic - 4 cloves (crushed)",
      "Curry leaves - 8–10",
      "Salt - 1 teaspoon",
      "Oil or ghee - 1 tablespoon",
      "Water - 3 cups"
    ],
    optional: [
      "Coriander leaves - 2 tablespoons (chopped)",
      "Black pepper powder - ¼ teaspoon"
    ]
  },
  preparation: [
    "Step 1: Soak tamarind in warm water and extract 2 cups of juice.",
    "Step 2: In a pot, add tamarind extract, chopped tomatoes, rasam powder, salt, and water.",
    "Step 3: Bring to a boil and simmer for 10 minutes until tomatoes soften.",
    "Step 4: In a small pan, heat ghee or oil and add mustard seeds.",
    "Step 5: Once they splutter, add crushed garlic and curry leaves.",
    "Step 6: Sauté until aromatic and golden.",
    "Step 7: Pour this tempering into the boiling rasam and stir well.",
    "Step 8: Simmer for 2–3 more minutes and turn off the heat.",
    "Step 9: Mix the rasam with warm cooked rice.",
    "Step 10: Garnish with coriander and serve with papad or poriyal."
  ],
  nutrition: { calories: 280, protein: 6, carbs: 55, fat: 3 }
},

{
  id: 18,
  name: "Curd Rice",
  category: "Lunch",
  imageName: "curd_rice",
  prepTime: "10 mins",
  cookTime: "5 mins",
  ingredients: {
    main: [
      "Cooked rice - 2 cups",
      "Curd (yogurt) - 1 cup",
      "Milk - ¼ cup (optional for creaminess)",
      "Salt - 1 teaspoon",
      "Green chili - 1 (finely chopped)",
      "Ginger - ½ teaspoon (grated)",
      "Mustard seeds - ½ teaspoon",
      "Curry leaves - 6–8",
      "Oil - 1 teaspoon"
    ],
    optional: [
      "Grated carrot - 2 tablespoons",
      "Pomegranate seeds - 2 tablespoons",
      "Coriander leaves - 1 tablespoon (chopped)"
    ]
  },
  preparation: [
    "Step 1: Mash the cooked rice lightly while it’s still warm.",
    "Step 2: Add milk and mix well; this prevents curd from turning sour later.",
    "Step 3: Add curd and salt; combine until smooth and creamy.",
    "Step 4: Heat oil in a small pan and add mustard seeds.",
    "Step 5: Once they pop, add green chili, ginger, and curry leaves.",
    "Step 6: Sauté for a few seconds and pour over the curd rice.",
    "Step 7: Add grated carrots and mix gently.",
    "Step 8: Adjust consistency by adding more curd if needed.",
    "Step 9: Garnish with coriander leaves or pomegranate seeds.",
    "Step 10: Serve chilled or at room temperature with pickle or papad."
  ],
  nutrition: { calories: 200, protein: 5, carbs: 35, fat: 2 }
},

{
  id: 19,
  name: "Lemon Rice",
  category: "Lunch",
  imageName: "lemon_rice",
  prepTime: "10 mins",
  cookTime: "10 mins",
  ingredients: {
    main: [
      "Cooked rice - 2 cups",
      "Lemon juice - 2 tablespoons",
      "Green chili - 2 (slit)",
      "Turmeric powder - ¼ teaspoon",
      "Mustard seeds - ½ teaspoon",
      "Urad dal - 1 teaspoon",
      "Chana dal - 1 teaspoon",
      "Dry red chili - 2",
      "Curry leaves - 8–10",
      "Peanuts - 2 tablespoons",
      "Salt - 1 teaspoon",
      "Oil - 1½ tablespoons"
    ],
    optional: [
      "Coriander leaves - 1 tablespoon (chopped)"
    ]
  },
  preparation: [
    "Step 1: Spread the cooked rice on a plate to cool completely.",
    "Step 2: Heat oil in a pan and add mustard seeds.",
    "Step 3: Once they splutter, add urad dal, chana dal, peanuts, and red chilies.",
    "Step 4: Sauté until golden brown and aromatic.",
    "Step 5: Add curry leaves, green chilies, and turmeric powder.",
    "Step 6: Mix well and turn off the heat.",
    "Step 7: Add salt and lemon juice; stir to combine evenly.",
    "Step 8: Pour this tempering over the cooled rice.",
    "Step 9: Gently mix the rice without mashing the grains.",
    "Step 10: Garnish with coriander and serve with papad or curd."
  ],
  nutrition: { calories: 220, protein: 4, carbs: 40, fat: 3 }
},

{
  id: 20,
  name: "Tamarind Rice",
  category: "Lunch",
  imageName: "tamarind_rice",
  prepTime: "15 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Cooked rice - 2 cups",
      "Tamarind paste - 2 tablespoons",
      "Green chili - 2 (slit)",
      "Mustard seeds - ½ teaspoon",
      "Urad dal - 1 teaspoon",
      "Chana dal - 1 teaspoon",
      "Dry red chili - 2",
      "Curry leaves - 8–10",
      "Asafoetida - ¼ teaspoon",
      "Salt - 1 teaspoon",
      "Oil - 2 tablespoons"
    ],
    optional: [
      "Peanuts - 2 tablespoons (roasted)",
      "Coriander leaves - 1 tablespoon (chopped)"
    ]
  },
  preparation: [
    "Step 1: Heat oil in a pan and add mustard seeds.",
    "Step 2: Once they pop, add urad dal, chana dal, red chilies, and peanuts.",
    "Step 3: Sauté until golden brown.",
    "Step 4: Add curry leaves, green chilies, and asafoetida; stir well.",
    "Step 5: Add tamarind paste and cook for 5–6 minutes on low flame.",
    "Step 6: Add salt and mix until the tamarind thickens slightly.",
    "Step 7: Turn off the heat and let it cool slightly.",
    "Step 8: Mix the prepared tamarind mixture with cooled rice.",
    "Step 9: Toss gently until the rice is evenly coated.",
    "Step 10: Garnish with coriander and serve with papad or curd."
  ],
  nutrition: { calories: 250, protein: 5, carbs: 45, fat: 4 }
},

{
  id: 21,
  name: "Chole Bhature",
  category: "Lunch",
  imageName: "chole_bhature",
  prepTime: "25 mins (plus soaking time)",
  cookTime: "35 mins",
  ingredients: {
    main: [
      "Chickpeas (Kabuli chana) - 1½ cups (soaked overnight)",
      "Onions - 2 medium, finely chopped",
      "Tomatoes - 3 medium, pureed",
      "Ginger-garlic paste - 2 teaspoons",
      "Chole masala - 2 tablespoons",
      "Cumin seeds - 1 teaspoon",
      "Turmeric powder - ½ teaspoon",
      "Red chili powder - 1 teaspoon",
      "Salt - to taste",
      "Oil - 3 tablespoons",
      "Water - as required"
    ],
    optional: [
      "Coriander leaves - 2 tablespoons, chopped (for garnish)",
      "Lemon wedges - to serve"
    ]
  },
  preparation: [
    "Step 1: Soak chickpeas overnight in plenty of water.",
    "Step 2: Pressure cook the soaked chickpeas with salt until soft (around 6–7 whistles).",
    "Step 3: Heat oil in a pan and add cumin seeds. Let them splutter.",
    "Step 4: Add chopped onions and sauté until golden brown.",
    "Step 5: Add ginger-garlic paste and cook until the raw smell disappears.",
    "Step 6: Stir in tomato puree, turmeric, red chili powder, and chole masala. Cook until oil separates.",
    "Step 7: Add the boiled chickpeas along with some water to adjust consistency.",
    "Step 8: Let it simmer for 10–12 minutes on low heat for flavors to blend.",
    "Step 9: Adjust salt and garnish with chopped coriander.",
    "Step 10: Serve hot with freshly fried bhature and lemon wedges."
  ],
  nutrition: { calories: 520, protein: 18, carbs: 65, fat: 18 }
},

{
  id: 22,
  name: "Chapati with Sabzi",
  category: "Lunch",
  imageName: "chapati_sabzi",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Whole wheat flour - 2 cups",
      "Salt - ½ teaspoon",
      "Water - as needed (for dough)",
      "Oil - 1 teaspoon",
      "Mixed vegetables (potato, beans, carrot, peas) - 2 cups, chopped",
      "Onion - 1 large, finely chopped",
      "Tomato - 2 medium, chopped",
      "Turmeric powder - ¼ teaspoon",
      "Red chili powder - ½ teaspoon",
      "Cumin seeds - ½ teaspoon",
      "Mustard seeds - ½ teaspoon"
    ],
    optional: [
      "Coriander leaves - 2 tablespoons, chopped"
    ]
  },
  preparation: [
    "Step 1: Combine wheat flour, salt, and water in a bowl to make a soft dough.",
    "Step 2: Knead for 5 minutes, brush with oil, and rest for 10 minutes.",
    "Step 3: Heat a pan and dry roast rolled-out chapatis on both sides until brown spots appear.",
    "Step 4: Brush with ghee or oil if desired and keep warm.",
    "Step 5: For sabzi, heat oil in a pan and add mustard and cumin seeds.",
    "Step 6: Add chopped onions and sauté until translucent.",
    "Step 7: Add tomatoes and cook until soft and pulpy.",
    "Step 8: Add turmeric, chili powder, salt, and chopped vegetables.",
    "Step 9: Pour a little water, cover, and cook until vegetables are tender.",
    "Step 10: Garnish with coriander leaves and serve with warm chapatis."
  ],
  nutrition: { calories: 350, protein: 10, carbs: 55, fat: 8 }
},

{
  id: 23,
  name: "Tomato Rice",
  category: "Lunch",
  imageName: "tomato_rice",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Cooked rice - 2 cups",
      "Tomatoes - 3 large, finely chopped",
      "Onion - 1 medium, sliced",
      "Green chili - 1, slit",
      "Ginger-garlic paste - 1 teaspoon",
      "Mustard seeds - ½ teaspoon",
      "Cumin seeds - ½ teaspoon",
      "Turmeric powder - ¼ teaspoon",
      "Red chili powder - ½ teaspoon",
      "Salt - to taste",
      "Oil - 2 tablespoons"
    ],
    optional: [
      "Curry leaves - few",
      "Coriander leaves - 1 tablespoon, chopped"
    ]
  },
  preparation: [
    "Step 1: Heat oil in a pan and add mustard and cumin seeds.",
    "Step 2: Once they splutter, add sliced onions and sauté until golden.",
    "Step 3: Add green chili, curry leaves, and ginger-garlic paste; cook until fragrant.",
    "Step 4: Add chopped tomatoes, turmeric, red chili powder, and salt.",
    "Step 5: Cook until tomatoes turn mushy and the oil begins to separate.",
    "Step 6: Add cooked rice to the tomato mixture and gently mix to coat evenly.",
    "Step 7: Cover and let it rest on low flame for 2–3 minutes.",
    "Step 8: Turn off heat and garnish with coriander leaves.",
    "Step 9: Serve hot with papad or raita."
  ],
  nutrition: { calories: 280, protein: 5, carbs: 52, fat: 5 }
},

{
  id: 24,
  name: "Mushroom Pulao",
  category: "Lunch",
  imageName: "mushroom_pulao",
  prepTime: "10 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Basmati rice - 1 cup",
      "Mushrooms - 200 grams, sliced",
      "Onion - 1 large, thinly sliced",
      "Ginger-garlic paste - 1 teaspoon",
      "Green chili - 1, slit",
      "Whole spices (bay leaf, cloves, cinnamon) - 1 each",
      "Turmeric powder - ¼ teaspoon",
      "Salt - to taste",
      "Oil or ghee - 2 tablespoons",
      "Water - 2 cups"
    ],
    optional: [
      "Coriander or mint leaves - 1 tablespoon, chopped",
      "Cashews - 6, roasted"
    ]
  },
  preparation: [
    "Step 1: Wash and soak basmati rice for 15 minutes, then drain.",
    "Step 2: Heat oil or ghee in a pan and add whole spices.",
    "Step 3: Add sliced onions and sauté until golden brown.",
    "Step 4: Add ginger-garlic paste and green chili; cook for a minute.",
    "Step 5: Add sliced mushrooms and sauté until they release water and shrink.",
    "Step 6: Add turmeric powder, salt, and soaked rice; stir gently for a minute.",
    "Step 7: Pour in water and bring to a boil.",
    "Step 8: Cover and cook on low flame for 10–12 minutes until rice is done.",
    "Step 9: Let it rest covered for 5 minutes.",
    "Step 10: Fluff the rice gently and garnish with coriander or roasted cashews."
  ],
  nutrition: { calories: 310, protein: 7, carbs: 55, fat: 6 }
},

{
  id: 25,
  name: "Vegetable Kurma",
  category: "Lunch",
  imageName: "vegetable_kurma",
  prepTime: "15 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Mixed vegetables (carrot, beans, potato, peas) - 2 cups, chopped",
      "Onion - 1 large, finely sliced",
      "Tomato - 2 medium, chopped",
      "Ginger-garlic paste - 1 tablespoon",
      "Coconut - ¼ cup, grated",
      "Cashews - 6",
      "Poppy seeds - 1 teaspoon",
      "Fennel seeds - ½ teaspoon",
      "Coriander powder - 1 teaspoon",
      "Turmeric powder - ¼ teaspoon",
      "Salt - to taste",
      "Oil - 2 tablespoons",
      "Water - 1 cup"
    ],
    optional: [
      "Coriander leaves - 1 tablespoon, chopped"
    ]
  },
  preparation: [
    "Step 1: Boil the chopped vegetables until just tender; drain and keep aside.",
    "Step 2: Grind grated coconut, cashews, poppy seeds, and fennel seeds into a smooth paste using little water.",
    "Step 3: Heat oil in a pan and sauté sliced onions until golden.",
    "Step 4: Add ginger-garlic paste and cook until raw smell goes away.",
    "Step 5: Add chopped tomatoes, turmeric, and coriander powder; cook until tomatoes turn soft.",
    "Step 6: Add boiled vegetables and mix well with the masala base.",
    "Step 7: Pour in the ground coconut-cashew paste and some water for gravy consistency.",
    "Step 8: Simmer on low flame for 10 minutes until flavors combine.",
    "Step 9: Adjust salt and thickness as needed.",
    "Step 10: Garnish with coriander leaves and serve hot with chapati, parotta, or dosa."
  ],
  nutrition: { calories: 320, protein: 8, carbs: 42, fat: 12 }
},

{
  id: 26,
  name: "Dal Tadka",
  category: "Lunch",
  imageName: "dal_tadka",
  prepTime: "10 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Toor Dal - 1 cup",
      "Onion - 1 medium, finely chopped",
      "Tomato - 2 medium, chopped",
      "Turmeric powder - ½ teaspoon",
      "Red chili powder - 1 teaspoon",
      "Salt - to taste",
      "Water - 3 cups",
      "Oil or ghee - 2 tablespoons",
      "Cumin seeds - 1 teaspoon",
      "Asafoetida (hing) - ¼ teaspoon"
    ],
    optional: [
      "Coriander leaves - 1 tablespoon, chopped"
    ]
  },
  preparation: [
    "Step 1: Rinse toor dal thoroughly and soak for 15–20 minutes.",
    "Step 2: Pressure cook dal with water, turmeric, and salt until soft (4–5 whistles).",
    "Step 3: Heat ghee in a pan, add cumin seeds and asafoetida.",
    "Step 4: Add chopped onions and sauté until golden brown.",
    "Step 5: Add chopped tomatoes and cook until soft and mushy.",
    "Step 6: Add red chili powder and mix well.",
    "Step 7: Pour cooked dal into the pan and mix gently.",
    "Step 8: Simmer for 5–7 minutes on low flame for flavors to blend.",
    "Step 9: Adjust consistency by adding water if needed.",
    "Step 10: Garnish with chopped coriander leaves and serve hot with rice or roti."
  ],
  nutrition: { calories: 280, protein: 8, carbs: 45, fat: 6 }
},

{
  id: 27,
  name: "Fish Curry with Rice",
  category: "Lunch",
  imageName: "fish_curry",
  prepTime: "15 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Fish (any firm white fish) - 300 grams, cleaned and cut into pieces",
      "Coconut milk - 1 cup",
      "Onion - 1 medium, chopped",
      "Tomato - 2 medium, chopped",
      "Ginger-garlic paste - 1 teaspoon",
      "Turmeric powder - ½ teaspoon",
      "Red chili powder - 1 teaspoon",
      "Salt - to taste",
      "Oil - 2 tablespoons",
      "Water - 1 cup"
    ],
    optional: [
      "Coriander leaves - 1 tablespoon, chopped",
      "Lemon wedges - for serving"
    ]
  },
  preparation: [
    "Step 1: Wash and pat dry fish pieces; marinate lightly with salt and turmeric.",
    "Step 2: Heat oil in a pan and sauté onions until golden brown.",
    "Step 3: Add ginger-garlic paste and cook for a minute.",
    "Step 4: Add chopped tomatoes, red chili powder, and salt; cook until tomatoes soften.",
    "Step 5: Pour in coconut milk and water, mix well, and bring to a gentle boil.",
    "Step 6: Add marinated fish pieces carefully into the curry.",
    "Step 7: Cover and cook on medium-low flame for 10–12 minutes until fish is done.",
    "Step 8: Check seasoning and adjust salt if necessary.",
    "Step 9: Garnish with chopped coriander leaves.",
    "Step 10: Serve hot with steamed rice and lemon wedges."
  ],
  nutrition: { calories: 400, protein: 22, carbs: 55, fat: 12 }
},

{
  id: 28,
  name: "Paneer Butter Masala with Chapati",
  category: "Lunch",
  imageName: "paneer_butter_masala",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Paneer - 200 grams, cubed",
      "Tomatoes - 3 medium, pureed",
      "Cream - ¼ cup",
      "Onion - 1 medium, finely chopped",
      "Ginger-garlic paste - 1 teaspoon",
      "Turmeric powder - ¼ teaspoon",
      "Red chili powder - 1 teaspoon",
      "Garam masala - ½ teaspoon",
      "Salt - to taste",
      "Oil or butter - 2 tablespoons",
      "Chapati - 4 pieces"
    ],
    optional: [
      "Coriander leaves - 1 tablespoon, chopped"
    ]
  },
  preparation: [
    "Step 1: Heat oil/butter in a pan and sauté chopped onions until golden.",
    "Step 2: Add ginger-garlic paste and cook until raw smell disappears.",
    "Step 3: Pour in tomato puree, turmeric, red chili powder, and salt; cook until oil separates.",
    "Step 4: Add cream and garam masala, stir well.",
    "Step 5: Gently add paneer cubes into the gravy and simmer for 5–7 minutes.",
    "Step 6: Cook chapatis separately on a hot tawa until lightly browned on both sides.",
    "Step 7: Stir the gravy gently and check seasoning.",
    "Step 8: Garnish paneer butter masala with coriander leaves.",
    "Step 9: Serve hot with fresh chapatis.",
    "Step 10: Optional: drizzle a little butter on top before serving for extra richness."
  ],
  nutrition: { calories: 380, protein: 15, carbs: 40, fat: 18 }
},

{
  id: 29,
  name: "Rajma Chawal",
  category: "Lunch",
  imageName: "rajma_chawal",
  prepTime: "20 mins (plus soaking)",
  cookTime: "40 mins",
  ingredients: {
    main: [
      "Kidney beans (rajma) - 1 cup, soaked overnight",
      "Rice - 2 cups, cooked",
      "Onion - 1 large, finely chopped",
      "Tomatoes - 3 medium, pureed",
      "Ginger-garlic paste - 1 tablespoon",
      "Turmeric powder - ½ teaspoon",
      "Red chili powder - 1 teaspoon",
      "Salt - to taste",
      "Oil - 2 tablespoons",
      "Water - as needed"
    ],
    optional: [
      "Coriander leaves - 1 tablespoon, chopped",
      "Cream - 2 tablespoons (for garnish)"
    ]
  },
  preparation: [
    "Step 1: Soak kidney beans overnight and rinse thoroughly.",
    "Step 2: Pressure cook soaked beans with water until soft (5–6 whistles).",
    "Step 3: Heat oil in a pan and sauté onions until golden brown.",
    "Step 4: Add ginger-garlic paste and cook for 1–2 minutes.",
    "Step 5: Add tomato puree, turmeric, red chili powder, and salt; cook until oil separates.",
    "Step 6: Add cooked beans along with cooking water; simmer for 10–15 minutes.",
    "Step 7: Adjust consistency by adding more water if needed.",
    "Step 8: Check seasoning and mix well.",
    "Step 9: Serve hot over steamed rice.",
    "Step 10: Garnish with coriander leaves or a swirl of cream for richness."
  ],
  nutrition: { calories: 450, protein: 18, carbs: 70, fat: 12 }
},

{
  id: 30,
  name: "Baingan Bharta with Roti",
  category: "Lunch",
  imageName: "baingan_bharta",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Eggplant (Brinjal) - 1 large",
      "Onion - 1 medium, chopped",
      "Tomatoes - 2 medium, chopped",
      "Green chili - 1, chopped",
      "Ginger-garlic paste - 1 teaspoon",
      "Turmeric powder - ¼ teaspoon",
      "Red chili powder - ½ teaspoon",
      "Salt - to taste",
      "Oil - 2 tablespoons",
      "Roti - 4 pieces"
    ],
    optional: [
      "Coriander leaves - 1 tablespoon, chopped",
      "Ghee - 1 teaspoon (for finishing)"
    ]
  },
  preparation: [
    "Step 1: Roast eggplant on open flame or in oven until skin chars completely.",
    "Step 2: Peel skin and mash the soft pulp into a bowl.",
    "Step 3: Heat oil in a pan and sauté chopped onions until golden.",
    "Step 4: Add ginger-garlic paste and green chili; cook for 1 minute.",
    "Step 5: Add chopped tomatoes, turmeric, red chili powder, and salt; cook until soft.",
    "Step 6: Add mashed eggplant and mix thoroughly with the masala.",
    "Step 7: Simmer on low heat for 5–7 minutes to blend flavors.",
    "Step 8: Prepare fresh roti on a hot tawa until lightly browned on both sides.",
    "Step 9: Optionally, drizzle ghee on top of the bharta before serving.",
    "Step 10: Garnish with coriander leaves and serve hot with roti."
  ],
  nutrition: { calories: 300, protein: 8, carbs: 40, fat: 10 }
},

// -------------------- Dinner --------------------
{
  id: 31,
  name: "Chapati with Veg Curry",
  category: "Dinner",
  imageName: "chapathi",
  prepTime: "15 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Wheat Flour - 2 cups",
      "Mixed Vegetables (carrot, beans, peas) - 2 cups, chopped",
      "Oil - 2 tablespoons",
      "Salt - to taste",
      "Spices (turmeric, cumin, coriander powder) - 1 teaspoon each"
    ],
    optional: [
      "Ghee - 1 teaspoon",
      "Coriander Leaves - 1 tablespoon, chopped"
    ]
  },
  preparation: [
    "Step 1: Mix wheat flour with water and a pinch of salt to make soft dough.",
    "Step 2: Divide dough into small balls and roll into thin discs.",
    "Step 3: Heat a skillet and cook chapati on both sides until golden spots appear.",
    "Step 4: Heat oil in a pan, add cumin seeds and sauté for 30 seconds.",
    "Step 5: Add chopped vegetables and sauté for 5 minutes.",
    "Step 6: Add turmeric, coriander powder, salt, and a little water; cook until vegetables are tender.",
    "Step 7: Optional: add a teaspoon of ghee for extra flavor.",
    "Step 8: Garnish vegetable curry with chopped coriander leaves.",
    "Step 9: Serve hot chapatis alongside the curry.",
    "Step 10: Enjoy fresh and warm for best taste."
  ],
  nutrition: { calories: 350, protein: 8, carbs: 60, fat: 10 }
},

{
  id: 32,
  name: "Phulka with Dal Fry",
  category: "Dinner",
  imageName: "pulka",
  prepTime: "10 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Wheat Flour - 1.5 cups",
      "Toor Dal - 1 cup",
      "Turmeric Powder - ½ teaspoon",
      "Red Chili Powder - 1 teaspoon",
      "Salt - to taste",
      "Oil - 2 tablespoons"
    ],
    optional: [
      "Ghee - 1 teaspoon",
      "Coriander Leaves - 1 tablespoon, chopped"
    ]
  },
  preparation: [
    "Step 1: Soak toor dal for 20–30 minutes and rinse well.",
    "Step 2: Pressure cook dal with turmeric, salt, and 2 cups water until soft (3–4 whistles).",
    "Step 3: Heat oil in a pan, add cumin seeds and sauté briefly.",
    "Step 4: Add cooked dal and red chili powder; simmer for 5–7 minutes.",
    "Step 5: Adjust consistency with water if needed and check seasoning.",
    "Step 6: Mix ghee for richness if desired.",
    "Step 7: Roll phulka dough into thin discs.",
    "Step 8: Cook phulkas on a hot skillet until puffed and lightly browned.",
    "Step 9: Garnish dal fry with chopped coriander leaves.",
    "Step 10: Serve hot phulkas with dal fry."
  ],
  nutrition: { calories: 300, protein: 7, carbs: 55, fat: 8 }
},

{
  id: 33,
  name: "Parotta with Veg Kurma",
  category: "Dinner",
  imageName: "parotta",
  prepTime: "20 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "All-Purpose Flour - 2 cups",
      "Mixed Vegetables (carrot, beans, peas) - 2 cups, chopped",
      "Coconut Milk - 1 cup",
      "Oil - 2 tablespoons",
      "Spices (turmeric, coriander, cumin) - 1 teaspoon each",
      "Salt - to taste"
    ],
    optional: [
      "Coriander Leaves - 1 tablespoon, chopped"
    ]
  },
  preparation: [
    "Step 1: Mix all-purpose flour with water and a pinch of salt to make soft dough.",
    "Step 2: Divide dough into small balls and roll into thin sheets; fold and layer for flaky parotta.",
    "Step 3: Heat skillet with oil and cook parotta on both sides until golden brown and flaky.",
    "Step 4: Heat oil in a pan, sauté cumin seeds briefly.",
    "Step 5: Add chopped vegetables and sauté for 5 minutes.",
    "Step 6: Add turmeric, coriander powder, salt, and a splash of water; cook until vegetables are tender.",
    "Step 7: Pour in coconut milk and simmer for 5–7 minutes for rich flavor.",
    "Step 8: Optional: garnish veg kurma with coriander leaves.",
    "Step 9: Serve hot parotta with vegetable kurma.",
    "Step 10: Enjoy fresh for best taste."
  ],
  nutrition: { calories: 400, protein: 9, carbs: 65, fat: 15 }
},

{
  id: 34,
  name: "Chicken Curry with Rice",
  category: "Dinner",
  imageName: "chicken_curry",
  prepTime: "20 mins",
  cookTime: "35 mins",
  ingredients: {
    main: [
      "Chicken - 500 grams, cut into pieces",
      "Rice - 2 cups, cooked",
      "Onion - 1 large, chopped",
      "Tomatoes - 2 medium, chopped",
      "Ginger-Garlic Paste - 1 tablespoon",
      "Turmeric Powder - ½ teaspoon",
      "Red Chili Powder - 1 teaspoon",
      "Salt - to taste",
      "Oil - 2 tablespoons"
    ],
    optional: [
      "Coriander Leaves - 1 tablespoon, chopped"
    ]
  },
  preparation: [
    "Step 1: Cook rice separately and keep aside.",
    "Step 2: Heat oil in a pan, add onions and sauté until golden.",
    "Step 3: Add ginger-garlic paste and cook 1 minute.",
    "Step 4: Add chopped tomatoes, turmeric, red chili powder, and salt; cook until soft.",
    "Step 5: Add chicken pieces and mix well.",
    "Step 6: Cover and cook on medium-low heat for 20–25 minutes until chicken is tender.",
    "Step 7: Check seasoning and adjust salt if needed.",
    "Step 8: Garnish with chopped coriander leaves.",
    "Step 9: Serve hot chicken curry alongside steamed rice.",
    "Step 10: Optionally drizzle a little ghee for extra richness."
  ],
  nutrition: { calories: 450, protein: 25, carbs: 55, fat: 12 }
},

{
  id: 35,
  name: "Veg Fried Rice",
  category: "Dinner",
  imageName: "veg_fried_rice",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Cooked Rice - 2 cups",
      "Mixed Vegetables (carrot, beans, peas, capsicum) - 1.5 cups, chopped",
      "Oil - 2 tablespoons",
      "Soy Sauce - 1.5 tablespoons",
      "Salt - to taste"
    ],
    optional: [
      "Spring Onions - 2 tablespoons, chopped",
      "Sesame Oil - ½ teaspoon"
    ]
  },
  preparation: [
    "Step 1: Cook rice, let it cool completely to prevent sticking.",
    "Step 2: Heat oil in a pan and sauté chopped vegetables for 5 minutes.",
    "Step 3: Add cooked rice to the pan and mix well with vegetables.",
    "Step 4: Pour in soy sauce and toss to coat evenly.",
    "Step 5: Add salt and stir-fry for 3–4 minutes on medium heat.",
    "Step 6: Optional: drizzle sesame oil for flavor.",
    "Step 7: Garnish with chopped spring onions.",
    "Step 8: Serve hot immediately.",
    "Step 9: Enjoy with chili sauce or as it is.",
    "Step 10: Ensure rice grains remain separate for best texture."
  ],
  nutrition: { calories: 350, protein: 8, carbs: 60, fat: 8 }
},

{
  id: 36,
  name: "Mutton Korma with Roti",
  category: "Dinner",
  imageName: "mutton_korma_roti",
  prepTime: "25 mins",
  cookTime: "40 mins",
  ingredients: {
    main: [
      "Mutton - 500 grams, cleaned and cut",
      "Onion - 2 large, sliced",
      "Yogurt - ½ cup",
      "Ginger Paste - 1 tablespoon",
      "Garlic Paste - 1 tablespoon",
      "Oil - 2 tablespoons",
      "Spices (turmeric, coriander powder, garam masala) - 1 teaspoon each",
      "Salt - to taste"
    ],
    optional: [
      "Coriander Leaves - 1 tablespoon, chopped",
      "Roti - 4 pieces"
    ]
  },
  preparation: [
    "Step 1: Marinate mutton with yogurt, ginger, garlic, and spices for 15–20 mins.",
    "Step 2: Heat oil in a heavy pan and sauté onions until golden brown.",
    "Step 3: Add marinated mutton and cook on medium heat for 10 minutes.",
    "Step 4: Cover and cook on low heat for 25–30 minutes until tender.",
    "Step 5: Optional: sprinkle chopped coriander leaves for garnish.",
    "Step 6: Prepare roti dough from wheat flour and water, roll into discs.",
    "Step 7: Cook roti on hot skillet until golden brown on both sides.",
    "Step 8: Serve hot mutton korma with fresh roti.",
    "Step 9: Check seasoning and adjust salt if needed.",
    "Step 10: Enjoy hot for maximum flavor."
  ],
  nutrition: { calories: 500, protein: 28, carbs: 50, fat: 18 }
},

{
  id: 37,
  name: "Egg Curry with Rice",
  category: "Dinner",
  imageName: "egg_curry",
  prepTime: "15 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Eggs - 6, boiled and peeled",
      "Rice - 2 cups, cooked",
      "Onion - 1 large, chopped",
      "Tomatoes - 2 medium, chopped",
      "Oil - 2 tablespoons",
      "Spices (turmeric, red chili powder, coriander powder) - 1 teaspoon each",
      "Salt - to taste"
    ],
    optional: [
      "Coriander Leaves - 1 tablespoon, chopped"
    ]
  },
  preparation: [
    "Step 1: Boil eggs and peel carefully.",
    "Step 2: Heat oil in a pan, add onions and sauté until golden.",
    "Step 3: Add chopped tomatoes and cook until soft.",
    "Step 4: Add turmeric, chili powder, coriander powder, and salt; mix well.",
    "Step 5: Gently add boiled eggs and simmer for 5 minutes.",
    "Step 6: Stir occasionally to coat eggs with masala.",
    "Step 7: Garnish with chopped coriander leaves.",
    "Step 8: Serve hot curry alongside steamed rice.",
    "Step 9: Optional: drizzle a little ghee for flavor.",
    "Step 10: Enjoy immediately while hot."
  ],
  nutrition: { calories: 350, protein: 15, carbs: 50, fat: 10 }
},

{
  id: 38,
  name: "Mushroom Curry with Chapati",
  category: "Dinner",
  imageName: "mushroom_curry",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Mushrooms - 300 grams, sliced",
      "Onion - 1 large, chopped",
      "Tomatoes - 2 medium, chopped",
      "Oil - 2 tablespoons",
      "Spices (turmeric, cumin, coriander powder) - 1 teaspoon each",
      "Salt - to taste",
      "Wheat Flour - 1.5 cups for chapati"
    ],
    optional: [
      "Coriander Leaves - 1 tablespoon, chopped",
      "Ghee - 1 teaspoon"
    ]
  },
  preparation: [
    "Step 1: Heat oil in a pan and sauté onions until golden.",
    "Step 2: Add tomatoes and cook until soft.",
    "Step 3: Add turmeric, cumin, coriander powder, and salt; mix well.",
    "Step 4: Add sliced mushrooms and cook for 8–10 minutes until tender.",
    "Step 5: Optional: add a teaspoon of ghee for flavor.",
    "Step 6: Prepare chapati dough from wheat flour and water.",
    "Step 7: Divide dough into small balls and roll into thin discs.",
    "Step 8: Cook chapatis on hot skillet until golden spots appear.",
    "Step 9: Serve mushroom curry with hot chapati.",
    "Step 10: Garnish curry with chopped coriander leaves before serving."
  ],
  nutrition: { calories: 300, protein: 8, carbs: 45, fat: 10 }
},

{
  id: 39,
  name: "Veg Hakka Noodles",
  category: "Dinner",
  imageName: "hakka_noodles",
  prepTime: "15 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Hakka Noodles - 200 grams",
      "Mixed Vegetables (carrot, capsicum, beans) - 1.5 cups, chopped",
      "Oil - 2 tablespoons",
      "Soy Sauce - 2 tablespoons",
      "Salt - to taste",
      "Water - 1 cup"
    ],
    optional: [
      "Spring Onions - 2 tablespoons, chopped",
      "Chili Sauce - 1 tablespoon"
    ]
  },
  preparation: [
    "Step 1: Boil noodles as per packet instructions, drain, and keep aside.",
    "Step 2: Heat oil in a wok and sauté mixed vegetables for 3–4 minutes.",
    "Step 3: Add soy sauce and salt, stir well.",
    "Step 4: Add boiled noodles and toss thoroughly to mix.",
    "Step 5: Optional: add chili sauce for extra spice.",
    "Step 6: Stir-fry everything on high heat for 3–4 minutes.",
    "Step 7: Garnish with chopped spring onions.",
    "Step 8: Check seasoning and adjust soy sauce or salt.",
    "Step 9: Serve hot immediately.",
    "Step 10: Enjoy crispy yet soft veg hakka noodles."
  ],
  nutrition: { calories: 320, protein: 8, carbs: 55, fat: 7 }
},

{
  id: 40,
  name: "Pesarattu",
  category: "Dinner",
  imageName: "pesarattu",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Green Moong Dal - 1 cup, soaked 4 hours",
      "Ginger - 1 inch piece",
      "Green Chili - 2, chopped",
      "Salt - to taste",
      "Oil - 2 tablespoons",
      "Water - as needed for batter"
    ],
    optional: [
      "Onion - 1 small, chopped",
      "Coriander Leaves - 1 tablespoon, chopped"
    ]
  },
  preparation: [
    "Step 1: Drain soaked moong dal and grind with ginger, green chili, and water into smooth batter.",
    "Step 2: Heat a non-stick pan and drizzle a few drops of oil.",
    "Step 3: Pour a ladle of batter to form a thin pancake.",
    "Step 4: Optional: sprinkle chopped onions and coriander on top.",
    "Step 5: Cook on medium heat until bottom is golden brown.",
    "Step 6: Flip and cook the other side for 2–3 minutes.",
    "Step 7: Repeat with remaining batter.",
    "Step 8: Serve hot with chutney or sambar.",
    "Step 9: Ensure crisp edges and soft center for perfect pesarattu.",
    "Step 10: Enjoy as breakfast or dinner."
  ],
  nutrition: { calories: 250, protein: 12, carbs: 35, fat: 8 }
},

{
  id: 41,
  name: "Ragi Dosa",
  category: "Dinner",
  imageName: "ragi_dosa",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Ragi Flour - 1 cup",
      "Rice Flour - ¼ cup",
      "Water - as needed for batter",
      "Salt - ½ teaspoon",
      "Oil - 1 tablespoon"
    ],
    optional: [
      "Coriander Leaves - 1 tablespoon, chopped"
    ]
  },
  preparation: [
    "Step 1: Mix ragi flour, rice flour, salt, and water to form smooth batter.",
    "Step 2: Heat a non-stick pan and grease lightly with oil.",
    "Step 3: Pour a ladle of batter and spread thinly in circular motion.",
    "Step 4: Drizzle a little oil around edges.",
    "Step 5: Cook on medium heat until bottom is crisp and golden.",
    "Step 6: Flip and cook for 1–2 minutes on other side.",
    "Step 7: Repeat for remaining batter.",
    "Step 8: Garnish with chopped coriander if desired.",
    "Step 9: Serve hot with chutney or sambar.",
    "Step 10: Enjoy crispy ragi dosas for a healthy meal."
  ],
  nutrition: { calories: 200, protein: 6, carbs: 35, fat: 5 }
},

{
  id: 42,
  name: "Vegetable Oats Khichdi",
  category: "Dinner",
  imageName: "vegetable_oats_kichdi",
  prepTime: "10 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Oats - 1 cup",
      "Mixed Vegetables (carrot, beans, peas) - 1 cup, chopped",
      "Water - 2 cups",
      "Salt - to taste",
      "Oil - 1 tablespoon"
    ],
    optional: [
      "Ghee - 1 teaspoon",
      "Spices (turmeric, cumin) - ½ teaspoon each"
    ]
  },
  preparation: [
    "Step 1: Roast oats lightly in a pan for 2–3 minutes.",
    "Step 2: Heat oil in a pot and add cumin seeds.",
    "Step 3: Add chopped vegetables and sauté for 3–4 minutes.",
    "Step 4: Add water, turmeric, and salt; bring to a boil.",
    "Step 5: Add roasted oats gradually while stirring.",
    "Step 6: Reduce heat and cook covered for 10–12 minutes until soft.",
    "Step 7: Optional: drizzle ghee before serving.",
    "Step 8: Stir well and check seasoning.",
    "Step 9: Serve hot in bowls.",
    "Step 10: Enjoy healthy and comforting oats khichdi."
  ],
  nutrition: { calories: 250, protein: 8, carbs: 40, fat: 6 }
},

{
  id: 43,
  name: "Tomato Kurma with Idiyappam",
  category: "Dinner",
  imageName: "tomato_kurma",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Tomatoes - 3 medium, chopped",
      "Onion - 1 large, chopped",
      "Coconut Milk - ½ cup",
      "Spices (turmeric, coriander powder, garam masala) - 1 teaspoon each",
      "Oil - 1 tablespoon",
      "Rice Flour - 1 cup for idiyappam",
      "Water - as needed",
      "Salt - to taste"
    ],
    optional: [
      "Coriander Leaves - 1 tablespoon, chopped",
      "Oil - 1 teaspoon for idiyappam"
    ]
  },
  preparation: [
    "Step 1: Heat oil and sauté onions until translucent.",
    "Step 2: Add chopped tomatoes and cook until soft.",
    "Step 3: Add turmeric, coriander powder, garam masala, and salt; cook for 2 minutes.",
    "Step 4: Stir in coconut milk and simmer for 5 minutes.",
    "Step 5: Mix well and adjust consistency.",
    "Step 6: Prepare idiyappam dough with rice flour and water.",
    "Step 7: Press dough into idiyappam mold and steam for 8–10 minutes.",
    "Step 8: Serve hot idiyappam with tomato kurma.",
    "Step 9: Garnish kurma with chopped coriander.",
    "Step 10: Enjoy soft idiyappam with rich tomato kurma."
  ],
  nutrition: { calories: 280, protein: 7, carbs: 50, fat: 8 }
},

{
  id: 44,
  name: "Millet Upma",
  category: "Dinner",
  imageName: "millet_upma",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Millet - 1 cup",
      "Water - 2 cups",
      "Salt - ½ teaspoon",
      "Ghee - 1 teaspoon"
    ],
    optional: [
      "Onion - 1 small, chopped",
      "Green Chili - 1, chopped",
      "Curry Leaves - 6–8 leaves"
    ]
  },
  preparation: [
    "Step 1: Roast millet lightly in a pan for 2 minutes.",
    "Step 2: Heat ghee and sauté onions, green chili, and curry leaves.",
    "Step 3: Boil water in a pot.",
    "Step 4: Gradually add roasted millet while stirring.",
    "Step 5: Reduce heat and cook covered for 10 minutes until fluffy.",
    "Step 6: Stir occasionally to prevent sticking.",
    "Step 7: Check seasoning and add salt if needed.",
    "Step 8: Optional: garnish with coriander leaves.",
    "Step 9: Serve hot for breakfast or dinner.",
    "Step 10: Enjoy nutritious millet upma."
  ],
  nutrition: { calories: 220, protein: 6, carbs: 40, fat: 5 }
},

{
  id: 45,
  name: "Palak Paneer with Naan",
  category: "Dinner",
  imageName: "palak_paneer",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Spinach - 2 cups, blanched",
      "Paneer - 200 grams, cubed",
      "Oil - 2 tablespoons",
      "Spices (cumin, turmeric, garam masala) - 1 teaspoon each",
      "Salt - to taste",
      "Naan Bread - 4 pieces"
    ],
    optional: [
      "Cream - 2 tablespoons",
      "Coriander Leaves - 1 tablespoon, chopped"
    ]
  },
  preparation: [
    "Step 1: Blanch spinach and blend into smooth puree.",
    "Step 2: Heat oil and add cumin seeds.",
    "Step 3: Add spices and sauté for 1 minute.",
    "Step 4: Add paneer cubes and cook lightly.",
    "Step 5: Pour spinach puree and simmer for 5 minutes.",
    "Step 6: Optional: add cream for richness.",
    "Step 7: Cook naan separately as per instructions.",
    "Step 8: Serve hot palak paneer with naan.",
    "Step 9: Garnish with chopped coriander leaves.",
    "Step 10: Enjoy nutritious and creamy palak paneer."
  ],
  nutrition: { calories: 350, protein: 12, carbs: 40, fat: 15 }
},

{
  id: 46,
  name: "Bhindi Masala with Chapati",
  category: "Dinner",
  imageName: "bhindi_masala",
  prepTime: "10 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Bhindi (Okra) - 250 grams, chopped",
      "Onion - 1 medium, sliced",
      "Oil - 2 tablespoons",
      "Spices (turmeric, coriander powder, chili powder) - ½ teaspoon each",
      "Salt - to taste",
      "Wheat Flour - 1 cup (for chapati)"
    ],
    optional: [
      "Coriander Leaves - 1 tablespoon, chopped",
      "Chapati - 4 pieces"
    ]
  },
  preparation: [
    "Step 1: Wash and dry bhindi, then chop into 1-inch pieces.",
    "Step 2: Heat oil and sauté onions until translucent.",
    "Step 3: Add spices and bhindi, cook on medium heat until tender and slightly crisp.",
    "Step 4: Check seasoning and adjust salt.",
    "Step 5: Prepare chapati dough, roll into discs, and cook on a hot skillet until golden.",
    "Step 6: Serve bhindi masala hot with chapati.",
    "Step 7: Garnish with chopped coriander if desired.",
    "Step 8: Enjoy crunchy bhindi with soft chapati.",
    "Step 9: Optional: drizzle little ghee on top.",
    "Step 10: Serve immediately for best taste."
  ],
  nutrition: { calories: 280, protein: 6, carbs: 45, fat: 8 }
},

{
  id: 47,
  name: "Egg Bhurji with Roti",
  category: "Dinner",
  imageName: "egg_bhurji",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Eggs - 4, beaten",
      "Onion - 1 medium, chopped",
      "Tomato - 1 medium, chopped",
      "Oil - 1 tablespoon",
      "Spices (turmeric, chili powder, garam masala) - ½ teaspoon each",
      "Salt - to taste",
      "Wheat Flour - 1 cup (for roti)"
    ],
    optional: [
      "Coriander Leaves - 1 tablespoon, chopped",
      "Roti - 4 pieces"
    ]
  },
  preparation: [
    "Step 1: Heat oil in a pan, sauté onions until translucent.",
    "Step 2: Add tomatoes, spices, and salt; cook until soft.",
    "Step 3: Pour beaten eggs into the pan, stir continuously to scramble.",
    "Step 4: Cook until eggs are fully cooked but still soft.",
    "Step 5: Prepare roti dough and cook on skillet until golden brown.",
    "Step 6: Serve hot egg bhurji with freshly made roti.",
    "Step 7: Garnish bhurji with chopped coriander leaves.",
    "Step 8: Check seasoning before serving.",
    "Step 9: Enjoy fluffy and spicy egg bhurji.",
    "Step 10: Pair with roti for a wholesome meal."
  ],
  nutrition: { calories: 300, protein: 12, carbs: 35, fat: 12 }
},

{
  id: 48,
  name: "Paneer Bhurji with Roti",
  category: "Dinner",
  imageName: "paneer_bhurji",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Paneer - 200 grams, crumbled",
      "Onion - 1 medium, chopped",
      "Tomato - 1 medium, chopped",
      "Oil - 1 tablespoon",
      "Spices (turmeric, chili powder, garam masala) - ½ teaspoon each",
      "Salt - to taste",
      "Wheat Flour - 1 cup (for roti)"
    ],
    optional: [
      "Coriander Leaves - 1 tablespoon, chopped",
      "Roti - 4 pieces"
    ]
  },
  preparation: [
    "Step 1: Heat oil in a pan and sauté onions until soft.",
    "Step 2: Add tomatoes and spices, cook until soft.",
    "Step 3: Add crumbled paneer and mix well with the masala.",
    "Step 4: Cook for 3–4 minutes until paneer absorbs the spices.",
    "Step 5: Prepare roti dough, roll into discs, and cook on skillet.",
    "Step 6: Serve paneer bhurji hot with roti.",
    "Step 7: Garnish with chopped coriander leaves.",
    "Step 8: Check seasoning and adjust salt if needed.",
    "Step 9: Enjoy creamy and flavorful paneer bhurji.",
    "Step 10: Best served immediately."
  ],
  nutrition: { calories: 350, protein: 15, carbs: 35, fat: 15 }
},

{
  id: 49,
  name: "Chicken Stew with Appam",
  category: "Dinner",
  imageName: "chicken_stew",
  prepTime: "20 mins",
  cookTime: "30 mins",
  ingredients: {
    main: [
      "Chicken - 250 grams, cut into pieces",
      "Coconut Milk - 1 cup",
      "Mixed Vegetables (carrot, beans, peas) - 1 cup, chopped",
      "Spices (cinnamon, cloves, cardamom) - ½ teaspoon each",
      "Salt - to taste",
      "Rice Batter - 1 cup (for appam)"
    ],
    optional: [
      "Curry Leaves - 8–10 leaves",
      "Oil - 1 tablespoon"
    ]
  },
  preparation: [
    "Step 1: Heat oil in a pan, add spices and sauté briefly.",
    "Step 2: Add chicken pieces and cook until lightly browned.",
    "Step 3: Add chopped vegetables, salt, and coconut milk; simmer for 20 minutes.",
    "Step 4: Prepare appam batter and pour into appam pan, cook until edges crisp and center soft.",
    "Step 5: Steam appam for 8–10 minutes.",
    "Step 6: Serve hot chicken stew with freshly steamed appam.",
    "Step 7: Garnish stew with curry leaves.",
    "Step 8: Stir gently before serving.",
    "Step 9: Enjoy creamy chicken stew with soft appams.",
    "Step 10: Best served hot."
  ],
  nutrition: { calories: 400, protein: 25, carbs: 50, fat: 15 }
},

{
  id: 50,
  name: "Fish Fry with Rice",
  category: "Dinner",
  imageName: "fish_fry",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Fish - 250 grams, cleaned and cut",
      "Rice - 1 cup, cooked",
      "Spices (turmeric, chili powder, coriander powder) - ½ teaspoon each",
      "Oil - 2 tablespoons",
      "Salt - to taste"
    ],
    optional: [
      "Coriander Leaves - 1 tablespoon, chopped",
      "Lemon - 1, sliced"
    ]
  },
  preparation: [
    "Step 1: Marinate fish with spices and salt for 10–15 minutes.",
    "Step 2: Heat oil in a pan and shallow fry fish until golden and crisp on both sides.",
    "Step 3: Cook rice separately and keep hot.",
    "Step 4: Serve fish fry alongside steamed rice.",
    "Step 5: Garnish with chopped coriander leaves and lemon slices.",
    "Step 6: Adjust seasoning if needed.",
    "Step 7: Serve immediately for best taste.",
    "Step 8: Enjoy crispy and flavorful fish fry.",
    "Step 9: Optional: drizzle some lemon juice on fish before eating.",
    "Step 10: Pair with rice for a complete meal."
  ],
  nutrition: { calories: 400, protein: 28, carbs: 50, fat: 12 }
},

// -------------------- Snacks --------------------
{
  id: 51,
  name: "Samosa",
  category: "Snacks",
  imageName: "samosa",
  prepTime: "20 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Wheat Flour - 1 cup",
      "Potatoes - 2 medium, boiled and mashed",
      "Green Peas - ½ cup",
      "Oil - 2 tablespoons (for dough and frying)",
      "Spices (cumin, coriander, chili powder) - ½ teaspoon each",
      "Salt - to taste"
    ],
    optional: [
      "Coriander Leaves - 1 tablespoon, chopped",
      "Green Chili - 1, finely chopped"
    ]
  },
  preparation: [
    "Step 1: Prepare dough from wheat flour, water, and a pinch of salt; knead until smooth.",
    "Step 2: Prepare potato-pea filling with spices, salt, and optional green chili/coriander.",
    "Step 3: Divide dough into small balls, roll into circles, stuff with filling, and fold into triangles.",
    "Step 4: Heat oil and deep fry samosas until golden brown and crisp.",
    "Step 5: Drain excess oil and serve hot with chutney.",
    "Step 6: Optional: garnish with coriander leaves before serving.",
    "Step 7: Ensure oil is hot enough for even frying.",
    "Step 8: Let samosas cool slightly before serving to retain shape.",
    "Step 9: Serve immediately for best taste.",
    "Step 10: Enjoy crispy, spicy samosas."
  ],
  nutrition: { calories: 150, protein: 3, carbs: 20, fat: 7 }
},

{
  id: 52,
  name: "Medu Vada",
  category: "Snacks",
  imageName: "medu_vada",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Urad Dal - 1 cup, soaked 4-5 hours",
      "Salt - to taste",
      "Oil - 2 cups (for deep frying)"
    ],
    optional: [
      "Green Chili - 1, chopped",
      "Curry Leaves - 8-10 leaves, chopped"
    ]
  },
  preparation: [
    "Step 1: Drain soaked urad dal and grind to smooth batter.",
    "Step 2: Mix in salt, chopped green chili, and curry leaves.",
    "Step 3: Heat oil in deep frying pan.",
    "Step 4: Shape batter into doughnut forms and carefully drop into hot oil.",
    "Step 5: Fry until crispy and golden on both sides.",
    "Step 6: Drain excess oil on paper towels.",
    "Step 7: Serve hot with coconut chutney or sambar.",
    "Step 8: Ensure oil is medium-hot to avoid undercooked centers.",
    "Step 9: Use wet hands to shape vadas to prevent sticking.",
    "Step 10: Enjoy soft inside and crispy outside medu vadas."
  ],
  nutrition: { calories: 120, protein: 4, carbs: 15, fat: 5 }
},

{
  id: 53,
  name: "Bonda",
  category: "Snacks",
  imageName: "bonda",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Potatoes - 2 medium, boiled and mashed",
      "Gram Flour - ½ cup",
      "Spices (turmeric, chili, coriander powder) - ½ teaspoon each",
      "Salt - to taste",
      "Oil - 2 cups (for deep frying)"
    ],
    optional: [
      "Curry Leaves - 8 leaves, chopped",
      "Green Chili - 1, chopped"
    ]
  },
  preparation: [
    "Step 1: Boil and mash potatoes until smooth.",
    "Step 2: Mix mashed potatoes with spices, salt, curry leaves, and green chili.",
    "Step 3: Shape mixture into small balls.",
    "Step 4: Prepare gram flour batter with a pinch of salt and water.",
    "Step 5: Dip each potato ball into gram flour batter.",
    "Step 6: Deep fry in hot oil until golden and crisp.",
    "Step 7: Drain excess oil and serve hot.",
    "Step 8: Serve with chutney or sauce.",
    "Step 9: Ensure batter coating is even for uniform frying.",
    "Step 10: Enjoy crispy exterior with soft potato filling."
  ],
  nutrition: { calories: 150, protein: 3, carbs: 25, fat: 6 }
},

{
  id: 54,
  name: "Onion Bajji",
  category: "Snacks",
  imageName: "onion_bajji",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Onion - 2 medium, thinly sliced",
      "Gram Flour - ½ cup",
      "Spices (chili, turmeric, salt) - ½ teaspoon each",
      "Oil - 2 cups (for deep frying)"
    ],
    optional: [
      "Chili Powder - ¼ teaspoon",
      "Curry Leaves - 8 leaves, chopped"
    ]
  },
  preparation: [
    "Step 1: Slice onions thinly and keep aside.",
    "Step 2: Prepare gram flour batter with spices, salt, and water to medium consistency.",
    "Step 3: Coat onion slices in batter.",
    "Step 4: Heat oil and deep fry coated onions until golden brown.",
    "Step 5: Drain excess oil on paper towels.",
    "Step 6: Serve hot with chutney or ketchup.",
    "Step 7: Ensure oil is hot but not smoking for even frying.",
    "Step 8: Batter should coat onions evenly without dripping.",
    "Step 9: Serve immediately for crispiness.",
    "Step 10: Enjoy crunchy and spicy onion bajjis."
  ],
  nutrition: { calories: 130, protein: 3, carbs: 18, fat: 5 }
},

{
  id: 55,
  name: "Cutlet",
  category: "Snacks",
  imageName: "cutlets",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Potatoes - 2 medium, boiled and mashed",
      "Bread Crumbs - ½ cup",
      "Spices (chili, pepper, salt) - ½ teaspoon each",
      "Oil - 2 tablespoons (for shallow frying)"
    ],
    optional: [
      "Green Peas - ¼ cup, boiled",
      "Carrots - ½ cup, grated"
    ]
  },
  preparation: [
    "Step 1: Boil and mash potatoes until smooth.",
    "Step 2: Mix in vegetables, spices, and salt.",
    "Step 3: Shape mixture into small patties.",
    "Step 4: Coat patties with bread crumbs.",
    "Step 5: Heat oil in shallow pan and fry patties until golden brown.",
    "Step 6: Drain excess oil.",
    "Step 7: Serve hot with sauce or chutney.",
    "Step 8: Ensure even coating of bread crumbs for crispy texture.",
    "Step 9: Fry on medium heat for perfect cook inside and outside.",
    "Step 10: Enjoy crispy, soft inside cutlets."
  ],
  nutrition: { calories: 150, protein: 4, carbs: 20, fat: 6 }
},

{
  id: 56,
  name: "Masala Vada",
  category: "Snacks",
  imageName: "masala_vada",
  prepTime: "15 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Chana Dal - 1 cup, soaked 2-3 hours",
      "Onion - 1 medium, finely chopped",
      "Spices (cumin, chili, salt) - ½ teaspoon each",
      "Oil - 2 cups (for deep frying)"
    ],
    optional: [
      "Curry Leaves - 8-10 leaves, chopped",
      "Green Chili - 1, finely chopped"
    ]
  },
  preparation: [
    "Step 1: Drain soaked chana dal and grind coarsely.",
    "Step 2: Mix with chopped onions, spices, curry leaves, and green chili.",
    "Step 3: Heat oil in a deep pan.",
    "Step 4: Shape mixture into small patties and deep fry until golden and crisp.",
    "Step 5: Drain excess oil and serve hot.",
    "Step 6: Serve with coconut chutney or sauce.",
    "Step 7: Ensure oil is hot for even cooking.",
    "Step 8: Shape vadas evenly for uniform frying.",
    "Step 9: Enjoy crispy outside and soft inside.",
    "Step 10: Serve immediately for best taste."
  ],
  nutrition: { calories: 140, protein: 5, carbs: 18, fat: 6 }
},

{
  id: 57,
  name: "Corn Chaat",
  category: "Snacks",
  imageName: "corn_chaat",
  prepTime: "10 mins",
  cookTime: "5 mins",
  ingredients: {
    main: [
      "Boiled Corn - 1 cup",
      "Onion - ½ cup, finely chopped",
      "Tomato - ½ cup, finely chopped",
      "Spices (chili powder, salt) - ¼ teaspoon each",
      "Lemon Juice - 1 tablespoon"
    ],
    optional: [
      "Coriander Leaves - 1 tablespoon, chopped",
      "Chili Powder - ¼ teaspoon extra (optional)"
    ]
  },
  preparation: [
    "Step 1: Boil corn kernels and keep aside.",
    "Step 2: Mix onions, tomatoes, spices, and lemon juice in a bowl.",
    "Step 3: Add boiled corn and toss well to combine.",
    "Step 4: Garnish with coriander leaves.",
    "Step 5: Serve chilled or at room temperature.",
    "Step 6: Adjust lemon juice and salt to taste.",
    "Step 7: Can add chaat masala for extra flavor.",
    "Step 8: Mix gently to avoid crushing corn.",
    "Step 9: Serve immediately for fresh taste.",
    "Step 10: Enjoy tangy and spicy corn chaat."
  ],
  nutrition: { calories: 100, protein: 3, carbs: 20, fat: 1 }
},

{
  id: 58,
  name: "Vegetable Puff",
  category: "Snacks",
  imageName: "vegetable_puffs",
  prepTime: "20 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Puff Pastry - 4 sheets",
      "Mixed Vegetables (carrot, beans, peas) - 1 cup",
      "Spices (salt, pepper, turmeric) - ½ teaspoon each",
      "Oil - 2 tablespoons"
    ],
    optional: [
      "Cheese - ½ cup, grated",
      "Coriander Leaves - 1 tablespoon, chopped"
    ]
  },
  preparation: [
    "Step 1: Heat oil and sauté vegetables with spices until slightly tender.",
    "Step 2: Preheat oven to 200°C (390°F).",
    "Step 3: Roll puff pastry sheets and cut into squares.",
    "Step 4: Place vegetable filling on pastry squares.",
    "Step 5: Fold edges to seal and brush with egg wash or milk.",
    "Step 6: Bake for 20-25 mins until golden brown.",
    "Step 7: Remove and cool for 5 mins before serving.",
    "Step 8: Garnish with coriander leaves if desired.",
    "Step 9: Serve hot as snacks or tea-time treat.",
    "Step 10: Enjoy crispy outside with soft vegetable filling."
  ],
  nutrition: { calories: 200, protein: 5, carbs: 25, fat: 10 }
},

{
  id: 59,
  name: "Cheese Balls",
  category: "Snacks",
  imageName: "cheese_balls",
  prepTime: "15 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Cheese - ½ cup, grated",
      "Potatoes - 2 medium, boiled and mashed",
      "Bread Crumbs - ½ cup",
      "Spices (salt, pepper, chili) - ¼ teaspoon each",
      "Oil - 2 cups (for deep frying)"
    ],
    optional: [
      "Corn - ¼ cup, boiled",
      "Carrots - ¼ cup, grated"
    ]
  },
  preparation: [
    "Step 1: Boil and mash potatoes until smooth.",
    "Step 2: Mix mashed potatoes with cheese, corn, carrots, and spices.",
    "Step 3: Shape mixture into small balls.",
    "Step 4: Coat balls with bread crumbs evenly.",
    "Step 5: Heat oil and deep fry balls until golden brown.",
    "Step 6: Drain excess oil on paper towels.",
    "Step 7: Serve hot with ketchup or sauce.",
    "Step 8: Ensure oil is medium-hot to cook evenly inside and out.",
    "Step 9: Keep balls small for quick frying.",
    "Step 10: Enjoy gooey cheesy center with crispy outside."
  ],
  nutrition: { calories: 180, protein: 6, carbs: 20, fat: 10 }
},

{
  id: 60,
  name: "Peanut Sundal",
  category: "Snacks",
  imageName: "peanut_sundal",
  prepTime: "5 mins",
  cookTime: "10 mins",
  ingredients: {
    main: [
      "Boiled Peanuts - 1 cup",
      "Oil - 1 tablespoon",
      "Salt - ½ teaspoon",
      "Curry Leaves - 8 leaves"
    ],
    optional: [
      "Grated Coconut - 2 tablespoons",
      "Green Chili - 1, chopped"
    ]
  },
  preparation: [
    "Step 1: Heat oil in a pan.",
    "Step 2: Add curry leaves and green chili and sauté for 1 minute.",
    "Step 3: Add boiled peanuts and sauté for 2-3 mins.",
    "Step 4: Add grated coconut and salt, mix well.",
    "Step 5: Cook for another 2 mins to blend flavors.",
    "Step 6: Serve warm or at room temperature.",
    "Step 7: Ensure peanuts are tender before starting.",
    "Step 8: Adjust salt and chili as per taste.",
    "Step 9: Serve immediately for best flavor.",
    "Step 10: Enjoy crunchy and aromatic sundal."
  ],
  nutrition: { calories: 120, protein: 6, carbs: 10, fat: 6 }
},

{
  id: 61,
  name: "Ragi Murukku",
  category: "Snacks",
  imageName: "ragi_murukku",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Ragi Flour - 1 cup",
      "Rice Flour - ¼ cup",
      "Butter - 2 tablespoons",
      "Water - ½ cup (adjust consistency)",
      "Salt - ½ teaspoon"
    ],
    optional: [
      "Sesame Seeds - 1 teaspoon",
      "Chili Powder - ¼ teaspoon"
    ]
  },
  preparation: [
    "Step 1: Mix ragi flour, rice flour, butter, salt, and optional spices.",
    "Step 2: Gradually add water to form smooth dough.",
    "Step 3: Fill dough in murukku press and shape onto parchment paper or greased surface.",
    "Step 4: Heat oil in a deep pan.",
    "Step 5: Deep fry murukku until crisp and golden brown.",
    "Step 6: Drain excess oil.",
    "Step 7: Cool completely before storing in airtight container.",
    "Step 8: Serve as tea-time snack or evening munchies.",
    "Step 9: Ensure dough consistency is correct for easy pressing.",
    "Step 10: Enjoy crunchy and healthy ragi murukku."
  ],
  nutrition: { calories: 140, protein: 3, carbs: 20, fat: 5 }
},

{
  id: 62,
  name: "Sabudana Vada",
  category: "Snacks",
  imageName: "sabudana_vada",
  prepTime: "20 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Sabudana - 1 cup, soaked 2-3 hours",
      "Potatoes - 2 medium, boiled and mashed",
      "Peanuts - ¼ cup, roasted and crushed",
      "Spices (salt, chili, cumin) - ¼ teaspoon each",
      "Oil - 2 cups (for deep frying)"
    ],
    optional: ["Green Chili - 1, chopped", "Coriander Leaves - 1 tablespoon"]
  },
  preparation: [
    "Step 1: Drain soaked sabudana and mix with mashed potatoes.",
    "Step 2: Add roasted peanuts, chopped green chili, coriander, and spices.",
    "Step 3: Form small patties using hands.",
    "Step 4: Heat oil in a deep pan and fry patties until golden and crisp.",
    "Step 5: Drain excess oil.",
    "Step 6: Serve hot with chutney.",
    "Step 7: Ensure patties are firm to prevent breaking during frying.",
    "Step 8: Fry on medium heat for even cooking.",
    "Step 9: Serve immediately for best taste.",
    "Step 10: Enjoy soft inside with crunchy exterior."
  ],
  nutrition: { calories: 150, protein: 4, carbs: 25, fat: 5 }
},

{
  id: 63,
  name: "Sweet Potato Chips",
  category: "Snacks",
  imageName: "sweet_potato_chips",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Sweet Potato - 2 medium, thinly sliced",
      "Oil - 2 cups (for frying)",
      "Salt - ½ teaspoon"
    ],
    optional: [
      "Chili Powder - ¼ teaspoon",
      "Black Pepper - ¼ teaspoon"
    ]
  },
  preparation: [
    "Step 1: Wash and peel sweet potatoes, slice thinly.",
    "Step 2: Heat oil in a pan on medium flame.",
    "Step 3: Fry sweet potato slices until crisp and golden brown.",
    "Step 4: Remove and drain excess oil on paper towels.",
    "Step 5: Sprinkle salt, chili powder, and black pepper while hot.",
    "Step 6: Let chips cool slightly.",
    "Step 7: Serve immediately or store in airtight container.",
    "Step 8: Ensure oil is hot enough for crisp frying.",
    "Step 9: Do not overcrowd the pan to avoid soggy chips.",
    "Step 10: Enjoy crunchy and spicy sweet potato chips."
  ],
  nutrition: { calories: 120, protein: 2, carbs: 20, fat: 4 }
},

{
  id: 64,
  name: "Masala Papad",
  category: "Snacks",
  imageName: "masala_papad",
  prepTime: "5 mins",
  cookTime: "5 mins",
  ingredients: {
    main: [
      "Papad - 2 pieces",
      "Onion - 1 small, finely chopped",
      "Tomato - 1 small, finely chopped",
      "Spices (salt, chili, cumin) - ¼ teaspoon each",
      "Oil - 1 teaspoon"
    ],
    optional: [
      "Coriander Leaves - 1 tablespoon",
      "Lemon Juice - ½ teaspoon"
    ]
  },
  preparation: [
    "Step 1: Roast or fry papad until crisp.",
    "Step 2: In a bowl, mix onion, tomato, spices, coriander, and lemon juice.",
    "Step 3: Spread topping evenly over papad.",
    "Step 4: Serve immediately to retain crispiness.",
    "Step 5: Garnish with extra coriander if desired.",
    "Step 6: Enjoy as a crunchy appetizer or snack.",
    "Step 7: Avoid topping too thick to prevent sogginess.",
    "Step 8: Serve fresh for best taste.",
    "Step 9: Pair with tea or chutney if desired.",
    "Step 10: Repeat with remaining papads."
  ],
  nutrition: { calories: 80, protein: 2, carbs: 10, fat: 3 }
},

{
  id: 65,
  name: "Bread Pakora",
  category: "Snacks",
  imageName: "bread_pakora",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Bread Slices - 4",
      "Potatoes - 2 medium, boiled and mashed",
      "Gram Flour - ½ cup",
      "Spices (salt, chili, turmeric) - ¼ teaspoon each",
      "Oil - 2 cups (for deep frying)"
    ],
    optional: [
      "Green Chili - 1, chopped",
      "Coriander Leaves - 1 tablespoon"
    ]
  },
  preparation: [
    "Step 1: Boil and mash potatoes.",
    "Step 2: Mix mashed potatoes with spices, chili, and coriander.",
    "Step 3: Spread potato mixture on one bread slice, cover with another slice.",
    "Step 4: Prepare gram flour batter with water and salt.",
    "Step 5: Dip sandwich in batter and coat evenly.",
    "Step 6: Heat oil and deep fry until golden brown.",
    "Step 7: Drain excess oil and serve hot.",
    "Step 8: Enjoy crispy outside with soft potato filling.",
    "Step 9: Adjust frying temperature for even cooking.",
    "Step 10: Serve with chutney or ketchup."
  ],
  nutrition: { calories: 180, protein: 4, carbs: 25, fat: 8 }
},

{
  id: 66,
  name: "Veg Spring Rolls",
  category: "Snacks",
  imageName: "veg_spring_rolls",
  prepTime: "15 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Spring Roll Wrappers - 6",
      "Mixed Vegetables (carrot, beans, cabbage) - 1 cup, chopped",
      "Soy Sauce - 1 tablespoon",
      "Oil - 2 tablespoons"
    ],
    optional: [
      "Garlic - 1 clove, minced",
      "Ginger - ½ teaspoon, minced",
      "Chili Sauce - 1 teaspoon"
    ]
  },
  preparation: [
    "Step 1: Heat oil and sauté vegetables with garlic, ginger, and soy sauce.",
    "Step 2: Let filling cool for 5 mins.",
    "Step 3: Place filling on wrapper and roll tightly.",
    "Step 4: Seal edges with water or flour paste.",
    "Step 5: Heat oil and deep fry rolls until golden brown.",
    "Step 6: Drain excess oil.",
    "Step 7: Serve hot with chili sauce or ketchup.",
    "Step 8: Avoid overfilling to prevent breaking during frying.",
    "Step 9: Fry in batches for even cooking.",
    "Step 10: Enjoy crunchy rolls with savory filling."
  ],
  nutrition: { calories: 150, protein: 4, carbs: 20, fat: 6 }
},

{
  id: 67,
  name: "Mini Sandwiches",
  category: "Snacks",
  imageName: "mini_sandwiches",
  prepTime: "10 mins",
  cookTime: "5 mins",
  ingredients: {
    main: [
      "Bread Slices - 8",
      "Cheese - 4 slices",
      "Vegetables (cucumber, tomato, carrot) - ½ cup, chopped",
      "Butter - 2 tablespoons"
    ],
    optional: [
      "Mayonnaise - 1 tablespoon",
      "Tomato Ketchup - 1 teaspoon"
    ]
  },
  preparation: [
    "Step 1: Spread butter on bread slices.",
    "Step 2: Layer cheese and vegetables on bread.",
    "Step 3: Add mayonnaise or ketchup if desired.",
    "Step 4: Cover with another slice of bread.",
    "Step 5: Cut into small squares or triangles.",
    "Step 6: Lightly toast in a pan or serve fresh.",
    "Step 7: Serve immediately to retain crispness.",
    "Step 8: Can refrigerate for 10 mins before serving.",
    "Step 9: Use fresh vegetables for best taste.",
    "Step 10: Enjoy as tea-time snack or party appetizer."
  ],
  nutrition: { calories: 120, protein: 5, carbs: 18, fat: 6 }
},

{
  id: 68,
  name: "Paneer Pakora",
  category: "Snacks",
  imageName: "paneer_pakora",
  prepTime: "10 mins",
  cookTime: "10 mins",
  ingredients: {
    main: [
      "Paneer - 200g, cut into cubes",
      "Gram Flour - ½ cup",
      "Spices (salt, chili, turmeric) - ¼ teaspoon each",
      "Oil - 2 cups (for deep frying)"
    ],
    optional: [
      "Chili Powder - ¼ teaspoon",
      "Coriander Leaves - 1 tablespoon, chopped"
    ]
  },
  preparation: [
    "Step 1: Cut paneer into cubes.",
    "Step 2: Prepare gram flour batter with water, salt, and spices.",
    "Step 3: Dip paneer cubes into batter, coating evenly.",
    "Step 4: Heat oil and deep fry pakoras until golden brown.",
    "Step 5: Drain excess oil on paper towels.",
    "Step 6: Serve hot with green chutney or ketchup.",
    "Step 7: Fry in batches to avoid overcrowding.",
    "Step 8: Ensure oil is medium-hot for even cooking.",
    "Step 9: Garnish with coriander leaves.",
    "Step 10: Enjoy soft paneer inside with crispy coating."
  ],
  nutrition: { calories: 160, protein: 7, carbs: 10, fat: 8 }
},

{
  id: 69,
  name: "Masala Corn",
  category: "Snacks",
  imageName: "masala_corn",
  prepTime: "5 mins",
  cookTime: "5 mins",
  ingredients: {
    main: [
      "Boiled Corn - 1 cup",
      "Butter - 1 tablespoon",
      "Spices (salt, chili powder) - ¼ teaspoon each"
    ],
    optional: [
      "Lemon Juice - ½ teaspoon"
    ]
  },
  preparation: [
    "Step 1: Heat butter in a pan.",
    "Step 2: Add boiled corn and sauté for 2-3 mins.",
    "Step 3: Add salt, chili powder, and lemon juice.",
    "Step 4: Mix well and cook for 1-2 mins.",
    "Step 5: Serve warm.",
    "Step 6: Adjust spices as per taste.",
    "Step 7: Can garnish with chopped coriander.",
    "Step 8: Serve immediately for best flavor.",
    "Step 9: Keep corn slightly crunchy, not mushy.",
    "Step 10: Enjoy spicy and buttery corn snack."
  ],
  nutrition: { calories: 100, protein: 3, carbs: 20, fat: 2 }
},

{
  id: 70,
  name: "Chakli",
  category: "Snacks",
  imageName: "chakli",
  prepTime: "20 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Rice Flour - 1 cup",
      "Gram Flour - ¼ cup",
      "Butter - 2 tablespoons",
      "Spices (salt, chili, carom seeds) - ¼ teaspoon each",
      "Oil - 2 cups (for deep frying)"
    ],
    optional: [
      "Sesame Seeds - 1 teaspoon",
      "Carom Seeds - ½ teaspoon"
    ]
  },
  preparation: [
    "Step 1: Mix rice flour, gram flour, butter, and spices to form dough.",
    "Step 2: Fill dough into chakli mold.",
    "Step 3: Shape spirals onto parchment or greased surface.",
    "Step 4: Heat oil in a deep pan.",
    "Step 5: Deep fry chakli until golden brown and crisp.",
    "Step 6: Drain excess oil on paper towels.",
    "Step 7: Cool completely before storing in airtight container.",
    "Step 8: Serve as tea-time snack or festival treat.",
    "Step 9: Ensure dough consistency is firm for easy shaping.",
    "Step 10: Enjoy crunchy, savory chakli."
  ],
  nutrition: { calories: 140, protein: 3, carbs: 20, fat: 6 }
},

// -------------------- Street Food --------------------
  {
    id: 71,
    name: "Vada Pav",
    category: "Street Food",
    imageName: "vada_pav",
    prepTime: "15 mins",
    cookTime: "20 mins",
    ingredients: {
      main: [
        "Potatoes - 3 medium, boiled and mashed",
        "Chickpea Flour - 1 cup",
        "Turmeric Powder - ½ tsp",
        "Red Chili Powder - ½ tsp",
        "Salt - 1 tsp",
        "Baking Soda - a pinch",
        "Oil - 1 cup (for deep frying)",
        "Bread Pav - 4 pieces"
      ],
      optional: [
        "Green Chutney - 2 tbsp",
        "Tamarind Chutney - 2 tbsp",
        "Fried Green Chili - 2-3 pieces"
      ]
    },
    preparation: [
      "Step 1: Boil potatoes until soft and peel them.",
      "Step 2: Mash the boiled potatoes in a bowl.",
      "Step 3: Add turmeric powder, red chili powder, and salt. Mix well.",
      "Step 4: Shape potato mixture into medium-sized balls.",
      "Step 5: Prepare chickpea flour batter with water and a pinch of baking soda.",
      "Step 6: Heat oil in a deep pan for frying.",
      "Step 7: Dip each potato ball into chickpea flour batter.",
      "Step 8: Carefully drop balls into hot oil and fry until golden brown.",
      "Step 9: Slice pav horizontally and apply green and tamarind chutney.",
      "Step 10: Place fried vada in the pav and serve immediately."
    ],
    nutrition: { calories: 250, protein: 6, carbs: 35, fat: 10 }
  },
  {
    id: 72,
    name: "Misal Pav",
    category: "Street Food",
    imageName: "misal_pav",
    prepTime: "20 mins",
    cookTime: "30 mins",
    ingredients: {
      main: [
        "Sprouted Moong Beans - 1 cup",
        "Onion - 1 large, chopped",
        "Tomato - 1 large, chopped",
        "Ginger-Garlic Paste - 1 tsp",
        "Red Chili Powder - 1 tsp",
        "Coriander Powder - 1 tsp",
        "Turmeric Powder - ½ tsp",
        "Salt - to taste",
        "Pav Bread - 4 pieces"
      ],
      optional: [
        "Sev - ¼ cup",
        "Coriander Leaves - 2 tbsp",
        "Lemon Wedges - 2"
      ]
    },
    preparation: [
      "Step 1: Wash and soak sprouted moong beans for 30 minutes.",
      "Step 2: Boil moong beans until tender.",
      "Step 3: Heat oil in a pan and sauté onions until golden.",
      "Step 4: Add ginger-garlic paste and sauté for 1 minute.",
      "Step 5: Add chopped tomatoes and cook until soft.",
      "Step 6: Add turmeric, red chili, coriander powder, and salt. Mix well.",
      "Step 7: Add boiled moong beans to the curry and simmer for 10 minutes.",
      "Step 8: Adjust consistency with water if needed.",
      "Step 9: Toast pav lightly on a pan.",
      "Step 10: Serve curry hot with pav and top with sev, coriander leaves, and lemon."
    ],
    nutrition: { calories: 300, protein: 12, carbs: 45, fat: 8 }
  },
  {
    id: 73,
    name: "Chole Bhature",
    category: "Street Food",
    imageName: "chole_bhature",
    prepTime: "15 mins",
    cookTime: "25 mins",
    ingredients: {
      main: [
        "Chickpeas - 1 cup, soaked overnight",
        "Onion - 1 medium, finely chopped",
        "Tomato - 1 medium, chopped",
        "Ginger-Garlic Paste - 1 tsp",
        "Cumin Seeds - ½ tsp",
        "Turmeric Powder - ½ tsp",
        "Red Chili Powder - 1 tsp",
        "Salt - to taste",
        "Kulcha/Bhature Bread - 4 pieces"
      ],
      optional: [
        "Coriander Leaves - 2 tbsp",
        "Butter - 1 tbsp"
      ]
    },
    preparation: [
      "Step 1: Soak chickpeas overnight and rinse well.",
      "Step 2: Boil chickpeas until soft and drain.",
      "Step 3: Heat oil in a pan and add cumin seeds.",
      "Step 4: Add onions and sauté until golden brown.",
      "Step 5: Add ginger-garlic paste and sauté for a minute.",
      "Step 6: Add chopped tomatoes and cook until soft.",
      "Step 7: Add turmeric, red chili powder, and salt. Mix well.",
      "Step 8: Add boiled chickpeas and simmer for 10 minutes.",
      "Step 9: Garnish with coriander leaves and butter.",
      "Step 10: Toast kulcha or bhature and serve hot with chole."
    ],
    nutrition: { calories: 320, protein: 14, carbs: 50, fat: 10 }
  },
  {
    id: 74,
    name: "Aloo Tikki Chaat",
    category: "Street Food",
    imageName: "aloo_tikki_chaat",
    prepTime: "20 mins",
    cookTime: "20 mins",
    ingredients: {
      main: [
        "Potatoes - 4 medium, boiled and mashed",
        "Chickpea Flour - ½ cup",
        "Cumin Powder - ½ tsp",
        "Red Chili Powder - ½ tsp",
        "Salt - 1 tsp",
        "Yogurt - ½ cup",
        "Tamarind Chutney - 3 tbsp",
        "Oil - ½ cup (for shallow frying)"
      ],
      optional: [
        "Sev - ¼ cup",
        "Onion - 1 small, chopped",
        "Coriander Leaves - 2 tbsp"
      ]
    },
    preparation: [
      "Step 1: Boil, peel, and mash the potatoes.",
      "Step 2: Add cumin powder, red chili powder, and salt. Mix well.",
      "Step 3: Shape mashed potatoes into patties.",
      "Step 4: Heat oil in a pan for shallow frying.",
      "Step 5: Fry patties until golden and crisp on both sides.",
      "Step 6: Arrange tikkis on a plate.",
      "Step 7: Top with yogurt and tamarind chutney.",
      "Step 8: Sprinkle sev over the tikkis.",
      "Step 9: Garnish with chopped onions and coriander leaves.",
      "Step 10: Serve immediately as chaat."
    ],
    nutrition: { calories: 280, protein: 6, carbs: 40, fat: 12 }
  },
  {
    id: 75,
    name: "Dabeli",
    category: "Street Food",
    imageName: "dabeli",
    prepTime: "15 mins",
    cookTime: "15 mins",
    ingredients: {
      main: [
        "Boiled Potatoes - 3 medium, mashed",
        "Dabeli Masala - 2 tbsp",
        "Peanut Masala - 2 tbsp",
        "Pav Bread - 4 pieces",
        "Oil - ½ cup"
      ],
      optional: [
        "Pomegranate Seeds - 2 tbsp",
        "Coriander Leaves - 2 tbsp",
        "Chutneys - 2 tbsp each"
      ]
    },
    preparation: [
      "Step 1: Mash boiled potatoes and mix with dabeli masala.",
      "Step 2: Prepare spicy peanut mixture separately.",
      "Step 3: Slice pav horizontally and lightly toast on a pan.",
      "Step 4: Spread chutneys inside the pav.",
      "Step 5: Place potato mixture inside pav.",
      "Step 6: Add peanut mixture on top.",
      "Step 7: Garnish with pomegranate seeds and coriander leaves.",
      "Step 8: Press pav lightly to secure filling.",
      "Step 9: Serve hot immediately.",
      "Step 10: Enjoy spicy, tangy dabeli as street food snack."
    ],
    nutrition: { calories: 260, protein: 5, carbs: 35, fat: 10 }
  },


  {
    id: 76,
    name: "Kathi Roll",
    category: "Street Food",
    imageName: "kathi_roll",
    prepTime: "20 mins",
    cookTime: "15 mins",
    ingredients: {
      main: [
        "Paratha - 4 pieces",
        "Chicken Breast - 200g (or Paneer - 200g)",
        "Onion - 1 medium, sliced",
        "Bell Pepper - 1 medium, sliced",
        "Ginger-Garlic Paste - 1 tsp",
        "Red Chili Powder - 1 tsp",
        "Turmeric Powder - ½ tsp",
        "Salt - to taste",
        "Oil - 2 tbsp"
      ],
      optional: [
        "Chutney - 2 tbsp",
        "Lettuce Leaves - 4",
        "Yogurt Sauce - 2 tbsp"
      ]
    },
    preparation: [
      "Step 1: Slice chicken or paneer into thin strips.",
      "Step 2: Marinate with ginger-garlic paste, red chili, turmeric, and salt for 10 mins.",
      "Step 3: Heat oil in a pan and cook marinated chicken/paneer until cooked through.",
      "Step 4: Remove and keep aside.",
      "Step 5: Prepare parathas on a hot pan until golden brown.",
      "Step 6: Place cooked chicken/paneer on paratha.",
      "Step 7: Add sliced onions and bell peppers on top.",
      "Step 8: Drizzle chutney and yogurt sauce if using.",
      "Step 9: Roll paratha tightly to form a roll.",
      "Step 10: Serve immediately with extra chutney or salad on the side."
    ],
    nutrition: { calories: 350, protein: 18, carbs: 40, fat: 12 }
  },
  {
    id: 77,
    name: "Egg Roll",
    category: "Street Food",
    imageName: "egg_roll",
    prepTime: "10 mins",
    cookTime: "15 mins",
    ingredients: {
      main: [
        "Eggs - 4",
        "Paratha - 4 pieces",
        "Onion - 1 medium, sliced",
        "Salt - ½ tsp",
        "Black Pepper - ¼ tsp",
        "Red Chili Powder - ¼ tsp",
        "Oil - 2 tbsp"
      ],
      optional: [
        "Chutney - 2 tbsp",
        "Cabbage - ½ cup, shredded",
        "Tomato - 1 small, sliced"
      ]
    },
    preparation: [
      "Step 1: Beat eggs with salt, pepper, and red chili powder.",
      "Step 2: Heat oil in a pan and cook eggs until fluffy.",
      "Step 3: Prepare parathas on another hot pan until golden brown.",
      "Step 4: Place cooked eggs on paratha center.",
      "Step 5: Add sliced onions, cabbage, and tomato on top.",
      "Step 6: Spread chutney if desired.",
      "Step 7: Roll paratha tightly around the filling.",
      "Step 8: Press lightly to secure roll.",
      "Step 9: Cut in half for serving.",
      "Step 10: Serve hot immediately."
    ],
    nutrition: { calories: 300, protein: 12, carbs: 35, fat: 14 }
  },
  {
    id: 78,
    name: "Frankie",
    category: "Street Food",
    imageName: "frankie",
    prepTime: "15 mins",
    cookTime: "15 mins",
    ingredients: {
      main: [
        "Paratha - 4 pieces",
        "Chicken - 200g (or Paneer - 200g)",
        "Onion - 1 medium, sliced",
        "Bell Pepper - 1 medium, sliced",
        "Salt - ½ tsp",
        "Red Chili Powder - 1 tsp",
        "Turmeric Powder - ½ tsp",
        "Oil - 2 tbsp"
      ],
      optional: [
        "Lettuce Leaves - 4",
        "Capsicum - ½ cup, sliced",
        "Sauce (tomato/mayo) - 2 tbsp"
      ]
    },
    preparation: [
      "Step 1: Slice chicken/paneer into strips.",
      "Step 2: Marinate with salt, red chili, and turmeric for 10 mins.",
      "Step 3: Heat oil and cook chicken/paneer until done.",
      "Step 4: Prepare parathas on a hot griddle.",
      "Step 5: Place cooked filling on paratha.",
      "Step 6: Add onions, bell peppers, lettuce, and capsicum.",
      "Step 7: Drizzle sauce over filling.",
      "Step 8: Roll paratha tightly to form frankie.",
      "Step 9: Press slightly to secure.",
      "Step 10: Serve hot with extra chutney or sauce."
    ],
    nutrition: { calories: 340, protein: 15, carbs: 38, fat: 12 }
  },
  {
    id: 79,
    name: "Chicken Shawarma",
    category: "Street Food",
    imageName: "chicken_shawarma",
    prepTime: "25 mins",
    cookTime: "20 mins",
    ingredients: {
      main: [
        "Chicken Thighs - 250g, boneless",
        "Yogurt - 2 tbsp",
        "Garlic - 2 cloves, minced",
        "Lemon Juice - 1 tbsp",
        "Paprika - 1 tsp",
        "Cumin Powder - ½ tsp",
        "Salt - to taste",
        "Pita Bread - 4 pieces",
        "Oil - 1 tbsp"
      ],
      optional: [
        "Lettuce - 4 leaves",
        "Tomato - 1 small, sliced",
        "Tahini Sauce - 2 tbsp"
      ]
    },
    preparation: [
      "Step 1: Marinate chicken with yogurt, garlic, lemon juice, paprika, cumin, and salt for 15 mins.",
      "Step 2: Heat oil in a pan and cook chicken until tender and slightly charred.",
      "Step 3: Warm pita bread on a pan.",
      "Step 4: Slice cooked chicken thinly.",
      "Step 5: Place lettuce and tomato slices on pita.",
      "Step 6: Add sliced chicken on top.",
      "Step 7: Drizzle tahini sauce over filling.",
      "Step 8: Roll pita to enclose filling.",
      "Step 9: Secure with parchment or foil if needed.",
      "Step 10: Serve immediately with extra sauce."
    ],
    nutrition: { calories: 360, protein: 20, carbs: 40, fat: 14 }
  },
  {
    id: 80,
    name: "Fish Fry Street Style",
    category: "Street Food",
    imageName: "fish_fry_street_style",
    prepTime: "15 mins",
    cookTime: "15 mins",
    ingredients: {
      main: [
        "Fish Fillets - 250g",
        "Turmeric Powder - ½ tsp",
        "Red Chili Powder - 1 tsp",
        "Salt - ½ tsp",
        "Lemon Juice - 1 tbsp",
        "Oil - ¼ cup"
      ],
      optional: [
        "Coriander Leaves - 2 tbsp, chopped",
        "Lemon Wedges - 2"
      ]
    },
    preparation: [
      "Step 1: Rinse fish fillets and pat dry.",
      "Step 2: Marinate with turmeric, red chili powder, salt, and lemon juice for 10 mins.",
      "Step 3: Heat oil in a frying pan over medium heat.",
      "Step 4: Fry fish on one side until golden brown.",
      "Step 5: Flip and fry the other side until crispy and cooked through.",
      "Step 6: Remove and drain excess oil on paper towels.",
      "Step 7: Garnish with chopped coriander leaves.",
      "Step 8: Serve with lemon wedges on the side.",
      "Step 9: Optionally serve with chutney or sauce.",
      "Step 10: Serve hot immediately as street style snack."
    ],
    nutrition: { calories: 250, protein: 18, carbs: 5, fat: 15 }
  },

  {
    id: 81,
    name: "Keema Pav",
    category: "Street Food",
    imageName: "keema_pav",
    prepTime: "20 mins",
    cookTime: "20 mins",
    ingredients: {
      main: [
        "Minced Meat (Mutton/Chicken) - 250g",
        "Onion - 1 medium, finely chopped",
        "Tomato - 1 medium, chopped",
        "Ginger-Garlic Paste - 1 tsp",
        "Green Chili - 1, chopped",
        "Coriander Powder - 1 tsp",
        "Garam Masala - ½ tsp",
        "Salt - to taste",
        "Oil - 2 tbsp",
        "Pav Bread - 4 pieces"
      ],
      optional: [
        "Coriander Leaves - 2 tbsp, chopped",
        "Lemon Wedges - 2"
      ]
    },
    preparation: [
      "Step 1: Heat oil in a pan and sauté chopped onions until golden brown.",
      "Step 2: Add ginger-garlic paste and green chili; sauté for 1-2 mins.",
      "Step 3: Add chopped tomatoes and cook until soft.",
      "Step 4: Add minced meat, salt, coriander powder, and garam masala.",
      "Step 5: Cook on medium heat until meat is fully cooked and water evaporates.",
      "Step 6: Lightly toast pav on a pan.",
      "Step 7: Place cooked keema inside pav.",
      "Step 8: Garnish with coriander leaves and squeeze of lemon.",
      "Step 9: Serve hot immediately with extra chutney if desired.",
      "Step 10: Enjoy classic street-style Keema Pav."
    ],
    nutrition: { calories: 330, protein: 20, carbs: 35, fat: 15 }
  },
  {
    id: 82,
    name: "Akki Roti",
    category: "Street Food",
    imageName: "akki_roti",
    prepTime: "15 mins",
    cookTime: "15 mins",
    ingredients: {
      main: [
        "Rice Flour - 1 cup",
        "Grated Coconut - ¼ cup",
        "Onion - 1 small, finely chopped",
        "Green Chili - 1, chopped",
        "Coriander Leaves - 2 tbsp, chopped",
        "Salt - ½ tsp",
        "Oil - 1 tbsp"
      ],
      optional: [
        "Butter - 1 tsp for greasing",
        "Extra coriander leaves for garnish"
      ]
    },
    preparation: [
      "Step 1: Mix rice flour, grated coconut, onion, green chili, coriander leaves, and salt in a bowl.",
      "Step 2: Add water gradually to form a soft dough.",
      "Step 3: Divide dough into equal portions and flatten each into a small round roti.",
      "Step 4: Heat a griddle or tawa on medium flame.",
      "Step 5: Cook each roti on the griddle for 2-3 mins on one side.",
      "Step 6: Flip and cook the other side until light golden brown.",
      "Step 7: Brush lightly with butter if desired.",
      "Step 8: Repeat with remaining dough portions.",
      "Step 9: Serve hot with chutney or curry.",
      "Step 10: Enjoy authentic Akki Roti as a street-style snack."
    ],
    nutrition: { calories: 280, protein: 5, carbs: 45, fat: 8 }
  },
  {
    id: 83,
    name: "Egg Kothu Parotta",
    category: "Street Food",
    imageName: "egg_kothu_parotta",
    prepTime: "20 mins",
    cookTime: "15 mins",
    ingredients: {
      main: [
        "Parotta - 3 pieces",
        "Eggs - 3",
        "Onion - 1 medium, sliced",
        "Green Chili - 1, chopped",
        "Salt - ½ tsp",
        "Red Chili Powder - ½ tsp",
        "Oil - 2 tbsp"
      ],
      optional: [
        "Coriander Leaves - 1 tbsp, chopped",
        "Lemon Juice - 1 tsp"
      ]
    },
    preparation: [
      "Step 1: Shred parotta into small pieces and keep aside.",
      "Step 2: Heat oil in a pan and sauté onions and green chili until soft.",
      "Step 3: Beat eggs with salt and red chili powder.",
      "Step 4: Add eggs to pan and scramble until just cooked.",
      "Step 5: Add shredded parotta and mix well with egg mixture.",
      "Step 6: Cook together for 5 minutes, stirring frequently.",
      "Step 7: Garnish with chopped coriander leaves.",
      "Step 8: Squeeze lemon juice over the mixture for extra flavor.",
      "Step 9: Serve hot immediately.",
      "Step 10: Enjoy spicy Egg Kothu Parotta as street food."
    ],
    nutrition: { calories: 350, protein: 12, carbs: 40, fat: 15 }
  },
  {
    id: 84,
    name: "Veg Momos",
    category: "Street Food",
    imageName: "veg_momos",
    prepTime: "25 mins",
    cookTime: "20 mins",
    ingredients: {
      main: [
        "Momo Wrappers - 12 pieces",
        "Cabbage - ½ cup, finely chopped",
        "Carrot - ½ cup, grated",
        "Onion - 1 small, finely chopped",
        "Garlic - 1 clove, minced",
        "Salt - ½ tsp",
        "Black Pepper - ¼ tsp",
        "Oil - 1 tsp for greasing"
      ],
      optional: [
        "Chili Sauce - 2 tbsp",
        "Soy Sauce - 1 tbsp",
        "Coriander Leaves - 1 tsp, chopped"
      ]
    },
    preparation: [
      "Step 1: Mix cabbage, carrot, onion, garlic, salt, and black pepper in a bowl.",
      "Step 2: Place 1 tsp of filling in center of each momo wrapper.",
      "Step 3: Fold edges to seal tightly into desired shape.",
      "Step 4: Grease steamer tray with oil to prevent sticking.",
      "Step 5: Steam momos for 10-12 minutes until cooked.",
      "Step 6: Prepare chili sauce and soy sauce for dipping.",
      "Step 7: Garnish momos with chopped coriander if desired.",
      "Step 8: Serve hot with sauces on side.",
      "Step 9: Enjoy soft and juicy Veg Momos as street snack.",
      "Step 10: Make sure wrappers are sealed properly to avoid filling leakage."
    ],
    nutrition: { calories: 200, protein: 6, carbs: 30, fat: 6 }
  },
  {
    id: 85,
    name: "Paneer Tikka Roll",
    category: "Street Food",
    imageName: "paneer_tikka_roll",
    prepTime: "20 mins",
    cookTime: "15 mins",
    ingredients: {
      main: [
        "Paneer - 200g, cubed",
        "Paratha - 4 pieces",
        "Onion - 1 medium, sliced",
        "Bell Pepper - 1 medium, sliced",
        "Yogurt - 2 tbsp",
        "Red Chili Powder - 1 tsp",
        "Garam Masala - ½ tsp",
        "Salt - to taste",
        "Oil - 1 tbsp"
      ],
      optional: [
        "Mint Chutney - 2 tbsp",
        "Lettuce Leaves - 4"
      ]
    },
    preparation: [
      "Step 1: Marinate paneer cubes with yogurt, red chili powder, garam masala, and salt for 10 mins.",
      "Step 2: Heat oil in a pan and grill paneer until golden on all sides.",
      "Step 3: Prepare parathas on a hot pan until slightly crisp.",
      "Step 4: Place grilled paneer on paratha.",
      "Step 5: Add sliced onions, bell peppers, and lettuce leaves.",
      "Step 6: Spread mint chutney over filling.",
      "Step 7: Roll paratha tightly to form roll.",
      "Step 8: Press lightly to secure the roll.",
      "Step 9: Cut in half for serving if desired.",
      "Step 10: Serve immediately and enjoy flavorful Paneer Tikka Roll."
    ],
    nutrition: { calories: 330, protein: 15, carbs: 35, fat: 12 }
  },

  {
    id: 86,
    name: "Chaat",
    category: "Street Food",
    imageName: "chaat",
    prepTime: "15 mins",
    cookTime: "10 mins",
    ingredients: {
      main: [
        "Boiled Potatoes - 2 medium, diced",
        "Boiled Chickpeas - 1 cup",
        "Onion - 1 small, finely chopped",
        "Green Chutney - 2 tbsp",
        "Tamarind Chutney - 2 tbsp",
        "Chaat Masala - 1 tsp",
        "Red Chili Powder - ½ tsp",
        "Salt - to taste",
        "Oil - 1 tsp",
        "Sev - ¼ cup"
      ],
      optional: [
        "Coriander Leaves - 2 tbsp, chopped",
        "Pomegranate Seeds - 2 tbsp"
      ]
    },
    preparation: [
      "Step 1: Dice boiled potatoes and place in a mixing bowl.",
      "Step 2: Add boiled chickpeas and finely chopped onions.",
      "Step 3: Mix green chutney and tamarind chutney with the vegetables.",
      "Step 4: Sprinkle chaat masala, red chili powder, and salt.",
      "Step 5: Toss everything gently to combine well.",
      "Step 6: Top with sev for crunch.",
      "Step 7: Garnish with coriander leaves and pomegranate seeds.",
      "Step 8: Serve immediately to retain crispiness.",
      "Step 9: Optionally, squeeze lemon for tangy flavor.",
      "Step 10: Enjoy classic street-style Chaat."
    ],
    nutrition: { calories: 220, protein: 6, carbs: 35, fat: 8 }
  },
  {
    id: 87,
    name: "Pani Puri",
    category: "Street Food",
    imageName: "pani_puri",
    prepTime: "20 mins",
    cookTime: "15 mins",
    ingredients: {
      main: [
        "Puri Shells - 12 pieces",
        "Boiled Potatoes - 2 medium, mashed",
        "Boiled Chickpeas - ½ cup",
        "Spiced Water (Pani) - 2 cups",
        "Tamarind Chutney - 3 tbsp",
        "Salt - to taste"
      ],
      optional: [
        "Onion - 1 small, finely chopped",
        "Coriander Leaves - 2 tbsp, chopped",
        "Chili Powder - ¼ tsp"
      ]
    },
    preparation: [
      "Step 1: Prepare spiced water (pani) and tamarind chutney separately.",
      "Step 2: Mash boiled potatoes and mix with boiled chickpeas.",
      "Step 3: Season potato-chickpea mix with salt and chili powder.",
      "Step 4: Make a small hole in the top of each puri shell.",
      "Step 5: Fill puri shells with potato and chickpea mixture.",
      "Step 6: Add a little tamarind chutney inside each puri.",
      "Step 7: Pour spiced water into each puri just before serving.",
      "Step 8: Garnish with chopped onions and coriander leaves.",
      "Step 9: Serve immediately to retain crispiness of puris.",
      "Step 10: Enjoy tangy, spicy, and refreshing Pani Puri."
    ],
    nutrition: { calories: 150, protein: 4, carbs: 25, fat: 4 }
  },
  {
    id: 88,
    name: "Corn on the Cob (Grilled)",
    category: "Street Food",
    imageName: "corn_on_the_cob",
    prepTime: "10 mins",
    cookTime: "15 mins",
    ingredients: {
      main: [
        "Corn Cobs - 4",
        "Butter - 2 tbsp",
        "Salt - to taste",
        "Black Pepper - ¼ tsp",
        "Lemon - 1, cut into wedges"
      ],
      optional: [
        "Chili Powder - ½ tsp",
        "Coriander Leaves - 1 tbsp, chopped"
      ]
    },
    preparation: [
      "Step 1: Boil or steam corn cobs until tender.",
      "Step 2: Brush each cob with butter.",
      "Step 3: Sprinkle salt, black pepper, and chili powder evenly.",
      "Step 4: Heat a grill pan or open flame.",
      "Step 5: Grill corn on all sides until slightly charred.",
      "Step 6: Remove from heat and squeeze lemon juice over each cob.",
      "Step 7: Garnish with chopped coriander if desired.",
      "Step 8: Serve hot immediately.",
      "Step 9: Optionally, add extra butter for richer taste.",
      "Step 10: Enjoy smoky, buttery street-style grilled corn."
    ],
    nutrition: { calories: 180, protein: 4, carbs: 30, fat: 6 }
  },
  {
    id: 89,
    name: "Takoyaki",
    category: "Street Food",
    imageName: "takoyaki",
    prepTime: "20 mins",
    cookTime: "15 mins",
    ingredients: {
      main: [
        "Takoyaki Batter - 1 cup",
        "Octopus Pieces - 100g",
        "Onion - ¼ cup, finely chopped",
        "Green Onion - 2 tbsp, chopped",
        "Oil - 2 tsp",
        "Salt - ¼ tsp"
      ],
      optional: [
        "Tonkatsu Sauce - 2 tbsp",
        "Mayonnaise - 1 tbsp",
        "Bonito Flakes - 1 tbsp"
      ]
    },
    preparation: [
      "Step 1: Preheat takoyaki pan and brush with oil.",
      "Step 2: Pour batter into each cavity, filling ¾ full.",
      "Step 3: Add octopus pieces, onions, and green onions into each cavity.",
      "Step 4: Cook for 2-3 mins until edges start to set.",
      "Step 5: Use skewer to turn takoyaki balls halfway for even cooking.",
      "Step 6: Continue rotating until golden brown on all sides.",
      "Step 7: Remove from pan and place on serving plate.",
      "Step 8: Drizzle tonkatsu sauce and mayonnaise over balls.",
      "Step 9: Sprinkle bonito flakes on top.",
      "Step 10: Serve immediately and enjoy piping hot Takoyaki."
    ],
    nutrition: { calories: 220, protein: 8, carbs: 30, fat: 10 }
  },
  {
    id: 90,
    name: "Bao Buns",
    category: "Street Food",
    imageName: "bao_buns",
    prepTime: "30 mins",
    cookTime: "20 mins",
    ingredients: {
      main: [
        "Bao Dough - 1 cup",
        "Pork or Veg Filling - 150g",
        "Oil - 1 tsp",
        "Salt - ¼ tsp",
        "Soy Sauce - 1 tsp"
      ],
      optional: [
        "Cucumber - ¼ cup, julienned",
        "Spring Onion - 1 tbsp, chopped",
        "Hoisin Sauce - 2 tbsp"
      ]
    },
    preparation: [
      "Step 1: Prepare bao dough and allow it to rise for 20 mins.",
      "Step 2: Divide dough into small portions and shape into buns.",
      "Step 3: Prepare filling by cooking pork or vegetables with soy sauce and salt.",
      "Step 4: Flatten each dough portion and place filling inside.",
      "Step 5: Fold dough over filling to seal buns.",
      "Step 6: Steam buns in steamer for 10-12 mins until cooked.",
      "Step 7: Prepare garnishes like cucumber and spring onion.",
      "Step 8: Serve steamed buns with hoisin sauce and garnishes.",
      "Step 9: Enjoy soft, flavorful Bao Buns immediately.",
      "Step 10: Optionally, brush light oil for glossy finish."
    ],
    nutrition: { calories: 280, protein: 10, carbs: 45, fat: 8 }
  },
// -------------------- South Indian Special --------------------
  {
    id: 91,
    name: "Chettinad Chicken Curry",
    category: "South Indian Special",
    imageName: "chettinad_chicken",
    prepTime: "20 mins",
    cookTime: "40 mins",
    ingredients: {
      main: [
        "Chicken - 500g, cut into medium pieces",
        "Onion - 2 medium, finely chopped",
        "Tomato - 2 medium, chopped",
        "Grated Coconut - ½ cup",
        "Fennel Seeds - 1 tsp",
        "Coriander Seeds - 1 tsp",
        "Red Chilies - 4-5",
        "Ginger-Garlic Paste - 1 tbsp",
        "Oil - 2 tbsp",
        "Salt - to taste"
      ],
      optional: [
        "Curry Leaves - 10",
        "Coriander Leaves - 2 tbsp, chopped"
      ]
    },
    preparation: [
      "Step 1: Clean and cut chicken into medium pieces.",
      "Step 2: Dry roast fennel seeds, coriander seeds, and red chilies; grind to a fine powder.",
      "Step 3: Heat oil in a pan and sauté onions until golden brown.",
      "Step 4: Add ginger-garlic paste and sauté until raw smell disappears.",
      "Step 5: Add chopped tomatoes and cook until soft.",
      "Step 6: Add ground spice powder and cook for 2-3 minutes.",
      "Step 7: Add chicken pieces, salt, and ½ cup water. Cover and cook for 25-30 minutes until chicken is tender.",
      "Step 8: Add grated coconut or coconut milk and simmer for 5 more minutes.",
      "Step 9: Adjust salt and consistency if needed.",
      "Step 10: Garnish with curry leaves and coriander leaves before serving.",
      "Step 11: Serve hot with steamed rice or parotta."
    ],
    nutrition: { calories: 320, protein: 28, carbs: 8, fat: 18 }
  },
  {
    id: 92,
    name: "Karaikudi Mutton Curry",
    category: "South Indian Special",
    imageName: "karaikudi_mutton_curry",
    prepTime: "25 mins",
    cookTime: "50 mins",
    ingredients: {
      main: [
        "Mutton - 500g, cut into pieces",
        "Onion - 2 medium, finely chopped",
        "Tomato - 2 medium, chopped",
        "Ginger-Garlic Paste - 1 tbsp",
        "Coriander Seeds - 1 tsp",
        "Fennel Seeds - 1 tsp",
        "Red Chilies - 5-6",
        "Oil - 2 tbsp",
        "Salt - to taste"
      ],
      optional: [
        "Curry Leaves - 10",
        "Coriander Leaves - 2 tbsp, chopped"
      ]
    },
    preparation: [
      "Step 1: Wash mutton and cut into medium pieces.",
      "Step 2: Dry roast coriander, fennel seeds, and red chilies; grind to a fine powder.",
      "Step 3: Heat oil in a pan and sauté onions until golden brown.",
      "Step 4: Add ginger-garlic paste and fry until raw smell disappears.",
      "Step 5: Add chopped tomatoes and cook until mushy.",
      "Step 6: Add ground spice powder and fry for 2-3 minutes.",
      "Step 7: Add mutton pieces, salt, and ½ cup water. Cover and cook for 40-45 minutes until tender.",
      "Step 8: Simmer curry until thickened to desired consistency.",
      "Step 9: Garnish with fresh coriander leaves before serving.",
      "Step 10: Serve hot with steamed rice or parotta.",
      "Step 11: Optionally, drizzle ghee for richer flavor."
    ],
    nutrition: { calories: 350, protein: 30, carbs: 10, fat: 20 }
  },
  {
    id: 93,
    name: "Kerala Fish Curry",
    category: "South Indian Special",
    imageName: "kerala_fish_curry",
    prepTime: "15 mins",
    cookTime: "25 mins",
    ingredients: {
      main: [
        "Fish - 500g, cleaned and cut",
        "Tamarind - 2 tbsp, soaked in warm water",
        "Coconut Milk - ½ cup",
        "Onion - 1 medium, sliced",
        "Tomato - 1 medium, chopped",
        "Green Chilies - 2, slit",
        "Red Chili Powder - ½ tsp",
        "Turmeric Powder - ¼ tsp",
        "Oil - 2 tbsp",
        "Salt - to taste"
      ],
      optional: [
        "Curry Leaves - 10"
      ]
    },
    preparation: [
      "Step 1: Soak tamarind in warm water and extract juice.",
      "Step 2: Clean fish pieces and keep aside.",
      "Step 3: Heat oil in a pan and sauté onions until translucent.",
      "Step 4: Add green chilies, curry leaves, and chopped tomatoes.",
      "Step 5: Add turmeric and red chili powder, sauté for a minute.",
      "Step 6: Pour tamarind juice and bring to a boil.",
      "Step 7: Gently add fish pieces and simmer for 8-10 minutes.",
      "Step 8: Add coconut milk and cook for 2-3 minutes without boiling.",
      "Step 9: Adjust salt and garnish with curry leaves.",
      "Step 10: Serve hot with steamed rice.",
      "Step 11: Optionally, sprinkle a few drops of lemon juice for tanginess."
    ],
    nutrition: { calories: 280, protein: 25, carbs: 6, fat: 14 }
  },
  {
    id: 94,
    name: "Malabar Parotta",
    category: "South Indian Special",
    imageName: "malabar_parotta",
    prepTime: "30 mins",
    cookTime: "20 mins",
    ingredients: {
      main: [
        "All-purpose Flour - 2 cups",
        "Water - ¾ cup",
        "Salt - ½ tsp",
        "Oil - 2 tbsp"
      ],
      optional: [
        "Butter - 1 tbsp"
      ]
    },
    preparation: [
      "Step 1: Mix flour, salt, water, and oil to form a soft dough.",
      "Step 2: Knead dough for 10 minutes until smooth.",
      "Step 3: Divide dough into small balls.",
      "Step 4: Roll each ball into thin circles.",
      "Step 5: Apply oil and fold to create layers, then roll again.",
      "Step 6: Heat a griddle and cook each parotta until golden brown on both sides.",
      "Step 7: Repeat for all dough balls.",
      "Step 8: Serve hot with curry or chutney.",
      "Step 9: Optionally, brush with butter for extra flavor.",
      "Step 10: Enjoy soft, flaky Malabar Parotta."
    ],
    nutrition: { calories: 300, protein: 6, carbs: 50, fat: 10 }
  },
  {
    id: 95,
    name: "Avial",
    category: "South Indian Special",
    imageName: "avial",
    prepTime: "20 mins",
    cookTime: "25 mins",
    ingredients: {
      main: [
        "Mixed Vegetables - 2 cups, cut into long thin pieces",
        "Grated Coconut - ½ cup",
        "Green Chilies - 2, chopped",
        "Curd (Yogurt) - ½ cup",
        "Curry Leaves - 10"
      ],
      optional: [
        "Coconut Oil - 1 tsp"
      ]
    },
    preparation: [
      "Step 1: Parboil the vegetables until slightly tender.",
      "Step 2: Grind coconut and green chilies into a coarse paste.",
      "Step 3: Add coconut paste to the boiled vegetables.",
      "Step 4: Mix in curd and cook on low heat for 5-7 minutes.",
      "Step 5: Add salt and adjust consistency with a little water if needed.",
      "Step 6: Drizzle coconut oil over the top.",
      "Step 7: Add curry leaves and mix gently.",
      "Step 8: Serve immediately with steamed rice.",
      "Step 9: Optionally, garnish with extra coconut or curry leaves.",
      "Step 10: Enjoy authentic South Indian Avial."
    ],
    nutrition: { calories: 200, protein: 5, carbs: 25, fat: 8 }
  },

{
  id: 96,
  name: "Vatha Kuzhambu",
  category: "South Indian Special",
  imageName: "vatha_kuzhambu",
  prepTime: "15 mins",
  cookTime: "35 mins",
  ingredients: {
    main: [
      "Tamarind - 2 tbsp, soaked in water",
      "Vathal (Sun-dried berries) - 50g",
      "Onion - 1 medium, sliced",
      "Chili Powder - 1 tsp",
      "Coriander Powder - 1 tsp",
      "Fenugreek Seeds - ½ tsp",
      "Oil - 2 tbsp",
      "Salt - to taste"
    ],
    optional: [
      "Curry Leaves - 10",
      "Coriander Leaves - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Soak tamarind in water and extract juice.",
    "Step 2: Fry vathal lightly and keep aside.",
    "Step 3: Heat oil in a pan, add mustard seeds and let them splutter.",
    "Step 4: Add curry leaves and sliced onions, sauté until golden brown.",
    "Step 5: Add chili powder, coriander powder, and fenugreek seeds, sauté for 1-2 minutes.",
    "Step 6: Pour tamarind juice and bring to a boil.",
    "Step 7: Add fried vathal and simmer for 15-20 minutes.",
    "Step 8: Adjust salt and water consistency as required.",
    "Step 9: Garnish with chopped coriander leaves.",
    "Step 10: Serve hot with steamed rice.",
    "Step 11: Optionally, drizzle a little ghee for extra flavor."
  ],
  nutrition: { calories: 180, protein: 3, carbs: 25, fat: 7 }
},
{
  id: 97,
  name: "Prawn Thokku",
  category: "South Indian Special",
  imageName: "prawn_thokku",
  prepTime: "15 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Prawns - 500g, cleaned",
      "Onion - 1 medium, chopped",
      "Tomato - 1 medium, chopped",
      "Garlic - 4 cloves, minced",
      "Red Chili Powder - 1 tsp",
      "Coriander Powder - 1 tsp",
      "Oil - 2 tbsp",
      "Salt - to taste"
    ],
    optional: [
      "Curry Leaves - 10",
      "Oil - 1 tsp for garnishing"
    ]
  },
  preparation: [
    "Step 1: Clean prawns and set aside.",
    "Step 2: Heat oil in a pan and sauté onions and garlic until golden brown.",
    "Step 3: Add chopped tomatoes and cook until soft.",
    "Step 4: Add red chili powder and coriander powder, sauté for 1-2 minutes.",
    "Step 5: Add prawns and salt, mix well.",
    "Step 6: Cook prawns for 8-10 minutes until fully done.",
    "Step 7: Simmer until gravy thickens to desired consistency.",
    "Step 8: Garnish with curry leaves.",
    "Step 9: Serve hot with steamed rice or dosa.",
    "Step 10: Optionally, sprinkle a few drops of lemon juice before serving.",
    "Step 11: Enjoy spicy and tangy prawn thokku."
  ],
  nutrition: { calories: 220, protein: 25, carbs: 6, fat: 10 }
},
{
  id: 98,
  name: "Kothu Parotta",
  category: "South Indian Special",
  imageName: "kothu_parotta",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Parotta - 2, shredded into pieces",
      "Eggs or Meat - 200g",
      "Onion - 1 medium, chopped",
      "Green Chili - 2, chopped",
      "Oil - 2 tbsp",
      "Spices (chili, turmeric, coriander) - 1 tsp each",
      "Salt - to taste"
    ],
    optional: [
      "Coriander Leaves - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Shred parotta into small pieces.",
    "Step 2: Heat oil in a pan and sauté onions and green chilies until fragrant.",
    "Step 3: Add eggs or meat and cook thoroughly.",
    "Step 4: Add shredded parotta to the mixture.",
    "Step 5: Sprinkle chili, turmeric, and coriander powder, mix well.",
    "Step 6: Sauté for 5-7 minutes until parotta absorbs spices.",
    "Step 7: Adjust salt to taste.",
    "Step 8: Garnish with chopped coriander leaves.",
    "Step 9: Serve hot as a main dish.",
    "Step 10: Optionally, drizzle ghee for richer flavor.",
    "Step 11: Enjoy soft, spicy Kothu Parotta."
  ],
  nutrition: { calories: 320, protein: 15, carbs: 40, fat: 12 }
},
{
  id: 99,
  name: "Adai Aviyal",
  category: "South Indian Special",
  imageName: "adai_aviyal",
  prepTime: "25 mins",
  cookTime: "30 mins",
  ingredients: {
    main: [
      "Mixed Lentils (Toor, Chana, Moong) - 1 cup, soaked",
      "Vegetables (Carrot, Beans, Drumstick) - 2 cups, chopped",
      "Grated Coconut - ½ cup",
      "Spices (Red Chili, Turmeric) - ½ tsp each",
      "Curry Leaves - 10",
      "Salt - to taste"
    ],
    optional: [
      "Coconut Oil - 1 tsp"
    ]
  },
  preparation: [
    "Step 1: Soak lentils and grind to a coarse batter.",
    "Step 2: Mix chopped vegetables into lentil batter.",
    "Step 3: Add spices and salt, mix thoroughly.",
    "Step 4: Heat a pan and pour batter to make thick pancakes.",
    "Step 5: Cook on both sides until golden brown.",
    "Step 6: Prepare aviyal by cooking vegetables with coconut and yogurt.",
    "Step 7: Mix cooked aviyal with adai or serve on the side.",
    "Step 8: Drizzle coconut oil over adai before serving.",
    "Step 9: Serve hot for breakfast or lunch.",
    "Step 10: Enjoy nutritious South Indian Adai with Aviyal.",
    "Step 11: Optionally, add extra curry leaves for aroma."
  ],
  nutrition: { calories: 250, protein: 10, carbs: 35, fat: 8 }
},
{
  id: 100,
  name: "Keerai Masiyal",
  category: "South Indian Special",
  imageName: "keerai_masiyal",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Spinach or Mixed Greens - 2 cups, washed and chopped",
      "Garlic - 3 cloves, minced",
      "Tamarind - 1 tsp extract",
      "Oil - 1 tbsp",
      "Salt - to taste",
      "Spices (Red Chili, Turmeric) - ¼ tsp each"
    ],
    optional: [
      "Curry Leaves - 5"
    ]
  },
  preparation: [
    "Step 1: Wash and chop the greens thoroughly.",
    "Step 2: Heat oil in a pan, sauté garlic and curry leaves until aromatic.",
    "Step 3: Add greens and cook until wilted.",
    "Step 4: Add tamarind extract, red chili, and turmeric powder.",
    "Step 5: Mash lightly with a spatula while cooking for 5 minutes.",
    "Step 6: Adjust salt to taste.",
    "Step 7: Cook until the mixture is slightly dry and well blended.",
    "Step 8: Serve hot with steamed rice.",
    "Step 9: Optionally, drizzle a little ghee for richer taste.",
    "Step 10: Enjoy nutritious Keerai Masiyal as a side dish.",
    "Step 11: Garnish with extra curry leaves if desired."
  ],
  nutrition: { calories: 120, protein: 4, carbs: 15, fat: 5 }
},

{
  id: 101,
  name: "Kozhukattai",
  category: "South Indian Special",
  imageName: "kozhukattai",
  prepTime: "25 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Rice Flour - 1 cup",
      "Grated Coconut - ½ cup",
      "Jaggery - ¼ cup, grated",
      "Cardamom - 3 pods, powdered",
      "Water - ½ cup",
      "Salt - a pinch"
    ],
    optional: [
      "Grated Coconut for garnish - 2 tbsp"
    ]
  },
  preparation: [
    "Step 1: Mix rice flour with warm water and a pinch of salt to form a soft dough.",
    "Step 2: Prepare jaggery-coconut filling and add cardamom powder.",
    "Step 3: Take small portions of dough and flatten into cups.",
    "Step 4: Fill each cup with jaggery-coconut mixture.",
    "Step 5: Seal the edges properly to form dumplings.",
    "Step 6: Arrange dumplings in a steamer.",
    "Step 7: Steam kozhukattai for 10-12 minutes until cooked.",
    "Step 8: Remove from steamer and let it cool slightly.",
    "Step 9: Garnish with grated coconut on top.",
    "Step 10: Serve warm as a snack or dessert.",
    "Step 11: Enjoy sweet, soft, and aromatic Kozhukattai."
  ],
  nutrition: { calories: 180, protein: 3, carbs: 35, fat: 4 }
},
{
  id: 102,
  name: "Vendakkai Puli Kuzhambu",
  category: "South Indian Special",
  imageName: "vendakkai_puli_kuzhambu",
  prepTime: "15 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Okra (Vendakkai) - 250g, cut into 2-inch pieces",
      "Tamarind - 1 tbsp, soaked in warm water",
      "Onion - 1 medium, sliced",
      "Red Chili Powder - 1 tsp",
      "Turmeric Powder - ½ tsp",
      "Oil - 2 tbsp",
      "Salt - to taste"
    ],
    optional: [
      "Curry Leaves - 10"
    ]
  },
  preparation: [
    "Step 1: Wash and cut okra into 2-inch pieces.",
    "Step 2: Prepare tamarind extract by soaking tamarind in warm water.",
    "Step 3: Heat oil in a pan, add mustard seeds and let them splutter.",
    "Step 4: Add curry leaves and sliced onions, sauté until golden.",
    "Step 5: Add red chili powder, turmeric, and salt, sauté for a minute.",
    "Step 6: Pour tamarind extract and bring to a boil.",
    "Step 7: Add okra pieces and simmer until tender but not mushy.",
    "Step 8: Adjust salt and consistency as required.",
    "Step 9: Serve hot with steamed rice.",
    "Step 10: Optionally, drizzle a little coconut oil for aroma.",
    "Step 11: Enjoy tangy and spicy Vendakkai Puli Kuzhambu."
  ],
  nutrition: { calories: 150, protein: 3, carbs: 20, fat: 6 }
},
{
  id: 103,
  name: "Mushroom Chettinad",
  category: "South Indian Special",
  imageName: "mushroom_chettinad",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Mushrooms - 250g, cleaned and sliced",
      "Onion - 1 medium, chopped",
      "Tomato - 1 medium, chopped",
      "Fennel Seeds - ½ tsp",
      "Coriander Seeds - 1 tsp",
      "Red Chili Powder - 1 tsp",
      "Oil - 2 tbsp",
      "Salt - to taste"
    ],
    optional: [
      "Curry Leaves - 8",
      "Coconut Milk - ¼ cup"
    ]
  },
  preparation: [
    "Step 1: Clean and slice mushrooms.",
    "Step 2: Dry roast fennel and coriander seeds, grind to a fine powder.",
    "Step 3: Heat oil in a pan and sauté onions and curry leaves until fragrant.",
    "Step 4: Add chopped tomatoes and cook until soft.",
    "Step 5: Add ground spice powder and sauté for 1-2 minutes.",
    "Step 6: Add mushrooms and salt, cook for 8-10 minutes.",
    "Step 7: Add coconut milk if desired and simmer for 2-3 minutes.",
    "Step 8: Adjust salt and spices according to taste.",
    "Step 9: Serve hot with steamed rice or roti.",
    "Step 10: Garnish with fresh coriander leaves.",
    "Step 11: Enjoy spicy and flavorful Mushroom Chettinad."
  ],
  nutrition: { calories: 200, protein: 6, carbs: 10, fat: 12 }
},
{
  id: 104,
  name: "Kathirikai Kara Kuzhambu",
  category: "South Indian Special",
  imageName: "kathirikkai_kaara_kuzhambu",
  prepTime: "15 mins",
  cookTime: "30 mins",
  ingredients: {
    main: [
      "Brinjal - 2 medium, cut into pieces",
      "Tamarind - 1 tbsp, soaked in warm water",
      "Onion - 1 medium, chopped",
      "Red Chili Powder - 1 tsp",
      "Coriander Powder - 1 tsp",
      "Oil - 2 tbsp",
      "Salt - to taste"
    ],
    optional: [
      "Curry Leaves - 10"
    ]
  },
  preparation: [
    "Step 1: Cut brinjal into medium-sized pieces and soak in water.",
    "Step 2: Prepare tamarind extract and spice mix.",
    "Step 3: Heat oil, add mustard seeds and let them splutter.",
    "Step 4: Add curry leaves and onions, sauté until golden brown.",
    "Step 5: Add tamarind extract and spice mix, bring to a boil.",
    "Step 6: Add brinjal pieces and cook until soft.",
    "Step 7: Adjust salt and consistency as required.",
    "Step 8: Simmer for 10-15 minutes for flavor to blend.",
    "Step 9: Serve hot with steamed rice.",
    "Step 10: Optionally, drizzle a little coconut oil before serving.",
    "Step 11: Enjoy spicy Kathirikai Kara Kuzhambu."
  ],
  nutrition: { calories: 180, protein: 3, carbs: 20, fat: 8 }
},
{
  id: 105,
  name: "Vazhaipoo Vadai",
  category: "South Indian Special",
  imageName: "vazhai_poo_vadai",
  prepTime: "20 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Banana Flower (Vazhaipoo) - 1 cup, finely chopped",
      "Chickpea Flour - ½ cup",
      "Green Chili - 2, chopped",
      "Spices (Red Chili, Turmeric) - ½ tsp each",
      "Oil - 2 cups for deep frying",
      "Salt - to taste"
    ],
    optional: [
      "Curry Leaves - 8-10, chopped"
    ]
  },
  preparation: [
    "Step 1: Clean and finely chop the banana flower.",
    "Step 2: Mix with chickpea flour, chopped green chilies, spices, and salt to form a thick batter.",
    "Step 3: Heat oil in a deep frying pan.",
    "Step 4: Take small portions of batter and shape into round vadai.",
    "Step 5: Carefully drop into hot oil.",
    "Step 6: Fry until golden brown on all sides.",
    "Step 7: Remove and drain excess oil on paper towels.",
    "Step 8: Garnish with chopped curry leaves.",
    "Step 9: Serve hot as a snack or tea-time item.",
    "Step 10: Optionally, serve with coconut chutney.",
    "Step 11: Enjoy crispy and flavorful Vazhaipoo Vadai."
  ],
  nutrition: { calories: 200, protein: 5, carbs: 25, fat: 8 }
},

{
  id: 106,
  name: "Rasam with Rice",
  category: "South Indian Special",
  imageName: "rasam_rice",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Tamarind - 1 tbsp, soaked in warm water",
      "Tomato - 1 medium, chopped",
      "Rasam Powder - 1 tsp",
      "Garlic - 3 cloves, crushed",
      "Curry Leaves - 10",
      "Water - 2 cups",
      "Salt - to taste"
    ],
    optional: [
      "Coriander Leaves - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Soak tamarind in warm water and extract juice.",
    "Step 2: Boil chopped tomatoes in 1 cup water until soft.",
    "Step 3: Add tamarind extract and remaining water to the pan.",
    "Step 4: Add rasam powder, crushed garlic, and salt.",
    "Step 5: Bring to a gentle boil and simmer for 5 minutes.",
    "Step 6: Add curry leaves and simmer for another 2 minutes.",
    "Step 7: Taste and adjust salt if needed.",
    "Step 8: Pour over cooked rice in a serving bowl.",
    "Step 9: Garnish with chopped coriander leaves.",
    "Step 10: Serve hot with papad or pickle.",
    "Step 11: Enjoy tangy and flavorful Rasam with Rice."
  ],
  nutrition: { calories: 180, protein: 4, carbs: 30, fat: 4 }
},
{
  id: 107,
  name: "Lemon Rice",
  category: "South Indian Special",
  imageName: "lemon_rice",
  prepTime: "10 mins",
  cookTime: "10 mins",
  ingredients: {
    main: [
      "Cooked Rice - 2 cups",
      "Lemon Juice - 3 tbsp",
      "Green Chilies - 2, chopped",
      "Curry Leaves - 10",
      "Turmeric Powder - ½ tsp",
      "Oil - 2 tbsp",
      "Salt - to taste"
    ],
    optional: [
      "Peanuts - 2 tbsp, roasted",
      "Coriander Leaves - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Cook rice and let it cool slightly.",
    "Step 2: Heat oil in a pan, add mustard seeds and let them splutter.",
    "Step 3: Add curry leaves, green chilies, and roasted peanuts, sauté for 1 minute.",
    "Step 4: Add turmeric powder and sauté briefly.",
    "Step 5: Add cooked rice to the pan and mix gently.",
    "Step 6: Pour lemon juice over rice and mix thoroughly.",
    "Step 7: Adjust salt according to taste.",
    "Step 8: Garnish with chopped coriander leaves.",
    "Step 9: Serve at room temperature or slightly warm.",
    "Step 10: Enjoy tangy, fragrant Lemon Rice.",
    "Step 11: Optionally, serve with pickle or papad."
  ],
  nutrition: { calories: 220, protein: 4, carbs: 40, fat: 6 }
},
{
  id: 108,
  name: "Curd Rice",
  category: "South Indian Special",
  imageName: "curd_rice",
  prepTime: "10 mins",
  cookTime: "5 mins",
  ingredients: {
    main: [
      "Cooked Rice - 2 cups",
      "Curd (Yogurt) - 1 cup",
      "Green Chilies - 1, chopped",
      "Curry Leaves - 10",
      "Oil - 1 tbsp",
      "Salt - to taste"
    ],
    optional: [
      "Ginger - 1 tsp, grated",
      "Coriander Leaves - 1 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Cook rice and allow it to cool slightly.",
    "Step 2: Mix cooked rice with curd and salt.",
    "Step 3: Heat oil in a pan and add mustard seeds until they splutter.",
    "Step 4: Add curry leaves, green chilies, and grated ginger, sauté briefly.",
    "Step 5: Pour tempering over the rice and mix gently.",
    "Step 6: Taste and adjust salt if needed.",
    "Step 7: Garnish with chopped coriander leaves.",
    "Step 8: Serve chilled or at room temperature.",
    "Step 9: Pair with pickle or papad if desired.",
    "Step 10: Enjoy creamy and soothing Curd Rice.",
    "Step 11: Optionally, add a pinch of asafoetida for aroma."
  ],
  nutrition: { calories: 180, protein: 5, carbs: 35, fat: 5 }
},
{
  id: 109,
  name: "Idli with Sambar",
  category: "South Indian Special",
  imageName: "idli",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Idli Batter - 2 cups",
      "Toor Dal - ½ cup",
      "Tamarind - 1 tbsp, soaked in warm water",
      "Mixed Vegetables - 1 cup, chopped",
      "Sambar Powder - 1 tbsp",
      "Salt - to taste",
      "Water - 2 cups"
    ],
    optional: [
      "Curry Leaves - 10",
      "Coriander Leaves - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Prepare idli batter and steam idlis in an idli cooker for 10-12 minutes.",
    "Step 2: Cook toor dal until soft and mash lightly.",
    "Step 3: Prepare sambar by adding chopped vegetables, tamarind extract, and sambar powder in a pan.",
    "Step 4: Pour water and bring to a boil.",
    "Step 5: Add cooked dal to sambar and simmer for 10 minutes.",
    "Step 6: Add curry leaves and salt, cook for another 2 minutes.",
    "Step 7: Garnish sambar with chopped coriander leaves.",
    "Step 8: Serve hot idlis with sambar and coconut chutney on the side.",
    "Step 9: Enjoy soft, fluffy idlis with flavorful sambar.",
    "Step 10: Optionally, drizzle ghee on idlis for extra taste.",
    "Step 11: Ensure sambar consistency is medium-thick for perfect serving."
  ],
  nutrition: { calories: 220, protein: 7, carbs: 35, fat: 5 }
},
{
  id: 110,
  name: "Dosa with Chutney",
  category: "South Indian Special",
  imageName: "dosa",
  prepTime: "15 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Dosa Batter - 2 cups",
      "Oil - 1 tbsp",
      "Salt - to taste"
    ],
    optional: [
      "Coconut Chutney - ¼ cup",
      "Tomato Chutney - ¼ cup"
    ]
  },
  preparation: [
    "Step 1: Heat a non-stick pan or tawa on medium heat.",
    "Step 2: Pour a ladleful of dosa batter and spread in a thin circle.",
    "Step 3: Drizzle oil around edges and cook until crisp.",
    "Step 4: Flip the dosa if desired and cook briefly on the other side.",
    "Step 5: Prepare coconut chutney or tomato chutney separately.",
    "Step 6: Serve hot dosa with chutney on the side.",
    "Step 7: Roll dosa or fold into triangles for serving.",
    "Step 8: Adjust batter consistency for perfect thin dosas.",
    "Step 9: Optionally, add a pinch of salt to the pan before spreading batter.",
    "Step 10: Enjoy crispy, golden dosa with delicious chutney.",
    "Step 11: Serve immediately for best taste and texture."
  ],
  nutrition: { calories: 200, protein: 5, carbs: 35, fat: 5 }
},
// -------------------- North Indian Special --------------------
{
  id: 111,
  name: "Shahi Paneer",
  category: "North Indian Special",
  imageName: "shahi_paneer",
  prepTime: "15 mins",
  cookTime: "30 mins",
  ingredients: {
    main: [
      "Paneer - 200g",
      "Onion - 1 medium, chopped",
      "Tomato - 2 medium, chopped",
      "Cashews - 10 pieces",
      "Cream - 3 tbsp",
      "Ginger-Garlic Paste - 1 tsp",
      "Spices (garam masala, chili, coriander) - 1 tsp each"
    ],
    optional: ["Coriander Leaves - for garnish"]
  },
  preparation: [
    "Step 1: Soak cashews in warm water for 15 minutes and grind to a smooth paste.",
    "Step 2: Heat oil in a pan, sauté chopped onions until golden brown.",
    "Step 3: Add ginger-garlic paste and sauté until raw smell disappears.",
    "Step 4: Add chopped tomatoes and cook until soft and mushy.",
    "Step 5: Add cashew paste and spices, cook for 2-3 minutes.",
    "Step 6: Add paneer cubes and gently mix.",
    "Step 7: Pour cream and simmer for 5 minutes on low heat.",
    "Step 8: Adjust salt and consistency with water if needed.",
    "Step 9: Garnish with coriander leaves.",
    "Step 10: Serve hot with naan or steamed rice.",
    "Step 11: Enjoy the rich, creamy Shahi Paneer."
  ],
  nutrition: { calories: 350, protein: 14, carbs: 20, fat: 25 }
},
{
  id: 112,
  name: "Malai Kofta",
  category: "North Indian Special",
  imageName: "malai_kofta",
  prepTime: "25 mins",
  cookTime: "35 mins",
  ingredients: {
    main: [
      "Paneer - 150g",
      "Potato - 2 medium, boiled and mashed",
      "Cashews - 8 pieces, fried",
      "Cream - 3 tbsp",
      "Onion - 1 medium, chopped",
      "Tomato - 2 medium, chopped",
      "Ginger-Garlic Paste - 1 tsp",
      "Spices (garam masala, chili, coriander) - 1 tsp each"
    ],
    optional: ["Coriander Leaves - for garnish"]
  },
  preparation: [
    "Step 1: Mash boiled potatoes and crumbled paneer together.",
    "Step 2: Shape mixture into small balls, stuff with fried cashews.",
    "Step 3: Deep fry koftas until golden brown and set aside.",
    "Step 4: Heat oil in a pan, sauté chopped onions until golden brown.",
    "Step 5: Add ginger-garlic paste, sauté for 1 minute.",
    "Step 6: Add chopped tomatoes and cook until soft.",
    "Step 7: Add spices and cream, simmer to make gravy.",
    "Step 8: Gently add fried koftas into the gravy just before serving.",
    "Step 9: Adjust salt and consistency if needed.",
    "Step 10: Garnish with coriander leaves and serve hot with naan or rice.",
    "Step 11: Enjoy soft, creamy Malai Kofta."
  ],
  nutrition: { calories: 400, protein: 12, carbs: 30, fat: 28 }
},
{
  id: 113,
  name: "Bhindi Masala",
  category: "North Indian Special",
  imageName: "bhindi_masala",
  prepTime: "15 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Okra (Bhindi) - 250g",
      "Onion - 1 medium, chopped",
      "Tomato - 1 medium, chopped",
      "Turmeric Powder - ½ tsp",
      "Red Chili Powder - 1 tsp",
      "Coriander Powder - 1 tsp",
      "Oil - 2 tbsp"
    ],
    optional: ["Coriander Leaves - for garnish"]
  },
  preparation: [
    "Step 1: Wash and pat dry bhindi, cut into 1-inch pieces.",
    "Step 2: Heat oil in a pan and sauté chopped onions until translucent.",
    "Step 3: Add chopped tomatoes and cook until soft.",
    "Step 4: Add turmeric, red chili, and coriander powder, mix well.",
    "Step 5: Add bhindi pieces and cook on medium flame until tender.",
    "Step 6: Stir occasionally but gently to avoid sliminess.",
    "Step 7: Adjust salt according to taste.",
    "Step 8: Cook until bhindi is cooked but not mushy.",
    "Step 9: Garnish with coriander leaves.",
    "Step 10: Serve hot with chapati or steamed rice.",
    "Step 11: Enjoy flavorful Bhindi Masala."
  ],
  nutrition: { calories: 150, protein: 3, carbs: 15, fat: 8 }
},
{
  id: 114,
  name: "Chicken Tikka Masala",
  category: "North Indian Special",
  imageName: "chicken_tikka",
  prepTime: "20 mins",
  cookTime: "40 mins",
  ingredients: {
    main: [
      "Chicken - 500g, boneless",
      "Yogurt - ½ cup",
      "Onion - 1 medium, chopped",
      "Tomato - 2 medium, chopped",
      "Cream - 3 tbsp",
      "Ginger-Garlic Paste - 1 tsp",
      "Spices (garam masala, chili, turmeric) - 1 tsp each",
      "Oil - 2 tbsp"
    ],
    optional: ["Coriander Leaves - for garnish"]
  },
  preparation: [
    "Step 1: Marinate chicken in yogurt, ginger-garlic paste, and spices for at least 1 hour.",
    "Step 2: Grill or pan-fry chicken pieces until cooked through.",
    "Step 3: Heat oil in a pan, sauté onions until golden.",
    "Step 4: Add chopped tomatoes and cook until soft.",
    "Step 5: Add spices and simmer for 5 minutes.",
    "Step 6: Add grilled chicken to the sauce and cook for 5-7 minutes.",
    "Step 7: Pour cream and simmer for 2 minutes.",
    "Step 8: Adjust salt and consistency with water if needed.",
    "Step 9: Garnish with coriander leaves.",
    "Step 10: Serve hot with naan or steamed rice.",
    "Step 11: Enjoy rich Chicken Tikka Masala."
  ],
  nutrition: { calories: 380, protein: 28, carbs: 10, fat: 25 }
},
{
  id: 115,
  name: "Kadai Paneer",
  category: "North Indian Special",
  imageName: "kadai_paneer",
  prepTime: "15 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Paneer - 200g",
      "Onion - 1 medium, chopped",
      "Capsicum - 1 medium, chopped",
      "Tomato - 2 medium, chopped",
      "Spices (kadai masala, chili, coriander) - 1 tsp each",
      "Oil - 2 tbsp"
    ],
    optional: ["Coriander Leaves - for garnish"]
  },
  preparation: [
    "Step 1: Cut paneer into cubes and lightly fry until golden.",
    "Step 2: Heat oil in a pan and sauté onions and capsicum.",
    "Step 3: Add chopped tomatoes and cook until soft and mushy.",
    "Step 4: Add kadai masala and other spices, mix well.",
    "Step 5: Add fried paneer and cook for 5 minutes on medium heat.",
    "Step 6: Adjust salt and consistency with water if needed.",
    "Step 7: Garnish with coriander leaves.",
    "Step 8: Serve hot with naan, roti, or steamed rice.",
    "Step 9: Enjoy the spicy, tangy Kadai Paneer.",
    "Step 10: Ensure paneer remains soft and not overcooked.",
    "Step 11: Serve immediately for best taste."
  ],
  nutrition: { calories: 320, protein: 14, carbs: 15, fat: 20 }
},

{
  id: 116,
  name: "Litti Chokha",
  category: "North Indian Special",
  imageName: "litti_chokha",
  prepTime: "25 mins",
  cookTime: "45 mins",
  ingredients: {
    main: [
      "Wheat Flour - 1 cup",
      "Sattu (Roasted Gram Flour) - ½ cup",
      "Tomato - 1 medium, chopped",
      "Brinjal - 1 medium, roasted",
      "Potato - 1 medium, boiled",
      "Spices (salt, chili, coriander) - as needed",
      "Ghee - 2 tbsp"
    ],
    optional: ["Mustard Oil - 1 tsp"]
  },
  preparation: [
    "Step 1: Prepare dough from wheat flour and water, set aside.",
    "Step 2: Mix sattu with spices and stuff into small dough balls.",
    "Step 3: Bake or deep fry littis until golden brown.",
    "Step 4: Roast brinjal and tomato, boil potatoes for chokha.",
    "Step 5: Mash roasted vegetables and mix with spices and mustard oil.",
    "Step 6: Adjust salt and consistency.",
    "Step 7: Serve litti with chokha.",
    "Step 8: Drizzle ghee over litti while hot.",
    "Step 9: Ensure chokha is smooth but slightly chunky.",
    "Step 10: Enjoy traditional Litti Chokha.",
    "Step 11: Serve immediately for authentic taste."
  ],
  nutrition: { calories: 350, protein: 10, carbs: 45, fat: 15 }
},
{
  id: 117,
  name: "Makki Di Roti with Sarson Da Saag",
  category: "North Indian Special",
  imageName: "makki_di_roti_with_sarson_da_saag",
  prepTime: "30 mins",
  cookTime: "50 mins",
  ingredients: {
    main: [
      "Cornmeal (Makki ka Atta) - 1 cup",
      "Mustard Greens - 250g",
      "Spinach - 100g",
      "Onion - 1 medium, chopped",
      "Spices (salt, chili, turmeric) - as needed",
      "Butter - 2 tbsp",
      "Garlic - 2 cloves, minced"
    ],
    optional: []
  },
  preparation: [
    "Step 1: Prepare dough from cornmeal and water for rotis.",
    "Step 2: Roll out small rotis carefully on a flat surface.",
    "Step 3: Cook rotis on a hot griddle until crisp on both sides.",
    "Step 4: Boil mustard greens and spinach, blend to a coarse paste.",
    "Step 5: Heat oil, sauté onions and garlic, add greens paste and spices.",
    "Step 6: Simmer for 20 minutes, stirring occasionally.",
    "Step 7: Add butter and mix well.",
    "Step 8: Adjust salt and consistency.",
    "Step 9: Serve hot with freshly made makki di roti.",
    "Step 10: Enjoy this classic Punjabi combo.",
    "Step 11: Best served with jaggery or butter on the side."
  ],
  nutrition: { calories: 400, protein: 12, carbs: 50, fat: 20 }
},
{
  id: 118,
  name: "Gatte Ki Sabzi",
  category: "North Indian Special",
  imageName: "gatte_ki_sabzi",
  prepTime: "20 mins",
  cookTime: "35 mins",
  ingredients: {
    main: [
      "Gram Flour (Besan) - 1 cup",
      "Yogurt - ½ cup",
      "Onion - 1 medium, chopped",
      "Tomato - 1 medium, chopped",
      "Spices (turmeric, chili, coriander) - as needed",
      "Oil - 2 tbsp"
    ],
    optional: ["Coriander Leaves - for garnish"]
  },
  preparation: [
    "Step 1: Mix gram flour with spices and water to make dough.",
    "Step 2: Roll into small cylindrical shapes and boil in water for 10 minutes.",
    "Step 3: Prepare yogurt-based gravy with sautéed onions, tomatoes, and spices.",
    "Step 4: Add boiled gatte pieces into the gravy.",
    "Step 5: Simmer for 10-15 minutes to absorb flavors.",
    "Step 6: Adjust salt and consistency with water if needed.",
    "Step 7: Garnish with coriander leaves.",
    "Step 8: Serve hot with roti or rice.",
    "Step 9: Ensure gatte is soft but firm.",
    "Step 10: Stir occasionally to prevent sticking.",
    "Step 11: Enjoy authentic Rajasthani Gatte Ki Sabzi."
  ],
  nutrition: { calories: 320, protein: 10, carbs: 30, fat: 18 }
},
{
  id: 119,
  name: "Aloo Gobi",
  category: "North Indian Special",
  imageName: "aloo_gobi",
  prepTime: "15 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Potato - 2 medium, diced",
      "Cauliflower - 1 medium, cut into florets",
      "Onion - 1 medium, chopped",
      "Tomato - 1 medium, chopped",
      "Spices (turmeric, chili, coriander) - as needed",
      "Oil - 2 tbsp"
    ],
    optional: ["Coriander Leaves - for garnish"]
  },
  preparation: [
    "Step 1: Heat oil and sauté onions until translucent.",
    "Step 2: Add tomatoes and cook until soft.",
    "Step 3: Add spices and mix well.",
    "Step 4: Add potatoes and cauliflower, stir gently.",
    "Step 5: Cover and cook on medium flame until tender.",
    "Step 6: Stir occasionally to prevent sticking.",
    "Step 7: Adjust salt according to taste.",
    "Step 8: Garnish with coriander leaves.",
    "Step 9: Serve hot with roti or steamed rice.",
    "Step 10: Ensure vegetables are cooked but not mushy.",
    "Step 11: Enjoy classic Aloo Gobi."
  ],
  nutrition: { calories: 220, protein: 5, carbs: 35, fat: 8 }
},
{
  id: 120,
  name: "Matar Paneer",
  category: "North Indian Special",
  imageName: "matar_paneer",
  prepTime: "15 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Paneer - 200g, cubed",
      "Green Peas - 1 cup",
      "Onion - 1 medium, chopped",
      "Tomato - 2 medium, chopped",
      "Spices (garam masala, chili, coriander) - 1 tsp each",
      "Oil - 2 tbsp",
      "Cream - 2 tbsp"
    ],
    optional: ["Coriander Leaves - for garnish"]
  },
  preparation: [
    "Step 1: Heat oil in a pan and sauté onions until golden brown.",
    "Step 2: Add tomatoes and cook until mushy.",
    "Step 3: Add spices and simmer for 2 minutes.",
    "Step 4: Add green peas and cook until tender.",
    "Step 5: Add paneer cubes and simmer for 5 minutes.",
    "Step 6: Pour cream and mix gently.",
    "Step 7: Adjust salt and consistency with water if needed.",
    "Step 8: Garnish with coriander leaves.",
    "Step 9: Serve hot with roti or steamed rice.",
    "Step 10: Ensure paneer remains soft and creamy.",
    "Step 11: Enjoy delicious Matar Paneer."
  ],
  nutrition: { calories: 280, protein: 12, carbs: 20, fat: 18 }
},

{
  id: 121,
  name: "Amritsari Kulcha",
  category: "North Indian Special",
  imageName: "amritsari_kulcha",
  prepTime: "20 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Wheat Flour - 1 cup",
      "Potato - 1 medium, boiled and mashed",
      "Onion - ½ cup, finely chopped",
      "Spices (salt, chili, coriander) - as needed",
      "Butter - 2 tbsp",
      "Yogurt - 2 tbsp"
    ],
    optional: ["Coriander Leaves - for garnish"]
  },
  preparation: [
    "Step 1: Prepare dough from wheat flour, yogurt, and a pinch of salt.",
    "Step 2: Mix boiled potatoes with chopped onions and spices.",
    "Step 3: Stuff potato-onion mixture into small dough balls.",
    "Step 4: Roll out stuffed balls gently into flat discs.",
    "Step 5: Heat a griddle or tawa and cook kulchas until golden on both sides.",
    "Step 6: Brush with butter while hot.",
    "Step 7: Garnish with coriander leaves.",
    "Step 8: Serve hot with chole or yogurt.",
    "Step 9: Ensure kulchas are soft inside and crisp outside.",
    "Step 10: Enjoy authentic Amritsari Kulcha.",
    "Step 11: Best served immediately for taste."
  ],
  nutrition: { calories: 300, protein: 8, carbs: 40, fat: 12 }
},
{
  id: 122,
  name: "Rogan Josh",
  category: "North Indian Special",
  imageName: "rogan_josh",
  prepTime: "25 mins",
  cookTime: "60 mins",
  ingredients: {
    main: [
      "Mutton - 500g, cut into pieces",
      "Onion - 1 large, chopped",
      "Tomato - 2 medium, chopped",
      "Yogurt - ½ cup",
      "Ginger-Garlic Paste - 2 tbsp",
      "Spices (garam masala, chili, turmeric, coriander) - as needed",
      "Oil - 2 tbsp"
    ],
    optional: ["Coriander Leaves - for garnish"]
  },
  preparation: [
    "Step 1: Marinate mutton with yogurt, ginger-garlic paste, and spices for 1 hour.",
    "Step 2: Heat oil in a heavy-bottomed pan and sauté onions until golden brown.",
    "Step 3: Add marinated mutton and sear on high heat for 5 minutes.",
    "Step 4: Add tomatoes and cook until soft.",
    "Step 5: Add water, cover, and simmer on low heat for 45-50 minutes until mutton is tender.",
    "Step 6: Adjust salt and spices according to taste.",
    "Step 7: Garnish with coriander leaves.",
    "Step 8: Serve hot with naan or rice.",
    "Step 9: Ensure gravy is thick and flavorful.",
    "Step 10: Stir occasionally to prevent sticking.",
    "Step 11: Enjoy rich and aromatic Rogan Josh."
  ],
  nutrition: { calories: 420, protein: 28, carbs: 10, fat: 28 }
},
{
  id: 123,
  name: "Kadhi Pakora",
  category: "North Indian Special",
  imageName: "kadhi_pakora",
  prepTime: "20 mins",
  cookTime: "40 mins",
  ingredients: {
    main: [
      "Gram Flour (Besan) - 1 cup",
      "Yogurt - 1 cup",
      "Onion - 1 medium, chopped",
      "Spices (turmeric, chili, coriander) - as needed",
      "Oil - 2 tbsp",
      "Water - 2 cups"
    ],
    optional: ["Coriander Leaves - for garnish", "Green Chili - 1, sliced"]
  },
  preparation: [
    "Step 1: Prepare a batter from gram flour and water for pakoras.",
    "Step 2: Deep fry small pakora balls until golden brown.",
    "Step 3: Mix yogurt with gram flour to make kadhi base, add water and spices.",
    "Step 4: Cook kadhi base on low heat, stirring continuously to prevent lumps.",
    "Step 5: Add fried pakoras into the kadhi and simmer for 10 minutes.",
    "Step 6: Adjust salt and consistency.",
    "Step 7: Garnish with coriander leaves and green chili slices.",
    "Step 8: Serve hot with steamed rice.",
    "Step 9: Ensure pakoras remain soft in kadhi.",
    "Step 10: Stir gently to avoid breaking pakoras.",
    "Step 11: Enjoy traditional North Indian Kadhi Pakora."
  ],
  nutrition: { calories: 250, protein: 8, carbs: 25, fat: 12 }
},
{
  id: 124,
  name: "Tandoori Chicken",
  category: "North Indian Special",
  imageName: "tandoori_chicken",
  prepTime: "20 mins",
  cookTime: "40 mins",
  ingredients: {
    main: [
      "Chicken - 500g, cut into pieces",
      "Yogurt - ½ cup",
      "Ginger-Garlic Paste - 2 tbsp",
      "Spices (garam masala, chili, turmeric) - as needed",
      "Lemon Juice - 2 tbsp",
      "Oil - 1 tbsp"
    ],
    optional: ["Coriander Leaves - for garnish"]
  },
  preparation: [
    "Step 1: Clean and score chicken pieces.",
    "Step 2: Marinate chicken in yogurt, ginger-garlic paste, spices, and lemon juice for 1-2 hours.",
    "Step 3: Preheat oven or grill to high temperature.",
    "Step 4: Place chicken on skewers or tray and cook for 20-25 minutes.",
    "Step 5: Turn halfway for even cooking and brush with marinade if required.",
    "Step 6: Check doneness ensuring juices run clear.",
    "Step 7: Garnish with coriander leaves.",
    "Step 8: Serve hot with mint chutney.",
    "Step 9: Ensure chicken is smoky and tender.",
    "Step 10: Adjust spices to taste.",
    "Step 11: Enjoy classic Tandoori Chicken."
  ],
  nutrition: { calories: 350, protein: 30, carbs: 5, fat: 22 }
},
{
  id: 125,
  name: "Dal Baati Churma",
  category: "North Indian Special",
  imageName: "dal_baati_churma",
  prepTime: "30 mins",
  cookTime: "50 mins",
  ingredients: {
    main: [
      "Wheat Flour - 2 cups",
      "Lentils (Toor Dal) - 1 cup",
      "Ghee - 3 tbsp",
      "Spices (turmeric, chili, coriander) - as needed",
      "Sugar or Jaggery - ½ cup for churma"
    ],
    optional: ["Water - as needed"]
  },
  preparation: [
    "Step 1: Prepare baati dough with wheat flour, ghee, and water.",
    "Step 2: Shape into small round balls and bake or roast until golden brown.",
    "Step 3: Cook lentils with spices to prepare dal, add tempered spices.",
    "Step 4: For churma, crush baked baati and mix with ghee and sugar or jaggery.",
    "Step 5: Serve baati with hot dal and churma on the side.",
    "Step 6: Drizzle extra ghee over baati if desired.",
    "Step 7: Ensure dal is smooth and flavorful.",
    "Step 8: Adjust seasoning to taste.",
    "Step 9: Serve immediately for authentic taste.",
    "Step 10: Enjoy traditional Rajasthani Dal Baati Churma.",
    "Step 11: Pair with pickle or salad if desired."
  ],
  nutrition: { calories: 450, protein: 15, carbs: 50, fat: 22 }
},

{
  id: 126,
  name: "Chole Bhature",
  category: "North Indian Special",
  imageName: "chole_bhature",
  prepTime: "25 mins",
  cookTime: "45 mins",
  ingredients: {
    main: [
      "Chickpeas - 1 cup, soaked overnight",
      "Onion - 1 medium, chopped",
      "Tomato - 2 medium, chopped",
      "Spices (turmeric, chili, coriander, garam masala) - as needed",
      "Wheat Flour - 2 cups for bhature",
      "Yogurt - 2 tbsp",
      "Oil - for frying"
    ],
    optional: ["Coriander Leaves - for garnish"]
  },
  preparation: [
    "Step 1: Boil chickpeas until soft.",
    "Step 2: Prepare onion-tomato gravy with spices.",
    "Step 3: Add boiled chickpeas to gravy and simmer for 15 minutes.",
    "Step 4: Prepare dough for bhature with wheat flour, yogurt, and a pinch of salt.",
    "Step 5: Roll out dough balls into thick circles.",
    "Step 6: Deep fry bhature until puffed and golden brown.",
    "Step 7: Serve hot with chole and garnish with coriander leaves.",
    "Step 8: Ensure bhature are soft inside and crisp outside.",
    "Step 9: Adjust spices in chole according to taste.",
    "Step 10: Serve immediately for best taste.",
    "Step 11: Enjoy classic Chole Bhature."
  ],
  nutrition: { calories: 500, protein: 18, carbs: 60, fat: 20 }
},
{
  id: 127,
  name: "Paneer Butter Masala",
  category: "North Indian Special",
  imageName: "paneer_butter_masala",
  prepTime: "15 mins",
  cookTime: "30 mins",
  ingredients: {
    main: [
      "Paneer - 200g, cubed",
      "Tomato - 2 medium, pureed",
      "Onion - 1 medium, chopped",
      "Butter - 2 tbsp",
      "Cream - ¼ cup",
      "Spices (garam masala, chili, turmeric, coriander) - as needed"
    ],
    optional: ["Coriander Leaves - for garnish"]
  },
  preparation: [
    "Step 1: Sauté onions until golden in butter.",
    "Step 2: Add tomato puree and cook until oil separates.",
    "Step 3: Add spices and simmer for 2 minutes.",
    "Step 4: Add paneer cubes and mix gently.",
    "Step 5: Pour cream and cook for 5 more minutes.",
    "Step 6: Adjust salt and consistency with water if needed.",
    "Step 7: Garnish with coriander leaves.",
    "Step 8: Serve with naan or rice.",
    "Step 9: Ensure paneer remains soft and creamy.",
    "Step 10: Stir gently to maintain gravy consistency.",
    "Step 11: Enjoy rich and flavorful Paneer Butter Masala."
  ],
  nutrition: { calories: 380, protein: 14, carbs: 20, fat: 28 }
},
{
  id: 128,
  name: "Rajma Masala",
  category: "North Indian Special",
  imageName: "rajma_masala",
  prepTime: "15 mins",
  cookTime: "40 mins",
  ingredients: {
    main: [
      "Kidney Beans - 1 cup, soaked overnight",
      "Onion - 1 medium, chopped",
      "Tomato - 2 medium, chopped",
      "Ginger-Garlic Paste - 1 tbsp",
      "Spices (garam masala, chili, turmeric, coriander) - as needed",
      "Oil - 2 tbsp",
      "Water - 2 cups"
    ],
    optional: ["Coriander Leaves - for garnish"]
  },
  preparation: [
    "Step 1: Boil kidney beans until soft.",
    "Step 2: Heat oil and sauté onions until golden brown.",
    "Step 3: Add ginger-garlic paste and cook for 2 minutes.",
    "Step 4: Add tomatoes and cook until soft.",
    "Step 5: Add boiled kidney beans and spices, simmer for 10-15 minutes.",
    "Step 6: Adjust salt and consistency with water if required.",
    "Step 7: Garnish with coriander leaves.",
    "Step 8: Serve with steamed rice or roti.",
    "Step 9: Ensure gravy is thick and flavorful.",
    "Step 10: Stir occasionally to prevent sticking.",
    "Step 11: Enjoy classic Rajma Masala."
  ],
  nutrition: { calories: 350, protein: 15, carbs: 40, fat: 10 }
},
{
  id: 129,
  name: "Butter Chicken",
  category: "North Indian Special",
  imageName: "butter_chicken",
  prepTime: "20 mins",
  cookTime: "40 mins",
  ingredients: {
    main: [
      "Chicken - 500g, cut into pieces",
      "Tomato - 2 medium, pureed",
      "Cream - ¼ cup",
      "Butter - 2 tbsp",
      "Spices (garam masala, chili, turmeric, coriander) - as needed",
      "Yogurt - 2 tbsp",
      "Oil - 1 tbsp"
    ],
    optional: ["Coriander Leaves - for garnish"]
  },
  preparation: [
    "Step 1: Marinate chicken in yogurt and spices for 1 hour.",
    "Step 2: Grill or pan-fry chicken pieces until partially cooked.",
    "Step 3: Heat butter in a pan and sauté onions until golden.",
    "Step 4: Add tomato puree and cook until oil separates.",
    "Step 5: Add spices and simmer for 5 minutes.",
    "Step 6: Add chicken pieces and cook until fully done.",
    "Step 7: Pour cream, mix gently, and cook for 3-5 minutes.",
    "Step 8: Garnish with coriander leaves.",
    "Step 9: Serve hot with naan or rice.",
    "Step 10: Ensure chicken is tender and creamy.",
    "Step 11: Enjoy flavorful Butter Chicken."
  ],
  nutrition: { calories: 400, protein: 28, carbs: 12, fat: 26 }
},
{
  id: 130,
  name: "Jeera Aloo",
  category: "North Indian Special",
  imageName: "jeera_aloo",
  prepTime: "10 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Potato - 3 medium, boiled and cubed",
      "Cumin Seeds - 1 tsp",
      "Oil - 2 tbsp",
      "Spices (turmeric, chili, coriander) - as needed",
      "Green Chili - 1, sliced"
    ],
    optional: ["Coriander Leaves - for garnish"]
  },
  preparation: [
    "Step 1: Boil and cube potatoes, keep aside.",
    "Step 2: Heat oil in a pan, add cumin seeds and let them splutter.",
    "Step 3: Add green chilies and sauté for a minute.",
    "Step 4: Add potato cubes and mix well with spices.",
    "Step 5: Cook on medium flame for 10 minutes until potatoes are slightly crispy.",
    "Step 6: Adjust salt to taste.",
    "Step 7: Garnish with coriander leaves.",
    "Step 8: Serve hot with roti or paratha.",
    "Step 9: Ensure potatoes are cooked evenly.",
    "Step 10: Stir occasionally to avoid sticking.",
    "Step 11: Enjoy simple and flavorful Jeera Aloo."
  ],
  nutrition: { calories: 200, protein: 4, carbs: 25, fat: 10 }
},
// -------------------- Chinese Recipes --------------------
{
  id: 131,
  name: "Schezwan Fried Rice",
  category: "Chinese Recipes",
  imageName: "schezwan_fried_rice",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Cooked Rice - 2 cups",
      "Bell Peppers - ½ cup, chopped",
      "Carrot - ½ cup, chopped",
      "Spring Onion - ¼ cup, chopped",
      "Schezwan Sauce - 2 tbsp",
      "Garlic - 3 cloves, minced",
      "Oil - 2 tbsp"
    ],
    optional: [
      "Soy Sauce - 1 tbsp",
      "Chili Sauce - 1 tsp"
    ]
  },
  preparation: [
    "Step 1: Chop all vegetables into small cubes.",
    "Step 2: Heat oil in a wok and sauté minced garlic until fragrant.",
    "Step 3: Add chopped bell peppers and carrot, stir-fry for 3-4 minutes.",
    "Step 4: Add cooked rice and mix thoroughly with vegetables.",
    "Step 5: Pour in Schezwan sauce and toss until evenly coated.",
    "Step 6: Add soy sauce and chili sauce to taste and mix well.",
    "Step 7: Stir in chopped spring onions and cook for 1-2 minutes.",
    "Step 8: Check seasoning and adjust salt if needed.",
    "Step 9: Serve hot in a bowl or plate.",
    "Step 10: Optionally, sprinkle toasted sesame seeds for extra flavor.",
    "Step 11: Enjoy the spicy Schezwan Fried Rice."
  ],
  nutrition: { calories: 300, protein: 7, carbs: 55, fat: 8 }
},
{
  id: 132,
  name: "Egg Noodles",
  category: "Chinese Recipes",
  imageName: "egg_noodles",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Egg Noodles - 200g",
      "Carrot - ½ cup, julienned",
      "Capsicum - ½ cup, sliced",
      "Onion - ¼ cup, sliced",
      "Garlic - 2 cloves, minced",
      "Oil - 2 tbsp",
      "Soy Sauce - 2 tbsp"
    ],
    optional: [
      "Spring Onion - 2 tbsp, chopped",
      "Chili Sauce - 1 tsp"
    ]
  },
  preparation: [
    "Step 1: Boil egg noodles until just cooked, drain and set aside.",
    "Step 2: Heat oil in a wok, sauté minced garlic until fragrant.",
    "Step 3: Add carrots, capsicum, and onions, stir-fry for 3-4 minutes.",
    "Step 4: Add boiled noodles and mix well with vegetables.",
    "Step 5: Pour in soy sauce and toss evenly.",
    "Step 6: Add chili sauce if desired for spice and mix.",
    "Step 7: Stir in chopped spring onions.",
    "Step 8: Cook for another 2-3 minutes until noodles absorb flavor.",
    "Step 9: Taste and adjust seasoning.",
    "Step 10: Serve hot as a main or side dish.",
    "Step 11: Enjoy flavorful Egg Noodles."
  ],
  nutrition: { calories: 280, protein: 8, carbs: 50, fat: 6 }
},
{
  id: 133,
  name: "Gobi Manchurian",
  category: "Chinese Recipes",
  imageName: "gobi_manchurian",
  prepTime: "20 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Cauliflower - 1 medium, cut into florets",
      "Cornflour - 3 tbsp",
      "All-purpose Flour - 2 tbsp",
      "Garlic - 3 cloves, minced",
      "Soy Sauce - 1 tbsp",
      "Chili Sauce - 2 tbsp",
      "Oil - ½ cup for frying",
      "Sugar - 1 tsp",
      "Salt - ½ tsp"
    ],
    optional: [
      "Spring Onion - 2 tbsp, chopped",
      "Coriander Leaves - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Blanch cauliflower florets in hot water for 2 minutes.",
    "Step 2: Prepare batter with cornflour, all-purpose flour, salt, and water.",
    "Step 3: Dip cauliflower florets in batter and deep fry until golden brown.",
    "Step 4: Heat oil in a pan, sauté minced garlic until fragrant.",
    "Step 5: Add soy sauce, chili sauce, and sugar to the pan and mix well.",
    "Step 6: Toss fried cauliflower florets in the sauce until coated evenly.",
    "Step 7: Cook for 2-3 minutes until sauce thickens slightly.",
    "Step 8: Garnish with chopped spring onions and coriander leaves.",
    "Step 9: Serve hot as a starter or side dish.",
    "Step 10: Optionally, add a pinch of black pepper for extra flavor.",
    "Step 11: Enjoy crispy and spicy Gobi Manchurian."
  ],
  nutrition: { calories: 250, protein: 6, carbs: 35, fat: 10 }
},
{
  id: 134,
  name: "Chilli Paneer",
  category: "Chinese Recipes",
  imageName: "chilli_paneer",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Paneer Cubes - 200g",
      "Bell Peppers - ½ cup, chopped",
      "Onion - ½ cup, chopped",
      "Garlic - 3 cloves, minced",
      "Chili Sauce - 2 tbsp",
      "Soy Sauce - 1 tbsp",
      "Oil - 3 tbsp for frying",
      "Sugar - ½ tsp",
      "Salt - ¼ tsp"
    ],
    optional: [
      "Spring Onion - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Cut paneer into cubes and shallow fry until golden brown.",
    "Step 2: Heat oil in a pan, sauté minced garlic until fragrant.",
    "Step 3: Add chopped onions and bell peppers and stir-fry for 2-3 minutes.",
    "Step 4: Add soy sauce, chili sauce, sugar, and salt to the pan.",
    "Step 5: Toss fried paneer in the sauce until well coated.",
    "Step 6: Cook for 2-3 minutes until sauce thickens slightly.",
    "Step 7: Stir in chopped spring onions.",
    "Step 8: Taste and adjust seasoning.",
    "Step 9: Serve hot as a starter or with fried rice.",
    "Step 10: Optionally, sprinkle sesame seeds on top.",
    "Step 11: Enjoy spicy Chilli Paneer."
  ],
  nutrition: { calories: 320, protein: 14, carbs: 18, fat: 20 }
},
{
  id: 135,
  name: "Chilli Chicken",
  category: "Chinese Recipes",
  imageName: "chilli_chicken",
  prepTime: "20 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Chicken Cubes - 250g",
      "Garlic - 4 cloves, minced",
      "Ginger - 1 inch, minced",
      "Bell Peppers - ½ cup, chopped",
      "Onion - ½ cup, chopped",
      "Soy Sauce - 1 tbsp",
      "Chili Sauce - 2 tbsp",
      "Oil - 4 tbsp for frying",
      "Salt - ½ tsp",
      "Sugar - ½ tsp"
    ],
    optional: [
      "Spring Onion - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Marinate chicken cubes with soy sauce, chili sauce, salt, and sugar for 15 minutes.",
    "Step 2: Heat oil in a wok and deep fry chicken until golden brown.",
    "Step 3: In another pan, sauté minced garlic and ginger until fragrant.",
    "Step 4: Add chopped onions and bell peppers, stir-fry for 2-3 minutes.",
    "Step 5: Add fried chicken to the pan and toss with sauce.",
    "Step 6: Cook for another 5 minutes until chicken absorbs the flavors.",
    "Step 7: Garnish with chopped spring onions.",
    "Step 8: Taste and adjust seasoning if needed.",
    "Step 9: Serve hot as a starter or with noodles/rice.",
    "Step 10: Optionally, sprinkle black pepper for extra spice.",
    "Step 11: Enjoy flavorful Chilli Chicken."
  ],
  nutrition: { calories: 350, protein: 25, carbs: 15, fat: 20 }
},

{
  id: 136,
  name: "Hot & Sour Soup",
  category: "Chinese Recipes",
  imageName: "hot_and_sour",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Mixed Vegetables - 1 cup, julienned",
      "Tofu - 100g, cubed",
      "Vinegar - 2 tsp",
      "Soy Sauce - 2 tbsp",
      "Chili Sauce - 1 tsp",
      "Cornflour - 2 tsp",
      "Water - 2 cups",
      "Oil - 1 tbsp",
      "Salt - ½ tsp"
    ],
    optional: [
      "Egg - 1, beaten",
      "Spring Onion - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Chop vegetables into thin strips.",
    "Step 2: Boil water in a pot and add vegetables and tofu.",
    "Step 3: Add soy sauce, vinegar, chili sauce, and salt to taste.",
    "Step 4: Mix cornflour with a little water to make a slurry.",
    "Step 5: Slowly add cornflour slurry to the boiling soup while stirring.",
    "Step 6: Bring to a boil and simmer for 5 minutes until slightly thickened.",
    "Step 7: Optionally, add beaten egg slowly while stirring to create egg ribbons.",
    "Step 8: Taste and adjust seasoning.",
    "Step 9: Garnish with chopped spring onions.",
    "Step 10: Serve hot as a starter.",
    "Step 11: Enjoy the tangy and spicy Hot & Sour Soup."
  ],
  nutrition: { calories: 120, protein: 5, carbs: 15, fat: 5 }
},
{
  id: 137,
  name: "Sweet Corn Soup",
  category: "Chinese Recipes",
  imageName: "sweet_corn_soup",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Corn Kernels - 1 cup",
      "Vegetable Broth - 2 cups",
      "Garlic - 2 cloves, minced",
      "Ginger - 1 tsp, minced",
      "Cornflour - 1 tsp",
      "Oil - 1 tbsp",
      "Salt - ½ tsp",
      "Pepper - ¼ tsp"
    ],
    optional: [
      "Egg - 1, beaten",
      "Spring Onion - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Boil corn kernels until soft and slightly mash them.",
    "Step 2: Heat oil in a pan and sauté garlic and ginger until fragrant.",
    "Step 3: Add vegetable broth and bring to a boil.",
    "Step 4: Add mashed corn and simmer for 5 minutes.",
    "Step 5: Mix cornflour with water to make slurry and add to soup.",
    "Step 6: Optionally, add beaten egg slowly to create egg ribbons.",
    "Step 7: Season with salt and pepper to taste.",
    "Step 8: Garnish with chopped spring onions.",
    "Step 9: Serve hot as a starter.",
    "Step 10: Enjoy the smooth and sweet flavor.",
    "Step 11: Adjust consistency if needed by adding more broth."
  ],
  nutrition: { calories: 150, protein: 5, carbs: 25, fat: 4 }
},
{
  id: 138,
  name: "Honey Chilli Potato",
  category: "Chinese Recipes",
  imageName: "honey_chilli_potato",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Potatoes - 2 large, cut into thin strips",
      "Honey - 2 tbsp",
      "Chili Sauce - 1 tbsp",
      "Soy Sauce - 1 tbsp",
      "Garlic - 2 cloves, minced",
      "Oil - ½ cup for frying",
      "Salt - ½ tsp"
    ],
    optional: [
      "Spring Onion - 2 tbsp, chopped",
      "Sesame Seeds - 1 tsp"
    ]
  },
  preparation: [
    "Step 1: Cut potatoes into thin strips and soak in water for 10 minutes.",
    "Step 2: Heat oil in a pan and deep fry potato strips until crispy.",
    "Step 3: Drain excess oil on paper towels.",
    "Step 4: Heat 1 tbsp oil in another pan, sauté garlic until fragrant.",
    "Step 5: Add soy sauce, chili sauce, and honey to the pan and mix well.",
    "Step 6: Add fried potatoes and toss until evenly coated with the sauce.",
    "Step 7: Cook for 2-3 minutes until sauce thickens slightly.",
    "Step 8: Garnish with chopped spring onions and sesame seeds.",
    "Step 9: Taste and adjust seasoning if needed.",
    "Step 10: Serve hot as a snack or side dish.",
    "Step 11: Enjoy sweet and spicy Honey Chilli Potato."
  ],
  nutrition: { calories: 300, protein: 4, carbs: 45, fat: 10 }
},
{
  id: 139,
  name: "Veg Lollipop",
  category: "Chinese Recipes",
  imageName: "veg_lollipop",
  prepTime: "20 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Cabbage - ½ cup, finely chopped",
      "Carrot - ½ cup, grated",
      "Bell Peppers - ½ cup, finely chopped",
      "Cornflour - 3 tbsp",
      "All-purpose Flour - 2 tbsp",
      "Spices - 1 tsp (cumin & pepper mix)",
      "Oil - ½ cup for frying",
      "Salt - ½ tsp"
    ],
    optional: [
      "Spring Onion - 2 tbsp, chopped",
      "Chili Sauce - 1 tbsp"
    ]
  },
  preparation: [
    "Step 1: Finely chop all vegetables and mix with spices and salt.",
    "Step 2: Prepare batter with cornflour and all-purpose flour.",
    "Step 3: Shape vegetable mixture into small lollipop shapes using skewers.",
    "Step 4: Dip lollipops in batter and deep fry until golden brown.",
    "Step 5: Drain excess oil on paper towels.",
    "Step 6: Heat oil in a pan, add chili sauce and soy sauce to make a glaze.",
    "Step 7: Coat fried lollipops with the glaze evenly.",
    "Step 8: Garnish with chopped spring onions.",
    "Step 9: Serve hot as a starter.",
    "Step 10: Taste and adjust seasoning.",
    "Step 11: Enjoy crispy and spicy Veg Lollipop."
  ],
  nutrition: { calories: 250, protein: 6, carbs: 30, fat: 12 }
},
{
  id: 140,
  name: "Manchow Soup",
  category: "Chinese Recipes",
  imageName: "manchow_soup",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Mixed Vegetables - 1 cup, chopped finely",
      "Garlic - 2 cloves, minced",
      "Ginger - 1 tsp, minced",
      "Soy Sauce - 2 tsp",
      "Chili Sauce - 1 tsp",
      "Cornflour - 2 tsp",
      "Tofu - 50g, cubed",
      "Water - 2 cups",
      "Oil - 1 tbsp",
      "Salt - ½ tsp"
    ],
    optional: [
      "Spring Onion - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Chop vegetables finely and set aside.",
    "Step 2: Boil water in a pot, add garlic and ginger.",
    "Step 3: Add chopped vegetables and tofu, simmer for 5 minutes.",
    "Step 4: Add soy sauce, chili sauce, and salt to taste.",
    "Step 5: Mix cornflour with water to make a slurry and add to soup.",
    "Step 6: Simmer for 3-4 minutes until slightly thickened.",
    "Step 7: Stir in chopped spring onions.",
    "Step 8: Taste and adjust seasoning if needed.",
    "Step 9: Serve hot with fried noodles or as a starter.",
    "Step 10: Optionally, drizzle a few drops of sesame oil.",
    "Step 11: Enjoy the flavorful Manchow Soup."
  ],
  nutrition: { calories: 130, protein: 6, carbs: 20, fat: 5 }
},

{
  id: 141,
  name: "Schezwan Noodles",
  category: "Chinese Recipes",
  imageName: "schezwan_noodles",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Boiled Noodles - 200g",
      "Bell Peppers - ½ cup, thinly sliced",
      "Carrot - ½ cup, julienned",
      "Spring Onion - 3 tbsp, chopped",
      "Schezwan Sauce - 2 tbsp",
      "Oil - 1 tbsp",
      "Garlic - 2 cloves, minced",
      "Ginger - 1 tsp, minced",
      "Salt - ½ tsp"
    ],
    optional: [
      "Soy Sauce - 1 tsp",
      "Chili Sauce - 1 tsp"
    ]
  },
  preparation: [
    "Step 1: Chop all vegetables into thin strips.",
    "Step 2: Heat oil in a pan and sauté garlic and ginger until fragrant.",
    "Step 3: Add bell peppers and carrot, stir-fry for 3-4 minutes.",
    "Step 4: Add boiled noodles to the pan and toss well with vegetables.",
    "Step 5: Pour Schezwan sauce and mix evenly.",
    "Step 6: Add optional soy sauce and chili sauce if desired.",
    "Step 7: Stir-fry for 2-3 minutes until noodles absorb the sauce.",
    "Step 8: Garnish with chopped spring onions.",
    "Step 9: Taste and adjust seasoning.",
    "Step 10: Serve hot as a main or side dish.",
    "Step 11: Enjoy the spicy and tangy Schezwan Noodles."
  ],
  nutrition: { calories: 320, protein: 8, carbs: 55, fat: 10 }
},
{
  id: 142,
  name: "Chicken Lollipop",
  category: "Chinese Recipes",
  imageName: "chicken_lollipop",
  prepTime: "20 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Chicken Wings - 500g",
      "Garlic - 2 cloves, minced",
      "Ginger - 1 tsp, minced",
      "Soy Sauce - 2 tbsp",
      "Chili Sauce - 1 tbsp",
      "Cornflour - 2 tbsp",
      "Oil - ½ cup for frying",
      "Salt - ½ tsp"
    ],
    optional: [
      "Spring Onion - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Marinate chicken wings with soy sauce, chili sauce, and salt for 15 minutes.",
    "Step 2: Coat marinated wings with cornflour evenly.",
    "Step 3: Heat oil in a deep pan and deep fry wings until golden and crisp.",
    "Step 4: Drain excess oil on paper towels.",
    "Step 5: Heat 1 tbsp oil in another pan, sauté garlic and ginger until fragrant.",
    "Step 6: Add fried wings to the pan and toss with remaining sauce.",
    "Step 7: Cook for 3-4 minutes until wings absorb the flavor.",
    "Step 8: Garnish with chopped spring onions.",
    "Step 9: Taste and adjust seasoning if needed.",
    "Step 10: Serve hot as an appetizer.",
    "Step 11: Optionally, drizzle extra sauce for more flavor."
  ],
  nutrition: { calories: 350, protein: 25, carbs: 12, fat: 18 }
},
{
  id: 143,
  name: "Garlic Noodles",
  category: "Chinese Recipes",
  imageName: "garlic_noodles",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Boiled Noodles - 200g",
      "Garlic - 3 cloves, minced",
      "Butter - 2 tbsp",
      "Soy Sauce - 1 tbsp",
      "Spring Onion - 2 tbsp, chopped",
      "Salt - ½ tsp",
      "Oil - 1 tsp"
    ],
    optional: [
      "Chili Flakes - ½ tsp"
    ]
  },
  preparation: [
    "Step 1: Boil noodles and keep aside.",
    "Step 2: Heat butter and oil in a pan, sauté minced garlic until golden brown.",
    "Step 3: Add boiled noodles and toss well with garlic butter.",
    "Step 4: Pour in soy sauce and mix evenly.",
    "Step 5: Cook for 2-3 minutes until noodles absorb flavor.",
    "Step 6: Sprinkle optional chili flakes if desired.",
    "Step 7: Garnish with chopped spring onions.",
    "Step 8: Taste and adjust seasoning with salt.",
    "Step 9: Serve hot as a main or side dish.",
    "Step 10: Enjoy the rich and aromatic Garlic Noodles.",
    "Step 11: Optionally, drizzle some sesame oil for extra flavor."
  ],
  nutrition: { calories: 280, protein: 7, carbs: 50, fat: 10 }
},
{
  id: 144,
  name: "Dragon Chicken",
  category: "Chinese Recipes",
  imageName: "dragon_chicken",
  prepTime: "20 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Chicken Cubes - 400g",
      "Garlic - 2 cloves, minced",
      "Ginger - 1 tsp, minced",
      "Soy Sauce - 2 tbsp",
      "Chili Sauce - 1 tbsp",
      "Bell Peppers - ½ cup, chopped",
      "Oil - 2 tbsp",
      "Salt - ½ tsp"
    ],
    optional: [
      "Spring Onion - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Marinate chicken cubes with soy sauce, chili sauce, and salt for 15 minutes.",
    "Step 2: Heat oil in a pan and deep fry chicken until golden brown.",
    "Step 3: Remove chicken and set aside.",
    "Step 4: In the same pan, sauté garlic and ginger until fragrant.",
    "Step 5: Add chopped bell peppers and stir-fry for 2 minutes.",
    "Step 6: Add fried chicken cubes back to the pan.",
    "Step 7: Toss everything with remaining sauce.",
    "Step 8: Cook for 3-4 minutes until chicken absorbs sauce.",
    "Step 9: Garnish with chopped spring onions.",
    "Step 10: Taste and adjust seasoning.",
    "Step 11: Serve hot as a starter or with fried rice."
  ],
  nutrition: { calories: 350, protein: 25, carbs: 15, fat: 18 }
},
{
  id: 145,
  name: "Honey Garlic Chicken",
  category: "Chinese Recipes",
  imageName: "honey_garlic_chicken",
  prepTime: "20 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Chicken Cubes - 400g",
      "Honey - 2 tbsp",
      "Garlic - 3 cloves, minced",
      "Soy Sauce - 2 tbsp",
      "Cornflour - 1 tbsp",
      "Oil - 2 tbsp",
      "Salt - ½ tsp"
    ],
    optional: [
      "Spring Onion - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Marinate chicken cubes with soy sauce and cornflour for 10 minutes.",
    "Step 2: Heat oil in a pan and deep fry chicken until golden and crispy.",
    "Step 3: Remove chicken and set aside.",
    "Step 4: In the same pan, sauté garlic until fragrant.",
    "Step 5: Add honey and soy sauce, mix well to form a sauce.",
    "Step 6: Add fried chicken cubes and toss to coat evenly with sauce.",
    "Step 7: Cook for 3-4 minutes until sauce thickens.",
    "Step 8: Garnish with chopped spring onions.",
    "Step 9: Taste and adjust seasoning if needed.",
    "Step 10: Serve hot as an appetizer or main dish.",
    "Step 11: Enjoy the sweet and savory Honey Garlic Chicken."
  ],
  nutrition: { calories: 360, protein: 24, carbs: 20, fat: 18 }
},

{
  id: 146,
  name: "Spring Rolls",
  category: "Chinese Recipes",
  imageName: "spring_rolls",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Spring Roll Wrappers - 8 pieces",
      "Cabbage - 1 cup, finely shredded",
      "Carrot - ½ cup, julienned",
      "Bell Peppers - ½ cup, thinly sliced",
      "Soy Sauce - 1 tbsp",
      "Oil - 2 tbsp for sautéing + ½ cup for deep frying",
      "Salt - ½ tsp",
      "Garlic - 2 cloves, minced"
    ],
    optional: [
      "Chili Sauce - 1 tbsp",
      "Spring Onion - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Finely chop all vegetables.",
    "Step 2: Heat 2 tbsp oil in a pan, sauté garlic until fragrant.",
    "Step 3: Add vegetables and sauté for 3-4 minutes.",
    "Step 4: Add soy sauce, salt, and optional chili sauce, mix well and cook for 2 minutes.",
    "Step 5: Place vegetable mixture on spring roll wrappers and roll tightly.",
    "Step 6: Seal edges with a little water.",
    "Step 7: Heat oil in a deep pan for frying.",
    "Step 8: Deep fry spring rolls until golden brown and crisp.",
    "Step 9: Drain excess oil on paper towels.",
    "Step 10: Garnish with chopped spring onions.",
    "Step 11: Serve hot with chili sauce or ketchup."
  ],
  nutrition: { calories: 200, protein: 5, carbs: 25, fat: 8 }
},
{
  id: 147,
  name: "Hakka Noodles",
  category: "Chinese Recipes",
  imageName: "hakka_noodles",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Boiled Noodles - 200g",
      "Bell Peppers - ½ cup, thinly sliced",
      "Carrot - ½ cup, julienned",
      "Cabbage - ½ cup, shredded",
      "Soy Sauce - 2 tbsp",
      "Garlic - 2 cloves, minced",
      "Oil - 1 tbsp",
      "Salt - ½ tsp"
    ],
    optional: [
      "Chili Sauce - 1 tsp",
      "Spring Onion - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Boil noodles and drain, keep aside.",
    "Step 2: Heat oil in a wok, sauté garlic until fragrant.",
    "Step 3: Add chopped vegetables and stir-fry for 3-4 minutes.",
    "Step 4: Add boiled noodles and toss well with vegetables.",
    "Step 5: Pour soy sauce and optional chili sauce, mix evenly.",
    "Step 6: Stir-fry for another 2-3 minutes.",
    "Step 7: Taste and adjust seasoning with salt.",
    "Step 8: Garnish with chopped spring onions.",
    "Step 9: Serve hot as a main dish.",
    "Step 10: Enjoy the classic Hakka Noodles.",
    "Step 11: Optionally, add a drizzle of sesame oil for aroma."
  ],
  nutrition: { calories: 300, protein: 8, carbs: 55, fat: 8 }
},
{
  id: 148,
  name: "Veg Fried Rice",
  category: "Chinese Recipes",
  imageName: "veg_fried_rice",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Cooked Rice - 2 cups",
      "Carrot - ½ cup, diced",
      "Peas - ½ cup",
      "Bell Peppers - ½ cup, diced",
      "Soy Sauce - 1 tbsp",
      "Garlic - 2 cloves, minced",
      "Oil - 1 tbsp",
      "Salt - ½ tsp"
    ],
    optional: [
      "Spring Onion - 2 tbsp, chopped",
      "Chili Sauce - 1 tsp"
    ]
  },
  preparation: [
    "Step 1: Chop vegetables into small pieces.",
    "Step 2: Heat oil in a wok, sauté garlic until fragrant.",
    "Step 3: Add vegetables and stir-fry for 3-4 minutes.",
    "Step 4: Add cooked rice and mix well with vegetables.",
    "Step 5: Pour soy sauce and toss until rice is evenly coated.",
    "Step 6: Add optional chili sauce for spice.",
    "Step 7: Stir-fry for another 2 minutes.",
    "Step 8: Garnish with chopped spring onions.",
    "Step 9: Taste and adjust seasoning with salt.",
    "Step 10: Serve hot as a main or side dish.",
    "Step 11: Enjoy the colorful Veg Fried Rice."
  ],
  nutrition: { calories: 320, protein: 7, carbs: 55, fat: 8 }
},
{
  id: 149,
  name: "Chicken Fried Rice",
  category: "Chinese Recipes",
  imageName: "chicken_fried_rice",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Cooked Rice - 2 cups",
      "Chicken - 200g, cooked and diced",
      "Carrot - ½ cup, diced",
      "Peas - ½ cup",
      "Soy Sauce - 1 tbsp",
      "Garlic - 2 cloves, minced",
      "Oil - 1 tbsp",
      "Salt - ½ tsp"
    ],
    optional: [
      "Spring Onion - 2 tbsp, chopped",
      "Chili Sauce - 1 tsp"
    ]
  },
  preparation: [
    "Step 1: Cook chicken pieces until fully done and set aside.",
    "Step 2: Heat oil in a wok, sauté garlic until fragrant.",
    "Step 3: Add chopped vegetables and stir-fry for 3-4 minutes.",
    "Step 4: Add cooked rice and mix well with vegetables.",
    "Step 5: Add cooked chicken and toss evenly.",
    "Step 6: Pour soy sauce and optional chili sauce, mix well.",
    "Step 7: Stir-fry for another 2 minutes.",
    "Step 8: Garnish with chopped spring onions.",
    "Step 9: Taste and adjust seasoning with salt.",
    "Step 10: Serve hot as a main dish.",
    "Step 11: Enjoy the flavorful Chicken Fried Rice."
  ],
  nutrition: { calories: 350, protein: 25, carbs: 55, fat: 10 }
},
{
  id: 150,
  name: "Crispy Fried Vegetables",
  category: "Chinese Recipes",
  imageName: "fried_vegetables",
  prepTime: "20 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Mixed Vegetables (Carrot, Beans, Cauliflower, Bell Peppers) - 2 cups",
      "Cornflour - 3 tbsp",
      "All-purpose Flour - 2 tbsp",
      "Soy Sauce - 1 tbsp",
      "Garlic - 2 cloves, minced",
      "Ginger - 1 tsp, minced",
      "Oil - ½ cup for deep frying",
      "Salt - ½ tsp"
    ],
    optional: [
      "Chili Sauce - 1 tsp",
      "Spring Onion - 2 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Cut all vegetables into thin strips or bite-sized pieces.",
    "Step 2: In a bowl, mix cornflour, all-purpose flour, salt, and a little water to form a thick batter.",
    "Step 3: Add chopped vegetables to the batter and coat evenly.",
    "Step 4: Heat oil in a deep pan and fry the battered vegetables in batches until golden and crispy.",
    "Step 5: Drain excess oil on paper towels.",
    "Step 6: In another pan, sauté garlic and ginger until fragrant.",
    "Step 7: Add soy sauce and optional chili sauce to make a light glaze.",
    "Step 8: Toss the fried vegetables quickly in the sauce to coat lightly.",
    "Step 9: Garnish with chopped spring onions.",
    "Step 10: Serve hot as a crispy appetizer.",
    "Step 11: Enjoy the crunchy and flavorful Crispy Fried Vegetables."
  ],
  nutrition: { calories: 270, protein: 6, carbs: 35, fat: 12 }
},


// -------------------- Italian Recipes --------------------
{
  id: 151,
  name: "Margherita Pizza",
  category: "Italian Recipes",
  imageName: "margherita_pizza",
  prepTime: "20 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Pizza Dough - 1 medium base",
      "Tomato Sauce - 4 tbsp",
      "Mozzarella Cheese - 100g, sliced",
      "Fresh Basil Leaves - 6-8 leaves"
    ],
    optional: [
      "Olive Oil - 1 tsp",
      "Oregano - ½ tsp"
    ]
  },
  preparation: [
    "Step 1: Preheat oven to 250°C and place a pizza stone or tray inside.",
    "Step 2: Roll out the pizza dough into a thin circle.",
    "Step 3: Spread tomato sauce evenly over the base.",
    "Step 4: Place mozzarella slices evenly on top of the sauce.",
    "Step 5: Arrange fresh basil leaves over the cheese.",
    "Step 6: Drizzle olive oil and sprinkle oregano if desired.",
    "Step 7: Place the pizza in the preheated oven.",
    "Step 8: Bake for 10–12 minutes until the crust turns golden and cheese melts.",
    "Step 9: Remove pizza from oven and let it cool for 2 minutes.",
    "Step 10: Slice into wedges and serve hot."
  ],
  nutrition: { calories: 280, protein: 12, carbs: 36, fat: 10 }
},
{
  id: 152,
  name: "White Sauce Pasta",
  category: "Italian Recipes",
  imageName: "white_sauce_pasta",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Pasta - 200g",
      "Butter - 2 tbsp",
      "All-purpose Flour - 2 tbsp",
      "Milk - 1 cup",
      "Cheese - 50g, grated",
      "Salt - ½ tsp",
      "Black Pepper - ¼ tsp"
    ],
    optional: [
      "Garlic - 2 cloves, minced",
      "Oregano - ½ tsp",
      "Chili Flakes - ¼ tsp"
    ]
  },
  preparation: [
    "Step 1: Boil pasta in salted water until al dente and drain.",
    "Step 2: Heat butter in a pan over medium heat.",
    "Step 3: Add minced garlic (optional) and sauté until fragrant.",
    "Step 4: Add flour and stir continuously to make a roux for 1-2 minutes.",
    "Step 5: Gradually pour in milk while whisking to form a smooth sauce.",
    "Step 6: Add grated cheese, salt, and pepper, stirring until creamy.",
    "Step 7: Toss in the boiled pasta and mix evenly with the sauce.",
    "Step 8: Add oregano and chili flakes if desired and stir.",
    "Step 9: Cook for another 2–3 minutes on low heat.",
    "Step 10: Serve hot on a plate and sprinkle extra cheese if needed."
  ],
  nutrition: { calories: 320, protein: 10, carbs: 40, fat: 12 }
},
{
  id: 153,
  name: "Red Sauce Pasta",
  category: "Italian Recipes",
  imageName: "red_sause_pasta",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Pasta - 200g",
      "Tomatoes - 4 medium, chopped",
      "Garlic - 2 cloves, minced",
      "Olive Oil - 2 tsp",
      "Basil Leaves - 6-8 leaves",
      "Salt - ½ tsp",
      "Black Pepper - ¼ tsp"
    ],
    optional: [
      "Chili Flakes - ¼ tsp",
      "Oregano - ½ tsp",
      "Grated Cheese - 30g"
    ]
  },
  preparation: [
    "Step 1: Boil pasta in salted water until al dente, drain and set aside.",
    "Step 2: Blend chopped tomatoes into a smooth puree.",
    "Step 3: Heat olive oil in a pan over medium heat.",
    "Step 4: Sauté minced garlic until fragrant.",
    "Step 5: Pour in tomato puree and cook for 5–7 minutes until thickened.",
    "Step 6: Add salt, pepper, chili flakes, and oregano (optional).",
    "Step 7: Tear basil leaves and add to the sauce.",
    "Step 8: Toss boiled pasta into the sauce and mix well.",
    "Step 9: Cook for another 2 minutes so pasta absorbs the sauce.",
    "Step 10: Serve hot with grated cheese on top."
  ],
  nutrition: { calories: 300, protein: 9, carbs: 45, fat: 9 }
},
{
  id: 154,
  name: "Lasagna",
  category: "Italian Recipes",
  imageName: "lasagna",
  prepTime: "30 mins",
  cookTime: "40 mins",
  ingredients: {
    main: [
      "Lasagna Sheets - 10 sheets",
      "Tomato Sauce - 1 cup",
      "White Sauce - 1 cup",
      "Grated Cheese - 100g",
      "Vegetables or Meat - 150g",
      "Salt - ½ tsp",
      "Black Pepper - ¼ tsp"
    ],
    optional: [
      "Oregano - ½ tsp",
      "Olive Oil - 1 tsp"
    ]
  },
  preparation: [
    "Step 1: Preheat oven to 180°C.",
    "Step 2: Boil lasagna sheets until slightly soft, drain and set aside.",
    "Step 3: Prepare tomato sauce and white sauce separately.",
    "Step 4: Lightly grease a baking dish with olive oil.",
    "Step 5: Spread a layer of tomato sauce at the bottom.",
    "Step 6: Place lasagna sheets over the sauce.",
    "Step 7: Spread white sauce and add vegetables or meat on top.",
    "Step 8: Sprinkle grated cheese and repeat layers until dish is full.",
    "Step 9: Top with cheese and oregano.",
    "Step 10: Bake for 25–30 minutes until golden brown.",
    "Step 11: Let it cool slightly, slice and serve hot."
  ],
  nutrition: { calories: 400, protein: 18, carbs: 40, fat: 20 }
},
{
  id: 155,
  name: "Risotto",
  category: "Italian Recipes",
  imageName: "risotto",
  prepTime: "20 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Arborio Rice - 1 cup",
      "Vegetable Broth - 2 cups, warm",
      "Butter - 2 tbsp",
      "Onion - 1 small, finely chopped",
      "Parmesan Cheese - 50g, grated",
      "Salt - ½ tsp",
      "Black Pepper - ¼ tsp"
    ],
    optional: [
      "White Wine - 2 tbsp",
      "Garlic - 1 clove, minced"
    ]
  },
  preparation: [
    "Step 1: Heat butter in a pan over medium heat.",
    "Step 2: Sauté chopped onions and garlic (optional) until translucent.",
    "Step 3: Add Arborio rice and toast for 2 minutes, stirring constantly.",
    "Step 4: Add white wine (optional) and let it evaporate.",
    "Step 5: Gradually add warm vegetable broth, one ladle at a time.",
    "Step 6: Stir continuously and wait until liquid is absorbed before adding more broth.",
    "Step 7: Repeat until rice is creamy and tender, about 20 minutes.",
    "Step 8: Add grated parmesan, salt, and pepper, mix well.",
    "Step 9: Adjust seasoning to taste.",
    "Step 10: Serve hot garnished with parsley or extra cheese."
  ],
  nutrition: { calories: 340, protein: 9, carbs: 55, fat: 10 }
},

{
  id: 156,
  name: "Focaccia Bread",
  category: "Italian Recipes",
  imageName: "focaccia_bread",
  prepTime: "20 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "All-purpose Flour - 2 cups",
      "Yeast - 1 tsp",
      "Warm Water - ¾ cup",
      "Olive Oil - 2 tbsp",
      "Salt - 1 tsp",
      "Rosemary - 1 tsp"
    ],
    optional: [
      "Garlic - 2 cloves, minced",
      "Cherry Tomatoes - 6-8, halved"
    ]
  },
  preparation: [
    "Step 1: In a bowl, mix flour, yeast, and salt.",
    "Step 2: Gradually add warm water and olive oil to form a dough.",
    "Step 3: Knead for 8–10 minutes until smooth and elastic.",
    "Step 4: Cover dough and let it rise for 1 hour or until doubled.",
    "Step 5: Preheat oven to 200°C and grease a baking tray.",
    "Step 6: Spread dough evenly on the tray and press fingers to make dimples.",
    "Step 7: Drizzle with olive oil and sprinkle rosemary, garlic, and cherry tomatoes (optional).",
    "Step 8: Let dough rest for 10 minutes.",
    "Step 9: Bake for 20–25 minutes until golden brown.",
    "Step 10: Cool slightly before slicing and serving warm."
  ],
  nutrition: { calories: 250, protein: 7, carbs: 40, fat: 8 }
},
{
  id: 157,
  name: "Garlic Bread",
  category: "Italian Recipes",
  imageName: "garlic_bread",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Bread - 1 loaf",
      "Butter - 50g, softened",
      "Garlic - 3 cloves, minced",
      "Parsley - 2 tsp, chopped",
      "Salt - ¼ tsp"
    ],
    optional: [
      "Cheese - 50g, grated",
      "Oregano - ½ tsp"
    ]
  },
  preparation: [
    "Step 1: Preheat oven to 180°C.",
    "Step 2: In a bowl, mix softened butter, minced garlic, parsley, and salt.",
    "Step 3: Slice bread horizontally or into pieces.",
    "Step 4: Spread the garlic butter mixture evenly over bread slices.",
    "Step 5: Sprinkle grated cheese on top if desired.",
    "Step 6: Sprinkle oregano optionally.",
    "Step 7: Place slices on a baking tray.",
    "Step 8: Bake for 10–12 minutes until crispy and golden.",
    "Step 9: Remove from oven and let it cool slightly.",
    "Step 10: Serve hot with pasta or soup."
  ],
  nutrition: { calories: 180, protein: 4, carbs: 22, fat: 8 }
},
{
  id: 158,
  name: "Alfredo Pasta",
  category: "Italian Recipes",
  imageName: "alfredo_pasta",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Fettuccine - 200g",
      "Butter - 2 tbsp",
      "Cream - ¾ cup",
      "Parmesan Cheese - 50g, grated",
      "Salt - ½ tsp",
      "Black Pepper - ¼ tsp"
    ],
    optional: [
      "Garlic - 1 clove, minced",
      "Parsley - 1 tsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Boil fettuccine in salted water until al dente, drain and set aside.",
    "Step 2: In a pan, melt butter over medium heat.",
    "Step 3: Sauté garlic (optional) for 1 minute.",
    "Step 4: Add cream and bring to a gentle simmer.",
    "Step 5: Stir in grated parmesan cheese until the sauce thickens.",
    "Step 6: Add salt and pepper to taste.",
    "Step 7: Toss cooked fettuccine into the sauce until well coated.",
    "Step 8: Garnish with chopped parsley.",
    "Step 9: Cook for 2–3 more minutes for flavors to combine.",
    "Step 10: Serve hot with garlic bread on the side."
  ],
  nutrition: { calories: 360, protein: 12, carbs: 42, fat: 15 }
},
{
  id: 159,
  name: "Arrabbiata Pasta",
  category: "Italian Recipes",
  imageName: "arrabbiata_pasta",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Pasta - 200g",
      "Tomato Sauce - ¾ cup",
      "Garlic - 2 cloves, minced",
      "Chili Flakes - ½ tsp",
      "Olive Oil - 2 tsp",
      "Salt - ½ tsp",
      "Black Pepper - ¼ tsp"
    ],
    optional: [
      "Parsley - 1 tsp, chopped",
      "Cheese - 30g, grated"
    ]
  },
  preparation: [
    "Step 1: Boil pasta in salted water until al dente, drain and keep aside.",
    "Step 2: Heat olive oil in a pan over medium heat.",
    "Step 3: Sauté minced garlic until fragrant.",
    "Step 4: Add tomato sauce and cook for 5–7 minutes.",
    "Step 5: Add chili flakes, salt, and pepper.",
    "Step 6: Toss cooked pasta into the sauce.",
    "Step 7: Stir well to coat pasta evenly.",
    "Step 8: Cook for another 2 minutes for flavors to blend.",
    "Step 9: Garnish with chopped parsley and grated cheese if desired.",
    "Step 10: Serve hot immediately."
  ],
  nutrition: { calories: 310, protein: 9, carbs: 48, fat: 9 }
},
{
  id: 160,
  name: "Pesto Pasta",
  category: "Italian Recipes",
  imageName: "pesto_pasta",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Pasta - 200g",
      "Basil Leaves - 1 cup",
      "Garlic - 1 clove",
      "Olive Oil - 3 tbsp",
      "Parmesan Cheese - 40g, grated",
      "Pine Nuts - 2 tbsp",
      "Salt - ½ tsp",
      "Black Pepper - ¼ tsp"
    ],
    optional: ["Lemon Juice - 1 tsp"]
  },
  preparation: [
    "Step 1: Boil pasta in salted water until al dente, drain and set aside.",
    "Step 2: In a blender, combine basil, garlic, pine nuts, olive oil, and lemon juice (optional).",
    "Step 3: Blend until smooth to make pesto sauce.",
    "Step 4: Mix in grated parmesan cheese and season with salt and pepper.",
    "Step 5: Toss cooked pasta in the pesto sauce until evenly coated.",
    "Step 6: Cook for 2–3 minutes over low heat.",
    "Step 7: Adjust seasoning if needed.",
    "Step 8: Garnish with extra parmesan or basil leaves.",
    "Step 9: Serve warm immediately.",
    "Step 10: Pair with garlic bread or a side salad."
  ],
  nutrition: { calories: 330, protein: 10, carbs: 45, fat: 12 }
},
{
  id: 161,
  name: "Ravioli",
  category: "Italian Recipes",
  imageName: "ravioli",
  prepTime: "30 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Pasta Dough - 2 cups",
      "Ricotta Cheese - 100g",
      "Spinach - 50g, chopped",
      "Butter - 2 tbsp",
      "Tomato Sauce - ½ cup",
      "Salt - ½ tsp",
      "Black Pepper - ¼ tsp"
    ],
    optional: ["Parmesan Cheese - 20g, grated"]
  },
  preparation: [
    "Step 1: Roll out pasta dough into thin sheets.",
    "Step 2: Mix ricotta, chopped spinach, salt, and pepper for the filling.",
    "Step 3: Cut dough into squares (approx 5x5 cm).",
    "Step 4: Place 1 tsp of filling in the center of each square.",
    "Step 5: Fold dough and press edges to seal ravioli.",
    "Step 6: Boil salted water in a pot.",
    "Step 7: Cook ravioli until they float to the top, about 3–4 minutes.",
    "Step 8: Drain and set aside.",
    "Step 9: Heat butter in a pan and add tomato sauce.",
    "Step 10: Toss cooked ravioli in the sauce.",
    "Step 11: Serve hot, topped with grated parmesan (optional)."
  ],
  nutrition: { calories: 340, protein: 14, carbs: 42, fat: 12 }
},
{
  id: 162,
  name: "Calzone",
  category: "Italian Recipes",
  imageName: "calzone",
  prepTime: "25 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Pizza Dough - 200g",
      "Cheese - 100g, grated",
      "Tomato Sauce - ½ cup",
      "Vegetables or Meat - 100g",
      "Salt - ½ tsp",
      "Olive Oil - 2 tsp"
    ],
    optional: ["Oregano - ½ tsp"]
  },
  preparation: [
    "Step 1: Preheat oven to 220°C.",
    "Step 2: Roll out pizza dough into circles, 15 cm diameter.",
    "Step 3: Spread tomato sauce over half of the dough.",
    "Step 4: Add cheese and vegetables/meat on top.",
    "Step 5: Fold dough over and seal edges tightly.",
    "Step 6: Brush top with olive oil and sprinkle oregano.",
    "Step 7: Place on a greased baking tray.",
    "Step 8: Bake for 20–25 minutes until golden brown.",
    "Step 9: Remove and let it cool for 5 minutes.",
    "Step 10: Slice and serve hot with marinara sauce."
  ],
  nutrition: { calories: 370, protein: 16, carbs: 45, fat: 15 }
},
{
  id: 163,
  name: "Tiramisu",
  category: "Italian Recipes",
  imageName: "tiramisu",
  prepTime: "25 mins",
  cookTime: "0 mins (chilling time 4 hrs)",
  ingredients: {
    main: [
      "Mascarpone Cheese - 250g",
      "Ladyfingers - 12 pieces",
      "Coffee - 1 cup, cooled",
      "Cocoa Powder - 1 tbsp",
      "Sugar - 50g"
    ],
    optional: ["Whipped Cream - 50g", "Chocolate Shavings - 1 tsp"]
  },
  preparation: [
    "Step 1: Prepare strong coffee and let it cool.",
    "Step 2: Whisk mascarpone, sugar, and whipped cream until smooth.",
    "Step 3: Dip ladyfingers in coffee briefly.",
    "Step 4: Arrange a layer of soaked ladyfingers in a dish.",
    "Step 5: Spread mascarpone mixture evenly over the ladyfingers.",
    "Step 6: Repeat layers until dish is full.",
    "Step 7: Finish with cocoa powder on top.",
    "Step 8: Chill in the refrigerator for 4 hours.",
    "Step 9: Garnish with chocolate shavings before serving.",
    "Step 10: Serve chilled for best taste."
  ],
  nutrition: { calories: 420, protein: 8, carbs: 40, fat: 26 }
},
{
  id: 164,
  name: "Gnocchi",
  category: "Italian Recipes",
  imageName: "gnocchi",
  prepTime: "25 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Potatoes - 300g",
      "Flour - 100g",
      "Egg - 1",
      "Salt - ½ tsp",
      "Butter - 2 tbsp"
    ],
    optional: ["Parmesan Cheese - 20g, grated"]
  },
  preparation: [
    "Step 1: Boil potatoes until soft and mash them.",
    "Step 2: Mix mashed potatoes with flour, egg, and salt to form a dough.",
    "Step 3: Roll dough into long logs about 2 cm thick.",
    "Step 4: Cut logs into 2 cm pieces to form gnocchi.",
    "Step 5: Boil salted water in a pot.",
    "Step 6: Cook gnocchi until they float to the surface.",
    "Step 7: Drain and keep aside.",
    "Step 8: Heat butter in a pan and toss gnocchi until coated.",
    "Step 9: Sprinkle grated parmesan cheese (optional).",
    "Step 10: Serve warm with sauce or gravy of choice."
  ],
  nutrition: { calories: 290, protein: 8, carbs: 50, fat: 7 }
},
{
  id: 165,
  name: "Bruschetta",
  category: "Italian Recipes",
  imageName: "bruschetta",
  prepTime: "10 mins",
  cookTime: "10 mins",
  ingredients: {
    main: [
      "Baguette Slices - 6",
      "Tomatoes - 2, chopped",
      "Garlic - 1 clove, minced",
      "Basil - 2 tsp, chopped",
      "Olive Oil - 1 tbsp",
      "Salt - ½ tsp",
      "Black Pepper - ¼ tsp"
    ],
    optional: ["Balsamic Vinegar - 1 tsp", "Cheese - 20g, grated"]
  },
  preparation: [
    "Step 1: Preheat oven to 180°C.",
    "Step 2: Toast baguette slices until golden brown.",
    "Step 3: In a bowl, mix chopped tomatoes, garlic, basil, salt, and pepper.",
    "Step 4: Drizzle olive oil and balsamic vinegar (optional).",
    "Step 5: Spoon mixture evenly over toasted bread slices.",
    "Step 6: Sprinkle cheese on top if desired.",
    "Step 7: Bake for 2–3 minutes to melt cheese slightly.",
    "Step 8: Remove from oven and cool slightly.",
    "Step 9: Arrange on a serving plate.",
    "Step 10: Serve immediately as a fresh appetizer."
  ],
  nutrition: { calories: 180, protein: 4, carbs: 22, fat: 8 }
},
{
  id: 166,
  name: "Caprese Salad",
  category: "Italian Recipes",
  imageName: "caprese_salad",
  prepTime: "10 mins",
  cookTime: "0 mins",
  ingredients: {
    main: [
      "Tomatoes - 2, sliced",
      "Mozzarella Cheese - 100g, sliced",
      "Basil Leaves - 6",
      "Olive Oil - 1 tbsp",
      "Salt - ½ tsp",
      "Black Pepper - ¼ tsp"
    ],
    optional: ["Balsamic Glaze - 1 tsp", "Oregano - ½ tsp"]
  },
  preparation: [
    "Step 1: Slice tomatoes and mozzarella into even rounds.",
    "Step 2: Arrange slices alternately with basil leaves on a plate.",
    "Step 3: Drizzle olive oil and balsamic glaze (optional) over the salad.",
    "Step 4: Sprinkle salt, black pepper, and oregano.",
    "Step 5: Let it rest for 2 minutes for flavors to blend.",
    "Step 6: Garnish with extra basil leaves.",
    "Step 7: Serve chilled as an appetizer.",
    "Step 8: Pair with bread or soup if desired.",
    "Step 9: Optionally, add a pinch of chili flakes for spice.",
    "Step 10: Enjoy fresh."
  ],
  nutrition: { calories: 210, protein: 10, carbs: 8, fat: 16 }
},
{
  id: 167,
  name: "Spinach Pasta",
  category: "Italian Recipes",
  imageName: "spinach_pasta",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Pasta - 200g",
      "Spinach - 100g",
      "Garlic - 2 cloves, minced",
      "Cream - ½ cup",
      "Parmesan Cheese - 40g, grated",
      "Olive Oil - 2 tsp",
      "Salt - ½ tsp",
      "Black Pepper - ¼ tsp"
    ],
    optional: ["Chili Flakes - ¼ tsp"]
  },
  preparation: [
    "Step 1: Boil pasta in salted water until al dente, drain and set aside.",
    "Step 2: Blanch spinach in boiling water for 1–2 minutes.",
    "Step 3: Blend spinach into a smooth paste.",
    "Step 4: Heat olive oil in a pan and sauté garlic until fragrant.",
    "Step 5: Add spinach paste and cook for 2 minutes.",
    "Step 6: Add cream and cook until thickened.",
    "Step 7: Toss in cooked pasta and mix evenly.",
    "Step 8: Season with salt, pepper, and chili flakes (optional).",
    "Step 9: Sprinkle parmesan cheese on top.",
    "Step 10: Serve hot immediately."
  ],
  nutrition: { calories: 310, protein: 11, carbs: 42, fat: 11 }
},
{
  id: 168,
  name: "Mushroom Risotto",
  category: "Italian Recipes",
  imageName: "mushroom_risotto",
  prepTime: "20 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Arborio Rice - 200g",
      "Mushrooms - 100g, sliced",
      "Onion - 1 small, chopped",
      "Butter - 2 tbsp",
      "Vegetable Broth - 2 cups",
      "Salt - ½ tsp",
      "Black Pepper - ¼ tsp"
    ],
    optional: ["Garlic - 1 clove, minced", "Parmesan Cheese - 30g, grated"]
  },
  preparation: [
    "Step 1: Heat butter in a pan and sauté onions and garlic until translucent.",
    "Step 2: Add mushrooms and cook until soft.",
    "Step 3: Stir in arborio rice for 1–2 minutes.",
    "Step 4: Gradually add vegetable broth, stirring continuously.",
    "Step 5: Cook until rice becomes creamy and tender.",
    "Step 6: Mix in parmesan cheese if desired.",
    "Step 7: Season with salt and pepper.",
    "Step 8: Let risotto rest for 2 minutes off heat.",
    "Step 9: Garnish with fresh parsley.",
    "Step 10: Serve hot immediately."
  ],
  nutrition: { calories: 340, protein: 9, carbs: 52, fat: 10 }
},
{
  id: 169,
  name: "Penne Arrabbiata",
  category: "Italian Recipes",
  imageName: "penne_arrabbiata",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Penne Pasta - 200g",
      "Tomato Sauce - ½ cup",
      "Garlic - 2 cloves, minced",
      "Chili Flakes - ½ tsp",
      "Olive Oil - 2 tsp",
      "Salt - ½ tsp",
      "Black Pepper - ¼ tsp"
    ],
    optional: ["Parsley - 1 tsp, chopped", "Cheese - 20g, grated"]
  },
  preparation: [
    "Step 1: Boil penne pasta in salted water until al dente, drain and set aside.",
    "Step 2: Heat olive oil in a pan over medium heat.",
    "Step 3: Sauté garlic and chili flakes until fragrant.",
    "Step 4: Add tomato sauce and simmer for 5 minutes.",
    "Step 5: Toss cooked penne into the sauce.",
    "Step 6: Mix well and cook for 2 more minutes.",
    "Step 7: Season with salt and pepper.",
    "Step 8: Garnish with chopped parsley and cheese (optional).",
    "Step 9: Serve hot immediately.",
    "Step 10: Pair with garlic bread if desired."
  ],
  nutrition: { calories: 310, protein: 9, carbs: 48, fat: 9 }
},
{
  id: 170,
  name: "Chicken Alfredo",
  category: "Italian Recipes",
  imageName: "chicken_alfredo",
  prepTime: "20 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Fettuccine - 200g",
      "Chicken - 150g, diced",
      "Butter - 2 tbsp",
      "Cream - ½ cup",
      "Parmesan Cheese - 50g, grated",
      "Salt - ½ tsp",
      "Black Pepper - ¼ tsp"
    ],
    optional: ["Garlic - 1 clove, minced", "Parsley - 1 tsp, chopped"]
  },
  preparation: [
    "Step 1: Boil fettuccine in salted water until al dente, drain and set aside.",
    "Step 2: Heat a pan and cook chicken pieces until golden brown.",
    "Step 3: Remove chicken and keep aside.",
    "Step 4: Melt butter in the same pan over medium heat.",
    "Step 5: Sauté garlic (optional) for 1 minute.",
    "Step 6: Add cream and bring to gentle simmer.",
    "Step 7: Stir in parmesan cheese until sauce thickens.",
    "Step 8: Add cooked chicken and fettuccine to the sauce.",
    "Step 9: Mix well and season with salt and pepper.",
    "Step 10: Garnish with chopped parsley and serve hot with garlic bread."
  ],
  nutrition: { calories: 420, protein: 28, carbs: 35, fat: 20 }
},
// -------------------- Diet / Healthy --------------------
{
  id: 171,
  name: "Sprouts Salad",
  category: "Diet",
  imageName: "sprouts_salad",
  prepTime: "10 mins",
  cookTime: "0 mins",
  ingredients: {
    main: [
      "Sprouts - 1 cup",
      "Tomato - 1 medium, chopped",
      "Cucumber - 1 medium, chopped",
      "Onion - ½ medium, chopped"
    ],
    optional: [
      "Lemon Juice - 1 tsp",
      "Salt - ½ tsp",
      "Pepper - ¼ tsp",
      "Coriander Leaves - 1 tbsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Wash all sprouts thoroughly under running water.",
    "Step 2: Chop tomato, cucumber, and onion into small pieces.",
    "Step 3: Place sprouts in a large mixing bowl.",
    "Step 4: Add chopped vegetables to the sprouts.",
    "Step 5: Drizzle lemon juice over the mixture.",
    "Step 6: Add salt and pepper according to taste.",
    "Step 7: Toss everything together gently using a spoon.",
    "Step 8: Garnish with chopped coriander leaves.",
    "Step 9: Optionally, sprinkle a pinch of chaat masala for extra flavor.",
    "Step 10: Serve fresh immediately for best taste.",
    "Step 11: Can be stored in the fridge for 1–2 hours if needed."
  ],
  nutrition: { calories: 120, protein: 6, carbs: 20, fat: 2 }
},
{
  id: 172,
  name: "Quinoa Upma",
  category: "Diet",
  imageName: "quinoa_upma",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Quinoa - ½ cup",
      "Onion - 1 small, chopped",
      "Carrot - 1 small, chopped",
      "Green Peas - ¼ cup",
      "Ginger - 1 tsp, grated",
      "Green Chili - 1, chopped"
    ],
    optional: [
      "Curry Leaves - 5 leaves",
      "Coriander Leaves - 1 tbsp, chopped",
      "Lemon Juice - 1 tsp",
      "Salt - ½ tsp",
      "Oil - 1 tsp"
    ]
  },
  preparation: [
    "Step 1: Rinse quinoa thoroughly and set aside.",
    "Step 2: Heat oil in a pan over medium heat.",
    "Step 3: Add mustard seeds and let them splutter.",
    "Step 4: Add chopped onion, green chili, and grated ginger; sauté till soft.",
    "Step 5: Add chopped carrots and green peas; cook for 2–3 minutes.",
    "Step 6: Add rinsed quinoa and 1 cup water; stir well.",
    "Step 7: Cover and cook on low heat until water is absorbed, about 10 mins.",
    "Step 8: Add salt and mix gently.",
    "Step 9: Garnish with chopped coriander leaves and lemon juice.",
    "Step 10: Serve hot as a healthy breakfast.",
    "Step 11: Optionally, add a few curry leaves for extra flavor."
  ],
  nutrition: { calories: 180, protein: 6, carbs: 30, fat: 4 }
},
{
  id: 173,
  name: "Vegetable Salad",
  category: "Diet",
  imageName: "vegetable_salad",
  prepTime: "10 mins",
  cookTime: "0 mins",
  ingredients: {
    main: [
      "Lettuce - 1 cup, chopped",
      "Tomato - 1 medium, chopped",
      "Cucumber - 1 medium, chopped",
      "Carrot - 1 small, grated",
      "Capsicum - ½ medium, chopped"
    ],
    optional: [
      "Olive Oil - 1 tsp",
      "Lemon Juice - 1 tsp",
      "Salt - ½ tsp",
      "Pepper - ¼ tsp"
    ]
  },
  preparation: [
    "Step 1: Wash and chop all vegetables evenly.",
    "Step 2: Place vegetables in a large mixing bowl.",
    "Step 3: Drizzle olive oil over the vegetables.",
    "Step 4: Add lemon juice, salt, and pepper.",
    "Step 5: Toss gently to coat all vegetables evenly.",
    "Step 6: Taste and adjust seasoning if required.",
    "Step 7: Optionally, sprinkle seeds or herbs for garnish.",
    "Step 8: Serve immediately for maximum freshness.",
    "Step 9: Can be refrigerated for 1 hour before serving.",
    "Step 10: Enjoy as a healthy snack or side dish."
  ],
  nutrition: { calories: 90, protein: 2, carbs: 15, fat: 4 }
},
{
  id: 174,
  name: "Fruit Salad",
  category: "Diet",
  imageName: "fruit_salad",
  prepTime: "10 mins",
  cookTime: "0 mins",
  ingredients: {
    main: [
      "Apple - 1 small, chopped",
      "Banana - 1 small, sliced",
      "Papaya - ½ cup, diced",
      "Grapes - ½ cup, halved",
      "Orange - 1 small, segmented"
    ],
    optional: [
      "Honey - 1 tsp",
      "Lemon Juice - 1 tsp",
      "Mint Leaves - 1 tsp, chopped"
    ]
  },
  preparation: [
    "Step 1: Peel and chop all fruits into bite-sized pieces.",
    "Step 2: Mix all chopped fruits gently in a bowl.",
    "Step 3: Add honey and lemon juice and toss to coat evenly.",
    "Step 4: Garnish with chopped mint leaves.",
    "Step 5: Serve immediately for freshness.",
    "Step 6: Optionally, chill in the refrigerator for 10 mins before serving.",
    "Step 7: Stir gently before serving.",
    "Step 8: Can add a sprinkle of seeds for extra crunch.",
    "Step 9: Adjust honey according to sweetness of fruits.",
    "Step 10: Enjoy as a refreshing healthy snack."
  ],
  nutrition: { calories: 120, protein: 1, carbs: 30, fat: 0 }
},
{
  id: 175,
  name: "Multigrain Chapati",
  category: "Diet",
  imageName: "multigrain_chapati",
  prepTime: "15 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Whole Wheat Flour - ½ cup",
      "Oats Flour - ¼ cup",
      "Soy Flour - 2 tbsp",
      "Water - ⅓ cup",
      "Salt - ½ tsp"
    ],
    optional: ["Oil - 1 tsp for cooking"]
  },
  preparation: [
    "Step 1: Mix whole wheat, oats, and soy flour with salt in a bowl.",
    "Step 2: Gradually add water and knead to form soft dough.",
    "Step 3: Knead dough for 5 minutes until smooth.",
    "Step 4: Divide dough into small balls.",
    "Step 5: Roll each ball into thin round chapati.",
    "Step 6: Heat a tawa or skillet over medium heat.",
    "Step 7: Cook chapati on one side until bubbles appear, then flip.",
    "Step 8: Cook other side until golden brown spots appear.",
    "Step 9: Optionally, apply a little oil while cooking.",
    "Step 10: Serve hot with curries or vegetables.",
    "Step 11: Keep covered in a cloth to maintain softness."
  ],
  nutrition: { calories: 120, protein: 5, carbs: 22, fat: 2 }
},
{
  id: 176,
  name: "Oats Idli",
  category: "Diet",
  imageName: "oats_idli",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Oats - 1 cup, powdered",
      "Curd - ½ cup",
      "Carrot - ¼ cup, grated",
      "Green Chili - 1, chopped",
      "Ginger - 1 tsp, grated"
    ],
    optional: ["Coriander Leaves - 1 tbsp, chopped", "Salt - ½ tsp", "Baking Soda - ¼ tsp"]
  },
  preparation: [
    "Step 1: Grind oats to a fine powder using a blender.",
    "Step 2: Mix oats powder with curd and salt to make a smooth batter.",
    "Step 3: Add grated carrot, chopped green chili, and ginger.",
    "Step 4: Mix well and let the batter rest for 5–10 mins.",
    "Step 5: Add a pinch of baking soda just before steaming.",
    "Step 6: Pour batter into greased idli molds.",
    "Step 7: Steam in an idli cooker for 10–15 mins until cooked.",
    "Step 8: Check doneness with a toothpick; it should come out clean.",
    "Step 9: Remove idlis from molds carefully.",
    "Step 10: Serve hot with chutney or sambar.",
    "Step 11: Optionally, sprinkle coriander leaves on top before serving."
  ],
  nutrition: { calories: 100, protein: 4, carbs: 18, fat: 1 }
},
{
  id: 177,
  name: "Millets Pongal",
  category: "Diet",
  imageName: "millet_pongal",
  prepTime: "10 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Foxtail Millet - ½ cup",
      "Moong Dal - ¼ cup",
      "Ginger - 1 tsp, grated",
      "Black Pepper - ½ tsp, crushed",
      "Salt - ½ tsp"
    ],
    optional: ["Ghee - 1 tsp", "Curry Leaves - 5 leaves", "Cashews - 1 tbsp"]
  },
  preparation: [
    "Step 1: Roast millet and moong dal separately for 2–3 mins.",
    "Step 2: Boil 1½ cups water in a pan.",
    "Step 3: Add millet, dal, salt, and crushed pepper.",
    "Step 4: Cook on medium heat until soft and mushy.",
    "Step 5: Heat ghee in a small pan, add curry leaves and cashews; fry till golden.",
    "Step 6: Pour seasoning over cooked pongal.",
    "Step 7: Mix gently to combine.",
    "Step 8: Garnish with grated ginger.",
    "Step 9: Serve hot with coconut chutney.",
    "Step 10: Optionally, squeeze a few drops of lemon for flavor.",
    "Step 11: Keep covered to retain warmth until serving."
  ],
  nutrition: { calories: 150, protein: 5, carbs: 28, fat: 4 }
},
{
  id: 178,
  name: "Brown Rice Sambar",
  category: "Diet",
  imageName: "brown_rice_sambar",
  prepTime: "15 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Brown Rice - ½ cup",
      "Toor Dal - ¼ cup",
      "Tamarind - 1 tsp, soaked",
      "Mixed Vegetables - 1 cup",
      "Sambar Powder - 1 tsp",
      "Salt - ½ tsp"
    ],
    optional: ["Curry Leaves - 5 leaves", "Mustard Seeds - ½ tsp", "Coriander Leaves - 1 tbsp"]
  },
  preparation: [
    "Step 1: Cook brown rice until soft and fluffy.",
    "Step 2: Cook toor dal until mushy.",
    "Step 3: Extract tamarind juice from soaked tamarind.",
    "Step 4: In a pan, add cooked dal, vegetables, tamarind juice, sambar powder, and salt.",
    "Step 5: Simmer for 10–15 mins until vegetables are tender.",
    "Step 6: In a small pan, heat oil and add mustard seeds and curry leaves.",
    "Step 7: Pour tempering over the sambar.",
    "Step 8: Mix gently and simmer for 2 mins.",
    "Step 9: Garnish with chopped coriander leaves.",
    "Step 10: Serve hot with cooked brown rice.",
    "Step 11: Optionally, add a squeeze of lemon for tanginess."
  ],
  nutrition: { calories: 200, protein: 6, carbs: 40, fat: 3 }
},
{
  id: 179,
  name: "Cucumber Raita",
  category: "Diet",
  imageName: "cucumber_raita",
  prepTime: "5 mins",
  cookTime: "0 mins",
  ingredients: {
    main: [
      "Cucumber - 1 medium, grated",
      "Curd - ½ cup",
      "Salt - ½ tsp"
    ],
    optional: ["Roasted Cumin Powder - ¼ tsp", "Coriander Leaves - 1 tsp, chopped", "Black Pepper - ¼ tsp"]
  },
  preparation: [
    "Step 1: Peel and grate cucumber.",
    "Step 2: Whisk curd until smooth in a bowl.",
    "Step 3: Mix grated cucumber with curd.",
    "Step 4: Add salt, roasted cumin powder, and black pepper.",
    "Step 5: Garnish with chopped coriander leaves.",
    "Step 6: Serve chilled for best taste.",
    "Step 7: Optionally, add a pinch of chili powder for spice.",
    "Step 8: Mix gently before serving.",
    "Step 9: Can be refrigerated for 30 mins before serving.",
    "Step 10: Serve as a side dish with rice or chapati.",
    "Step 11: Adjust seasoning according to taste."
  ],
  nutrition: { calories: 60, protein: 3, carbs: 6, fat: 2 }
},
{
  id: 180,
  name: "Steamed Vegetables",
  category: "Diet",
  imageName: "steamed_vegetables",
  prepTime: "10 mins",
  cookTime: "10 mins",
  ingredients: {
    main: [
      "Broccoli - ½ cup, chopped",
      "Carrot - ½ cup, chopped",
      "Green Beans - ½ cup, chopped",
      "Cauliflower - ½ cup, chopped",
      "Salt - ½ tsp"
    ],
    optional: ["Olive Oil - 1 tsp", "Lemon Juice - 1 tsp", "Black Pepper - ¼ tsp"]
  },
  preparation: [
    "Step 1: Wash and chop all vegetables into even-sized pieces.",
    "Step 2: Bring water to boil in a steamer.",
    "Step 3: Add vegetables to the steamer basket.",
    "Step 4: Steam vegetables for 8–10 mins until tender but crisp.",
    "Step 5: Transfer steamed vegetables to a bowl.",
    "Step 6: Add salt, black pepper, olive oil, and lemon juice.",
    "Step 7: Toss gently to coat evenly.",
    "Step 8: Taste and adjust seasoning if needed.",
    "Step 9: Serve warm as a side dish.",
    "Step 10: Optionally, sprinkle seeds or fresh herbs for garnish.",
    "Step 11: Can be kept covered to retain warmth before serving."
  ],
  nutrition: { calories: 80, protein: 3, carbs: 12, fat: 3 }
},

{
  id: 181,
  name: "Ragi Malt",
  category: "Diet",
  imageName: "ragi_malt",
  prepTime: "5 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Ragi Flour - 2 tbsp",
      "Milk - 1 cup",
      "Jaggery - 1 tbsp, grated"
    ],
    optional: ["Cardamom Powder - ¼ tsp", "Almonds - 1 tsp, chopped"]
  },
  preparation: [
    "Step 1: Mix ragi flour with 2 tbsp milk to make a smooth paste.",
    "Step 2: Boil the remaining milk in a pan.",
    "Step 3: Add jaggery to boiling milk and stir until dissolved.",
    "Step 4: Slowly add ragi paste while stirring continuously to avoid lumps.",
    "Step 5: Cook on low heat for 5–7 mins until thickened.",
    "Step 6: Add cardamom powder for flavor.",
    "Step 7: Stir continuously to prevent sticking.",
    "Step 8: Garnish with chopped almonds.",
    "Step 9: Serve warm or chilled.",
    "Step 10: Optionally, add a teaspoon of honey for extra sweetness.",
    "Step 11: Keep stirring occasionally if storing for later."
  ],
  nutrition: { calories: 180, protein: 6, carbs: 32, fat: 4 }
},
{
  id: 182,
  name: "Lemon Detox Drink",
  category: "Diet",
  imageName: "lemon_detox_drink",
  prepTime: "5 mins",
  cookTime: "0 mins",
  ingredients: {
    main: [
      "Water - 1 cup",
      "Lemon Juice - 1 tbsp",
      "Honey - 1 tsp"
    ],
    optional: ["Mint Leaves - 2–3 leaves", "Ginger Slices - 2–3 slices"]
  },
  preparation: [
    "Step 1: Boil or slightly warm water.",
    "Step 2: Add lemon juice and honey to the water.",
    "Step 3: Stir until honey dissolves completely.",
    "Step 4: Add mint leaves and ginger slices.",
    "Step 5: Let it infuse for 5 mins for flavor.",
    "Step 6: Taste and adjust sweetness if needed.",
    "Step 7: Serve warm or at room temperature.",
    "Step 8: Optionally, chill for a refreshing drink.",
    "Step 9: Consume on empty stomach for best detox effect.",
    "Step 10: Discard ginger and mint after serving if desired.",
    "Step 11: Can be repeated twice daily if preferred."
  ],
  nutrition: { calories: 40, protein: 0, carbs: 10, fat: 0 }
},
{
  id: 183,
  name: "Vegetable Soup",
  category: "Diet",
  imageName: "vegetable_soup",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Carrot - ½ cup, chopped",
      "Beans - ½ cup, chopped",
      "Tomato - 1 small, chopped",
      "Cabbage - ½ cup, chopped",
      "Salt - ½ tsp",
      "Water - 3 cups"
    ],
    optional: ["Pepper - ¼ tsp", "Olive Oil - 1 tsp", "Herbs - 1 tsp, chopped"]
  },
  preparation: [
    "Step 1: Chop all vegetables finely for even cooking.",
    "Step 2: Boil 3 cups water in a pan.",
    "Step 3: Add chopped vegetables and salt to the boiling water.",
    "Step 4: Simmer on medium heat until vegetables are tender, about 10 mins.",
    "Step 5: Add black pepper and olive oil, stir well.",
    "Step 6: Optionally, blend partially or fully for a smoother texture.",
    "Step 7: Add chopped herbs for garnish.",
    "Step 8: Taste and adjust seasoning as needed.",
    "Step 9: Serve hot in bowls.",
    "Step 10: Optionally, sprinkle extra herbs before serving.",
    "Step 11: Keep covered to retain warmth before serving."
  ],
  nutrition: { calories: 90, protein: 3, carbs: 18, fat: 2 }
},
{
  id: 184,
  name: "Boiled Egg Salad",
  category: "Diet",
  imageName: "boiled_egg_salad",
  prepTime: "10 mins",
  cookTime: "10 mins",
  ingredients: {
    main: [
      "Boiled Eggs - 2, chopped",
      "Lettuce - 1 cup, chopped",
      "Tomato - 1 small, chopped",
      "Cucumber - ½ medium, chopped"
    ],
    optional: ["Olive Oil - 1 tsp", "Salt - ½ tsp", "Pepper - ¼ tsp", "Lemon Juice - 1 tsp"]
  },
  preparation: [
    "Step 1: Boil eggs for 8–10 mins and peel them.",
    "Step 2: Chop eggs and vegetables into bite-sized pieces.",
    "Step 3: Place lettuce, tomato, cucumber, and eggs in a bowl.",
    "Step 4: Add olive oil, salt, pepper, and lemon juice.",
    "Step 5: Toss gently to combine all ingredients.",
    "Step 6: Taste and adjust seasoning if needed.",
    "Step 7: Optionally, add chopped herbs for garnish.",
    "Step 8: Serve immediately as a healthy snack or light meal.",
    "Step 9: Can be refrigerated for 30 mins before serving.",
    "Step 10: Enjoy with whole grain bread or crackers.",
    "Step 11: Ensure eggs are fully cooled before mixing."
  ],
  nutrition: { calories: 150, protein: 10, carbs: 6, fat: 10 }
},
{
  id: 185,
  name: "Avocado Toast",
  category: "Diet",
  imageName: "avocado_toast",
  prepTime: "5 mins",
  cookTime: "5 mins",
  ingredients: {
    main: [
      "Whole Grain Bread - 2 slices",
      "Avocado - ½ medium",
      "Salt - ½ tsp",
      "Pepper - ¼ tsp"
    ],
    optional: ["Lemon Juice - 1 tsp", "Chili Flakes - ¼ tsp", "Olive Oil - 1 tsp"]
  },
  preparation: [
    "Step 1: Toast bread slices until golden brown.",
    "Step 2: Mash avocado in a bowl until smooth.",
    "Step 3: Add salt, pepper, and lemon juice to avocado and mix.",
    "Step 4: Spread avocado mash evenly on toasted bread.",
    "Step 5: Drizzle olive oil over the toast.",
    "Step 6: Sprinkle chili flakes for extra flavor.",
    "Step 7: Optionally, top with sliced tomatoes or sprouts.",
    "Step 8: Serve immediately to maintain freshness.",
    "Step 9: Can be paired with boiled eggs for extra protein.",
    "Step 10: Adjust seasoning according to taste.",
    "Step 11: Enjoy as a quick, healthy breakfast."
  ],
  nutrition: { calories: 200, protein: 5, carbs: 28, fat: 9 }
},
{
  id: 186,
  name: "Zucchini Noodles",
  category: "Diet",
  imageName: "zucchini_noodles",
  prepTime: "10 mins",
  cookTime: "5 mins",
  ingredients: {
    main: [
      "Zucchini - 1 medium, spiralized",
      "Olive Oil - 1 tsp",
      "Garlic - 1 clove, minced",
      "Salt - ½ tsp"
    ],
    optional: ["Black Pepper - ¼ tsp", "Parmesan Cheese - 1 tsp", "Basil - 1 tsp, chopped"]
  },
  preparation: [
    "Step 1: Spiralize zucchini to make noodles.",
    "Step 2: Heat olive oil in a pan over medium heat.",
    "Step 3: Add minced garlic and sauté until fragrant.",
    "Step 4: Add zucchini noodles and cook for 2–3 mins.",
    "Step 5: Season with salt and black pepper.",
    "Step 6: Toss gently to coat evenly.",
    "Step 7: Sprinkle parmesan cheese and basil if desired.",
    "Step 8: Optionally, add cherry tomatoes for flavor and color.",
    "Step 9: Serve immediately to prevent sogginess.",
    "Step 10: Taste and adjust seasoning before serving.",
    "Step 11: Can drizzle extra olive oil if preferred."
  ],
  nutrition: { calories: 100, protein: 3, carbs: 7, fat: 5 }
},
{
  id: 187,
  name: "Lentil Soup",
  category: "Diet",
  imageName: "lentil_soup",
  prepTime: "10 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Red Lentils - ½ cup",
      "Carrot - ½ cup, chopped",
      "Onion - ½ medium, chopped",
      "Celery - ½ cup, chopped",
      "Salt - ½ tsp",
      "Water - 3 cups"
    ],
    optional: ["Pepper - ¼ tsp", "Olive Oil - 1 tsp", "Herbs - 1 tsp, chopped"]
  },
  preparation: [
    "Step 1: Wash lentils thoroughly in water.",
    "Step 2: Chop carrot, onion, and celery finely.",
    "Step 3: Heat olive oil in a pan and sauté onion, carrot, and celery until soft.",
    "Step 4: Add washed lentils and 3 cups water; bring to boil.",
    "Step 5: Reduce heat and simmer for 15–20 mins until lentils are cooked.",
    "Step 6: Add salt, pepper, and herbs; mix well.",
    "Step 7: Blend partially for a smooth texture if desired.",
    "Step 8: Taste and adjust seasoning as needed.",
    "Step 9: Serve hot with a drizzle of olive oil.",
    "Step 10: Optionally, garnish with fresh herbs.",
    "Step 11: Can store for 1 day in the fridge; reheat before serving."
  ],
  nutrition: { calories: 150, protein: 9, carbs: 25, fat: 3 }
},
{
  id: 188,
  name: "Smoothie Bowl",
  category: "Diet",
  imageName: "smoothie_bowl",
  prepTime: "5 mins",
  cookTime: "0 mins",
  ingredients: {
    main: [
      "Banana - 1 small",
      "Berries - ½ cup",
      "Yogurt - ½ cup",
      "Honey - 1 tsp"
    ],
    optional: ["Granola - 2 tbsp", "Chia Seeds - 1 tsp", "Coconut Flakes - 1 tsp"]
  },
  preparation: [
    "Step 1: Blend banana, berries, yogurt, and honey until smooth.",
    "Step 2: Pour the smoothie into a bowl.",
    "Step 3: Top with granola, chia seeds, and coconut flakes.",
    "Step 4: Add extra berries for decoration if desired.",
    "Step 5: Drizzle extra honey on top optionally.",
    "Step 6: Serve immediately for freshness.",
    "Step 7: Stir gently before eating.",
    "Step 8: Can refrigerate if not consuming immediately.",
    "Step 9: Adjust sweetness according to taste.",
    "Step 10: Optionally, add a few nuts for extra protein.",
    "Step 11: Enjoy as a nutritious breakfast or snack."
  ],
  nutrition: { calories: 220, protein: 6, carbs: 40, fat: 5 }
},
{
  id: 189,
  name: "Roasted Chickpeas",
  category: "Diet",
  imageName: "roasted_chickpeas",
  prepTime: "5 mins",
  cookTime: "25 mins",
  ingredients: {
    main: [
      "Chickpeas - 1 cup, soaked overnight",
      "Olive Oil - 1 tsp",
      "Salt - ½ tsp"
    ],
    optional: ["Paprika - ½ tsp", "Cumin - ½ tsp", "Chili Powder - ¼ tsp"]
  },
  preparation: [
    "Step 1: Preheat oven to 200°C.",
    "Step 2: Drain and rinse soaked chickpeas.",
    "Step 3: Toss chickpeas with olive oil, salt, and spices.",
    "Step 4: Spread chickpeas evenly on a baking tray.",
    "Step 5: Roast for 20–25 mins until crispy, shaking tray halfway.",
    "Step 6: Check for crispiness and roast longer if needed.",
    "Step 7: Cool slightly before serving.",
    "Step 8: Taste and adjust seasoning if required.",
    "Step 9: Serve as a healthy snack.",
    "Step 10: Optionally, sprinkle fresh herbs for garnish.",
    "Step 11: Store in an airtight container if not consumed immediately."
  ],
  nutrition: { calories: 160, protein: 8, carbs: 20, fat: 6 }
},
{
  id: 190,
  name: "Quinoa Bowl",
  category: "Diet",
  imageName: "quinoa_bowl",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Quinoa - ½ cup",
      "Mixed Vegetables - 1 cup",
      "Olive Oil - 1 tsp",
      "Salt - ½ tsp",
      "Water - 1 cup"
    ],
    optional: ["Lemon Juice - 1 tsp", "Coriander Leaves - 1 tbsp", "Feta Cheese - 1 tbsp, crumbled"]
  },
  preparation: [
    "Step 1: Rinse quinoa thoroughly in water.",
    "Step 2: Cook quinoa in 1 cup water until fluffy.",
    "Step 3: Steam or sauté mixed vegetables until tender.",
    "Step 4: In a bowl, combine cooked quinoa and vegetables.",
    "Step 5: Drizzle olive oil and lemon juice over the mixture.",
    "Step 6: Add salt and mix gently.",
    "Step 7: Top with chopped coriander leaves and feta cheese.",
    "Step 8: Toss lightly to combine all ingredients.",
    "Step 9: Taste and adjust seasoning if needed.",
    "Step 10: Serve warm or cold according to preference.",
    "Step 11: Optionally, add seeds or nuts for extra crunch."
  ],
  nutrition: { calories: 230, protein: 8, carbs: 35, fat: 7 }
},

// -------------------- Kids Special --------------------
{
  id: 191,
  name: "Mini Idli with Sambar",
  category: "Kids Special",
  imageName: "mini_idli",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Mini Idlis - 15 pieces",
      "Sambar - 1 cup",
      "Coriander Leaves - 1 tsp, chopped"
    ],
    optional: ["Ghee - 1 tsp", "Grated Coconut - 1 tsp"]
  },
  preparation: [
    "Step 1: Steam mini idlis for 10 mins until fluffy.",
    "Step 2: Wash and chop vegetables for sambar.",
    "Step 3: Cook toor dal until soft.",
    "Step 4: Prepare sambar with dal and vegetables; simmer for 10 mins.",
    "Step 5: Add tamarind extract, salt, and spices to sambar.",
    "Step 6: Heat sambar in a small pan before serving.",
    "Step 7: Place steamed idlis in a serving bowl.",
    "Step 8: Pour hot sambar over idlis.",
    "Step 9: Garnish with coriander leaves and grated coconut.",
    "Step 10: Drizzle a little ghee on top for flavor.",
    "Step 11: Serve warm to kids and enjoy."
  ],
  nutrition: { calories: 180, protein: 6, carbs: 30, fat: 4 }
},
{
  id: 192,
  name: "Cheese Dosa",
  category: "Kids Special",
  imageName: "cheese_dosa",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Dosa Batter - 1 cup",
      "Grated Cheese - ¼ cup",
      "Butter - 1 tsp"
    ],
    optional: ["Chopped Tomatoes - 2 tbsp", "Chopped Capsicum - 2 tbsp"]
  },
  preparation: [
    "Step 1: Heat a non-stick pan over medium flame.",
    "Step 2: Pour dosa batter and spread evenly.",
    "Step 3: Cook until base is slightly golden.",
    "Step 4: Sprinkle grated cheese over half of dosa.",
    "Step 5: Add chopped tomatoes and capsicum if desired.",
    "Step 6: Fold the dosa over the cheese side.",
    "Step 7: Press lightly and cook for 2–3 mins until cheese melts.",
    "Step 8: Remove dosa carefully from pan.",
    "Step 9: Serve hot with coconut chutney or tomato ketchup.",
    "Step 10: Optionally, drizzle a little butter on top.",
    "Step 11: Cut into small pieces suitable for kids."
  ],
  nutrition: { calories: 220, protein: 8, carbs: 30, fat: 10 }
},
{
  id: 193,
  name: "Veg Nuggets",
  category: "Kids Special",
  imageName: "veg_nuggets",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Mixed Vegetables - 1 cup, boiled and mashed",
      "Breadcrumbs - ½ cup",
      "Flour - 2 tbsp",
      "Spices - ½ tsp each (salt, pepper, paprika)"
    ],
    optional: ["Oil - 2 tsp for frying"]
  },
  preparation: [
    "Step 1: Boil and mash vegetables until smooth.",
    "Step 2: Mix mashed vegetables with flour and spices to form dough.",
    "Step 3: Shape mixture into small nugget shapes.",
    "Step 4: Roll nuggets in breadcrumbs evenly.",
    "Step 5: Heat oil in a pan over medium heat.",
    "Step 6: Shallow fry nuggets until golden brown, about 3–4 mins each side.",
    "Step 7: Drain excess oil on paper towels.",
    "Step 8: Arrange nuggets on a serving plate.",
    "Step 9: Serve warm with tomato ketchup.",
    "Step 10: Optionally, bake nuggets at 180°C for 15 mins for a healthier version.",
    "Step 11: Ensure nuggets are crisp before serving."
  ],
  nutrition: { calories: 150, protein: 4, carbs: 18, fat: 6 }
},
{
  id: 194,
  name: "Paneer Sandwich",
  category: "Kids Special",
  imageName: "paneer_sandwich",
  prepTime: "10 mins",
  cookTime: "10 mins",
  ingredients: {
    main: [
      "Bread Slices - 2",
      "Grated Paneer - ½ cup",
      "Butter - 1 tsp",
      "Mixed Veggies - 2 tbsp (carrot, capsicum, peas)"
    ],
    optional: ["Cheese Slice - 1", "Tomato Ketchup - 1 tsp"]
  },
  preparation: [
    "Step 1: Mix grated paneer with chopped vegetables and spices.",
    "Step 2: Spread butter evenly on bread slices.",
    "Step 3: Place paneer mixture on one slice.",
    "Step 4: Cover with another slice to make a sandwich.",
    "Step 5: Heat a pan and toast sandwich until golden on both sides.",
    "Step 6: Optionally, add a cheese slice inside for extra flavor.",
    "Step 7: Remove sandwich and cut into small squares or triangles.",
    "Step 8: Serve hot with tomato ketchup.",
    "Step 9: Ensure paneer is soft and slightly warm for kids.",
    "Step 10: Arrange neatly on a plate.",
    "Step 11: Enjoy immediately for best taste."
  ],
  nutrition: { calories: 200, protein: 8, carbs: 25, fat: 9 }
},
{
  id: 195,
  name: "Chocolate Milkshake",
  category: "Kids Special",
  imageName: "chocolate_milkshake",
  prepTime: "5 mins",
  cookTime: "0 mins",
  ingredients: {
    main: [
      "Milk - 1 cup",
      "Chocolate Syrup - 2 tbsp",
      "Ice Cubes - 4"
    ],
    optional: ["Whipped Cream - 1 tbsp", "Chocolate Chips - 1 tsp"]
  },
  preparation: [
    "Step 1: Pour milk into a blender.",
    "Step 2: Add chocolate syrup and ice cubes.",
    "Step 3: Blend until smooth and frothy.",
    "Step 4: Pour milkshake into a tall glass.",
    "Step 5: Top with whipped cream if desired.",
    "Step 6: Sprinkle chocolate chips on top.",
    "Step 7: Serve immediately chilled.",
    "Step 8: Optionally, add a scoop of vanilla ice cream for extra richness.",
    "Step 9: Stir gently before drinking.",
    "Step 10: Use straw for easy drinking.",
    "Step 11: Ensure kids consume quickly for best taste."
  ],
  nutrition: { calories: 180, protein: 6, carbs: 28, fat: 4 }
},
{
  id: 196,
  name: "Corn Cheese Balls",
  category: "Kids Special",
  imageName: "corn_cheese_balls",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Boiled Corn - ½ cup",
      "Grated Cheese - ¼ cup",
      "Breadcrumbs - ¼ cup",
      "Flour - 2 tbsp"
    ],
    optional: ["Oil - 2 tsp for frying", "Salt - ¼ tsp", "Paprika - ¼ tsp"]
  },
  preparation: [
    "Step 1: Mash boiled corn and mix with grated cheese.",
    "Step 2: Add salt, paprika, and mix well.",
    "Step 3: Form small balls from the mixture.",
    "Step 4: Coat balls first in flour, then in breadcrumbs.",
    "Step 5: Heat oil in a pan over medium flame.",
    "Step 6: Fry balls until golden brown on all sides.",
    "Step 7: Drain on paper towels to remove excess oil.",
    "Step 8: Arrange on a plate and serve warm.",
    "Step 9: Optionally, bake balls at 180°C for 10 mins for a healthier option.",
    "Step 10: Serve with tomato ketchup or sauce.",
    "Step 11: Ensure cheese is melted inside before serving."
  ],
  nutrition: { calories: 160, protein: 5, carbs: 18, fat: 7 }
},
{
  id: 197,
  name: "Pancakes",
  category: "Kids Special",
  imageName: "pan_cakes",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Flour - ½ cup",
      "Milk - ½ cup",
      "Eggs - 1",
      "Sugar - 2 tsp",
      "Baking Powder - 1 tsp"
    ],
    optional: ["Butter - 1 tsp", "Maple Syrup - 1 tbsp", "Fruits - ¼ cup, chopped"]
  },
  preparation: [
    "Step 1: Mix flour, sugar, and baking powder in a bowl.",
    "Step 2: Add milk and egg to make smooth batter.",
    "Step 3: Heat a non-stick pan on medium flame.",
    "Step 4: Pour a ladle of batter onto the pan.",
    "Step 5: Cook until bubbles form on the surface.",
    "Step 6: Flip pancake and cook until golden.",
    "Step 7: Repeat for remaining batter.",
    "Step 8: Stack pancakes and add butter and maple syrup.",
    "Step 9: Optionally, top with chopped fruits for kids.",
    "Step 10: Serve immediately while warm.",
    "Step 11: Ensure pancakes are soft and fluffy."
  ],
  nutrition: { calories: 210, protein: 6, carbs: 30, fat: 8 }
},
{
  id: 198,
  name: "Cupcake",
  category: "Kids Special",
  imageName: "cup_cake",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Flour - ½ cup",
      "Sugar - ¼ cup",
      "Eggs - 1",
      "Butter - 2 tbsp",
      "Baking Powder - ½ tsp"
    ],
    optional: ["Vanilla Essence - ¼ tsp", "Frosting - 2 tsp", "Sprinkles - 1 tsp"]
  },
  preparation: [
    "Step 1: Preheat oven to 180°C.",
    "Step 2: Mix flour and baking powder in a bowl.",
    "Step 3: In another bowl, whisk butter and sugar until fluffy.",
    "Step 4: Add eggs and vanilla essence to the butter mixture.",
    "Step 5: Combine wet and dry ingredients to form smooth batter.",
    "Step 6: Pour batter into cupcake molds.",
    "Step 7: Bake for 20 mins until golden and a toothpick comes out clean.",
    "Step 8: Remove and cool cupcakes completely.",
    "Step 9: Decorate with frosting and sprinkles.",
    "Step 10: Serve at room temperature.",
    "Step 11: Store in an airtight container if not consumed immediately."
  ],
  nutrition: { calories: 220, protein: 5, carbs: 30, fat: 10 }
},
{
  id: 199,
  name: "Fruit Custard",
  category: "Kids Special",
  imageName: "fruit_custard",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Milk - 2 cups",
      "Custard Powder - 2 tbsp",
      "Sugar - 2 tbsp",
      "Mixed Fruits - ½ cup, chopped"
    ],
    optional: ["Vanilla Essence - ¼ tsp", "Nuts - 1 tsp, chopped"]
  },
  preparation: [
    "Step 1: Boil milk in a pan over medium heat.",
    "Step 2: Mix custard powder with 2 tbsp cold milk to make a smooth paste.",
    "Step 3: Add custard paste to boiling milk while stirring continuously.",
    "Step 4: Cook until mixture thickens, about 5 mins.",
    "Step 5: Add sugar and vanilla essence, stir well.",
    "Step 6: Allow custard to cool slightly.",
    "Step 7: Chop fruits and add to custard.",
    "Step 8: Mix gently to combine.",
    "Step 9: Optionally, garnish with chopped nuts.",
    "Step 10: Chill in refrigerator for 10–15 mins.",
    "Step 11: Serve cold for kids."
  ],
  nutrition: { calories: 150, protein: 4, carbs: 25, fat: 4 }
},
{
  id: 200,
  name: "Potato Smiley",
  category: "Kids Special",
  imageName: "potato_smiley",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Boiled Potatoes - 2 medium",
      "Cornflour - 2 tbsp",
      "Salt - ½ tsp",
      "Spices - ¼ tsp each (pepper, paprika)"
    ],
    optional: ["Oil - 2 tsp for frying"]
  },
  preparation: [
    "Step 1: Mash boiled potatoes until smooth.",
    "Step 2: Add cornflour, salt, and spices; mix well to form dough.",
    "Step 3: Shape dough into smiley face shapes using molds.",
    "Step 4: Heat oil in a pan over medium flame.",
    "Step 5: Fry potato smileys until golden brown on both sides.",
    "Step 6: Drain on paper towels to remove excess oil.",
    "Step 7: Arrange smileys on a serving plate.",
    "Step 8: Serve warm with tomato ketchup.",
    "Step 9: Optionally, bake at 180°C for 15 mins for a healthier option.",
    "Step 10: Ensure smileys are crispy on the outside, soft inside.",
    "Step 11: Serve immediately for best taste."
  ],
  nutrition: { calories: 140, protein: 3, carbs: 25, fat: 4 }
},

{
  id: 201,
  name: "Mac & Cheese",
  category: "Kids Special",
  imageName: "mac_and_cheese",
  prepTime: "10 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Macaroni - 1 cup",
      "Cheese - ½ cup, grated",
      "Milk - 1 cup",
      "Butter - 2 tbsp",
      "Flour - 1 tbsp"
    ],
    optional: ["Breadcrumbs - 2 tbsp", "Salt - ½ tsp", "Pepper - ¼ tsp"]
  },
  preparation: [
    "Step 1: Boil macaroni in salted water until al dente, about 8–10 mins.",
    "Step 2: Drain macaroni and keep aside.",
    "Step 3: Melt butter in a saucepan over medium heat.",
    "Step 4: Add flour and cook for 1–2 mins to make roux.",
    "Step 5: Gradually add milk while stirring continuously to avoid lumps.",
    "Step 6: Cook until sauce thickens, about 3–4 mins.",
    "Step 7: Add grated cheese, salt, and pepper; stir until melted and smooth.",
    "Step 8: Mix macaroni into cheese sauce until coated evenly.",
    "Step 9: Transfer mixture to a greased baking dish.",
    "Step 10: Sprinkle breadcrumbs on top.",
    "Step 11: Bake at 180°C for 10–15 mins until golden and bubbly.",
    "Step 12: Serve warm immediately."
  ],
  nutrition: { calories: 250, protein: 10, carbs: 35, fat: 10 }
},
{
  id: 202,
  name: "Jelly",
  category: "Kids Special",
  imageName: "jelly",
  prepTime: "5 mins",
  cookTime: "60 mins",
  ingredients: {
    main: [
      "Jelly Powder - 1 pack (85 g)",
      "Water - 2 cups",
      "Sugar - 2 tbsp"
    ],
    optional: ["Chopped Fruits - ¼ cup for topping"]
  },
  preparation: [
    "Step 1: Boil 1 cup water in a pan.",
    "Step 2: Add sugar and stir until dissolved.",
    "Step 3: Remove from heat and add jelly powder gradually while stirring.",
    "Step 4: Add remaining cold water and mix well.",
    "Step 5: Pour mixture into molds or a tray.",
    "Step 6: Refrigerate for 1 hour to set.",
    "Step 7: Check if jelly is firm before unmolding.",
    "Step 8: Top with chopped fruits if desired.",
    "Step 9: Optionally, add cream for extra flavor.",
    "Step 10: Serve chilled immediately.",
    "Step 11: Store leftovers in fridge and consume within 1 day."
  ],
  nutrition: { calories: 120, protein: 1, carbs: 28, fat: 0 }
},
{
  id: 203,
  name: "Banana Bread",
  category: "Kids Special",
  imageName: "banana_bread",
  prepTime: "15 mins",
  cookTime: "40 mins",
  ingredients: {
    main: [
      "Bananas - 3 medium, ripe",
      "Flour - 1½ cups",
      "Sugar - ½ cup",
      "Eggs - 2",
      "Butter - 3 tbsp"
    ],
    optional: ["Baking Powder - 1 tsp", "Vanilla Essence - ½ tsp"]
  },
  preparation: [
    "Step 1: Preheat oven to 175°C.",
    "Step 2: Mash bananas in a large bowl until smooth.",
    "Step 3: Mix flour, sugar, and baking powder separately.",
    "Step 4: Add eggs, melted butter, and vanilla essence to mashed bananas.",
    "Step 5: Combine wet and dry ingredients to form a smooth batter.",
    "Step 6: Grease a loaf pan and pour batter into it.",
    "Step 7: Bake for 35–40 mins until golden and a toothpick comes out clean.",
    "Step 8: Remove from oven and cool for 10 mins.",
    "Step 9: Slice into pieces suitable for kids.",
    "Step 10: Serve warm or at room temperature.",
    "Step 11: Store leftovers in an airtight container."
  ],
  nutrition: { calories: 200, protein: 4, carbs: 35, fat: 6 }
},
{
  id: 204,
  name: "Choco Lava Cake",
  category: "Kids Special",
  imageName: "choco_lava_cake",
  prepTime: "10 mins",
  cookTime: "12 mins",
  ingredients: {
    main: [
      "Chocolate - 50 g",
      "Butter - 30 g",
      "Sugar - ¼ cup",
      "Eggs - 2",
      "Flour - 2 tbsp"
    ],
    optional: ["Vanilla Essence - ¼ tsp", "Cocoa Powder - 1 tsp"]
  },
  preparation: [
    "Step 1: Preheat oven to 200°C.",
    "Step 2: Melt chocolate and butter together in a double boiler.",
    "Step 3: Whisk eggs and sugar until frothy.",
    "Step 4: Gently combine chocolate mixture with eggs.",
    "Step 5: Sift in flour and fold gently to avoid deflating batter.",
    "Step 6: Pour batter into greased ramekins.",
    "Step 7: Bake for 10–12 mins until edges are firm and center is molten.",
    "Step 8: Remove from oven and let cool for 1–2 mins.",
    "Step 9: Run a knife along edges to loosen cake from ramekin.",
    "Step 10: Invert onto serving plate carefully.",
    "Step 11: Serve warm with a scoop of ice cream."
  ],
  nutrition: { calories: 250, protein: 5, carbs: 30, fat: 12 }
},
{
  id: 205,
  name: "Butter Cookies",
  category: "Kids Special",
  imageName: "butter_cookies",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Flour - 1 cup",
      "Butter - ½ cup",
      "Sugar - ¼ cup",
      "Eggs - 1"
    ],
    optional: ["Vanilla Essence - ½ tsp", "Chocolate Chips - 2 tbsp"]
  },
  preparation: [
    "Step 1: Preheat oven to 180°C.",
    "Step 2: Cream butter and sugar together until smooth.",
    "Step 3: Add eggs and vanilla essence; mix well.",
    "Step 4: Gradually add flour and form soft dough.",
    "Step 5: Optionally, fold in chocolate chips.",
    "Step 6: Shape dough into small cookie rounds.",
    "Step 7: Place on greased or lined baking tray.",
    "Step 8: Bake for 12–15 mins until edges are golden.",
    "Step 9: Remove from oven and cool completely.",
    "Step 10: Store in airtight container to keep cookies crisp.",
    "Step 11: Serve as a snack or with milk."
  ],
  nutrition: { calories: 180, protein: 3, carbs: 25, fat: 8 }
},
{
  id: 206,
  name: "Mini Pizza",
  category: "Kids Special",
  imageName: "mini_pizza",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Pizza Dough - ½ cup",
      "Tomato Sauce - 2 tbsp",
      "Cheese - ¼ cup, grated",
      "Mixed Veggies - ¼ cup, chopped"
    ],
    optional: ["Oregano - ¼ tsp", "Olive Oil - 1 tsp"]
  },
  preparation: [
    "Step 1: Preheat oven to 200°C.",
    "Step 2: Roll dough into small pizza bases.",
    "Step 3: Spread tomato sauce evenly on top.",
    "Step 4: Sprinkle grated cheese and chopped veggies.",
    "Step 5: Add oregano and drizzle olive oil if desired.",
    "Step 6: Bake for 15–20 mins until cheese melts and edges are golden.",
    "Step 7: Remove from oven and let cool for 2 mins.",
    "Step 8: Cut into bite-sized pieces for kids.",
    "Step 9: Serve warm immediately.",
    "Step 10: Optionally, add extra toppings like bell peppers or olives.",
    "Step 11: Ensure the pizza base is soft and cheesy."
  ],
  nutrition: { calories: 220, protein: 8, carbs: 30, fat: 10 }
},
{
  id: 207,
  name: "Cheese Toast",
  category: "Kids Special",
  imageName: "cheese_toast",
  prepTime: "5 mins",
  cookTime: "10 mins",
  ingredients: {
    main: [
      "Bread Slices - 2",
      "Cheese - 2 slices",
      "Butter - 1 tsp"
    ],
    optional: ["Chopped Tomatoes - 2 tbsp", "Oregano - ¼ tsp"]
  },
  preparation: [
    "Step 1: Spread butter on both bread slices.",
    "Step 2: Place cheese slices on top of one bread slice.",
    "Step 3: Add chopped tomatoes and sprinkle oregano.",
    "Step 4: Cover with second bread slice to make a sandwich.",
    "Step 5: Toast in pan or oven until cheese melts and bread turns golden.",
    "Step 6: Remove from heat and cut into small fingers for kids.",
    "Step 7: Arrange on a plate neatly.",
    "Step 8: Serve hot with ketchup or sauce.",
    "Step 9: Optionally, sprinkle some extra cheese on top before serving.",
    "Step 10: Ensure cheese is melted and bread is crisp.",
    "Step 11: Serve immediately for best taste."
  ],
  nutrition: { calories: 200, protein: 7, carbs: 28, fat: 8 }
},
{
  id: 208,
  name: "Veggie Fingers",
  category: "Kids Special",
  imageName: "veggie_fingers",
  prepTime: "15 mins",
  cookTime: "20 mins",
  ingredients: {
    main: [
      "Boiled Vegetables - 1 cup (carrot, beans, peas), mashed",
      "Breadcrumbs - ½ cup",
      "Flour - 2 tbsp",
      "Spices - ¼ tsp each (salt, pepper)"
    ],
    optional: ["Oil - 2 tsp for frying"]
  },
  preparation: [
    "Step 1: Mash boiled vegetables until smooth.",
    "Step 2: Mix mashed vegetables with flour and spices to form dough.",
    "Step 3: Shape mixture into finger-like sticks.",
    "Step 4: Coat sticks evenly with breadcrumbs.",
    "Step 5: Heat oil in a pan over medium flame.",
    "Step 6: Shallow fry veggie fingers until golden and crisp.",
    "Step 7: Drain excess oil on paper towels.",
    "Step 8: Arrange fingers neatly on a plate.",
    "Step 9: Serve warm with ketchup.",
    "Step 10: Optionally, bake at 180°C for 10–12 mins for healthier version.",
    "Step 11: Ensure kids can hold and eat easily."
  ],
  nutrition: { calories: 160, protein: 5, carbs: 18, fat: 6 }
},
{
  id: 209,
  name: "Waffle Sticks",
  category: "Kids Special",
  imageName: "waffle_sticks",
  prepTime: "10 mins",
  cookTime: "15 mins",
  ingredients: {
    main: [
      "Flour - ½ cup",
      "Milk - ½ cup",
      "Eggs - 1",
      "Sugar - 2 tsp",
      "Baking Powder - 1 tsp"
    ],
    optional: ["Vanilla Essence - ¼ tsp", "Maple Syrup - 1 tbsp"]
  },
  preparation: [
    "Step 1: Mix flour, sugar, and baking powder in a bowl.",
    "Step 2: Add milk, eggs, and vanilla to make smooth batter.",
    "Step 3: Preheat waffle maker and lightly grease.",
    "Step 4: Pour batter into waffle mold evenly.",
    "Step 5: Cook until golden and crisp, about 3–5 mins.",
    "Step 6: Remove waffle carefully and cut into sticks.",
    "Step 7: Arrange sticks neatly on a plate.",
    "Step 8: Serve warm with maple syrup.",
    "Step 9: Optionally, sprinkle powdered sugar on top.",
    "Step 10: Perfect for breakfast or snack.",
    "Step 11: Ensure waffles are soft inside and crisp outside."
  ],
  nutrition: { calories: 210, protein: 6, carbs: 30, fat: 8 }
},
{
  id: 210,
  name: "Fruit Smoothie",
  category: "Kids Special",
  imageName: "fruit_smoothie",
  prepTime: "5 mins",
  cookTime: "0 mins",
  ingredients: {
    main: [
      "Milk - 1 cup",
      "Banana - 1 medium",
      "Berries - ¼ cup",
      "Honey - 1 tsp"
    ],
    optional: ["Yogurt - 2 tbsp", "Ice Cubes - 3"]
  },
  preparation: [
    "Step 1: Combine milk, banana, berries, and honey in a blender.",
    "Step 2: Add yogurt and ice cubes if desired.",
    "Step 3: Blend until smooth and creamy.",
    "Step 4: Pour smoothie into glasses.",
    "Step 5: Serve chilled immediately.",
    "Step 6: Optionally, top with sliced fruits or nuts.",
    "Step 7: Ensure smoothie is smooth for easy drinking.",
    "Step 8: Use straw or spoon for kids to drink.",
    "Step 9: Stir gently before serving.",
    "Step 10: Serve immediately for freshness.",
    "Step 11: Store any leftovers in fridge for 1–2 hours only."
  ],
  nutrition: { calories: 150, protein: 5, carbs: 28, fat: 3 }
}
];