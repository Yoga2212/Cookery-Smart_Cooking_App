// src/pages/CategoryRecipes.js
import React from "react";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { recipeData } from "../data/recipeData";

// 🔹 Helper to import all images dynamically
function importAll(r) {
  const images = {};
  r.keys().forEach((key) => {
    const name = key
      .replace("./", "")
      .replace(/\.(png|jpe?g|svg)$/i, "")
      .toLowerCase()
      .replace(/[\s-]/g, "_");
    images[name] = r(key);
  });
  console.log("✅ Imported Images:", Object.keys(images)); // <-- add this line
  return images;
}



// 🔹 Import all category images
const categoryImages = {
  breakfast: importAll(require.context("../assets/Images/breakfast", false, /\.(png|jpe?g|svg)$/)),
  lunch: importAll(require.context("../assets/Images/lunch", false, /\.(png|jpe?g|svg)$/)),
  dinner: importAll(require.context("../assets/Images/dinner", false, /\.(png|jpe?g|svg)$/)),
  chinese_recipes: importAll(require.context("../assets/Images/chinese_recipes", false, /\.(png|jpe?g|svg)$/)),
  italian_recipes: importAll(require.context("../assets/Images/italian_recipes", false, /\.(png|jpe?g|svg)$/)),
  north_indian_special: importAll(require.context("../assets/Images/north_indian_special", false, /\.(png|jpe?g|svg)$/)),
  south_indian_special: importAll(require.context("../assets/Images/south_indian_special", false, /\.(png|jpe?g|svg)$/)),
  street_food: importAll(require.context("../assets/Images/street_food", false, /\.(png|jpe?g|svg)$/)),
diet: importAll(require.context("../assets/Images/diet", true, /\.(png|jpe?g|svg)$/)),
snacks: importAll(require.context("../assets/Images/snacks", true, /\.(png|jpe?g|svg)$/)),
kids_special: importAll(require.context("../assets/Images/kids_special", false, /\.(png|jpe?g|svg)$/)),

};

function CategoryRecipes() {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryName = location.state?.categoryName || "Category";

  const categoryKey = categoryName.toLowerCase().replace(/[\s-]/g, "_");
  const images = categoryImages[categoryKey] || {};

  console.log("🧭 Category Key:", categoryKey);
console.log("📸 Images Imported:", Object.keys(images));
console.log(
  "📋 Recipes Found:",
  recipeData
    .filter((r) => r.category.toLowerCase().replace(/[\s-]/g, "_") === categoryKey)
    .map((r) => r.imageName)
);


  const recipes = Object.keys(images).map((imgKey) => {
    // 🔹 Match recipe by normalized imageName
    const recipe = recipeData.find((r) => {
      const normalizedImageName = r.imageName
        .toLowerCase()
        .replace(/\.(png|jpe?g)$/, "")
        .replace(/[\s-]/g, "_");
      return (
        r.category.toLowerCase().replace(/[\s-]/g, "_") === categoryKey &&
        normalizedImageName === imgKey
      );
    });

    return {
      src: images[imgKey],
      id: recipe?.id,
      displayName: recipe
        ? recipe.name
        : imgKey.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    };
  });

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ padding: "20px 50px" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: "#ff610c",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          &lt; Back
        </button>
      </div>

      <h2
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "1000",
          color: "#ff610c",
          textDecoration: "underline",
          margin: "10px 0 30px 0",
        }}
      >
        {categoryName.toUpperCase()}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "25px",
          justifyItems: "center",
          padding: "0 40px 40px",
        }}
      >
        {recipes.map((recipe, idx) => (
          <div
            key={idx}
            onClick={() => {
              if (recipe.id) {
                navigate(`/recipe/${recipe.id}`);
              } else {
                console.warn("⚠️ No recipe matched:", recipe.displayName);
                alert(`No recipe data found for "${recipe.displayName}"`);
              }
            }}
            style={{
              width: "350px",
              height: "160px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "20px",
              padding: "15px",
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer",
            }}
            className="hover-scale"
          >
            <img
              src={recipe.src}
              alt={recipe.displayName}
              style={{
                width: "180px",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <span
              style={{
                fontWeight: "1000",
                fontSize: "20px",
                color: "#ff610c",
                textAlign: "left",
                flex: 1,
              }}
            >
              {recipe.displayName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryRecipes;
