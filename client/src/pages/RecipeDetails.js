import { useParams, useNavigate, useLocation } from "react-router-dom";
import { recipeData } from "../data/recipeData";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

// 🔹 Import all images from categories
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
  return images;
}

const categoryImages = {
  breakfast: importAll(require.context("../assets/Images/breakfast", false, /\.(png|jpe?g|svg)$/)),
  lunch: importAll(require.context("../assets/Images/lunch", false, /\.(png|jpe?g|svg)$/)),
  dinner: importAll(require.context("../assets/Images/dinner", false, /\.(png|jpe?g|svg)$/)),
  chinese_recipes: importAll(require.context("../assets/Images/chinese_recipes", false, /\.(png|jpe?g|svg)$/)),
  italian_recipes: importAll(require.context("../assets/Images/italian_recipes", false, /\.(png|jpe?g|svg)$/)),
  north_indian_special: importAll(require.context("../assets/Images/north_indian_special", false, /\.(png|jpe?g|svg)$/)),
  south_indian_special: importAll(require.context("../assets/Images/south_indian_special", false, /\.(png|jpe?g|svg)$/)),
  street_food: importAll(require.context("../assets/Images/street_food", false, /\.(png|jpe?g|svg)$/)),
  snacks: importAll(require.context("../assets/Images/snacks", true, /\.(png|jpe?g|svg)$/)),
  diet: importAll(require.context("../assets/Images/diet", true, /\.(png|jpe?g|svg)$/)),
  kids_special: importAll(require.context("../assets/Images/kids_special", false, /\.(png|jpe?g|svg)$/)),
};

// 🔹 Helpers
const formatRecipeName = (str) =>
  str.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const formatCategoryName = (str) =>
  str.replace(/_/g, " ").toUpperCase();

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [recipe, setRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let foundRecipe = null;

    if (location.state?.recipeName) {
      const normalized = location.state.recipeName
        .toLowerCase()
        .replace(/[\s-]/g, "_");

      foundRecipe = recipeData.find(
        (r) => r.name.toLowerCase().replace(/[\s-]/g, "_") === normalized
      );
    } else if (id) {
      foundRecipe = recipeData.find((r) => r.id === Number(id));
    }

    setRecipe(foundRecipe);
  }, [id, location.state]);

  if (!recipe)
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: "24px",
          color: "red",
        }}
      >
        Recipe not found
      </div>
    );

  const categoryKey = recipe.category.toLowerCase().replace(/[\s-]/g, "_");
  const imagesForCategory = categoryImages[categoryKey];
  const imageName = recipe.imageName.toLowerCase().replace(/[\s-]/g, "_");
  const imageSrc = imagesForCategory ? imagesForCategory[imageName] : null;

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
    >
      <Navbar />

      {/* Back Button */}
      <div style={{ padding: "20px 50px", textAlign: "left" }}>
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

      {/* Recipe Name */}
      <h1
        style={{
          textAlign: "center",
          color: "#ff610c",
          fontSize: "36px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        {formatRecipeName(recipe.name)}
      </h1>

      {/* Recipe Image with Hover Effect */}
      {imageSrc ? (
        <div
          style={{
            cursor: "pointer",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            transition: "transform 0.3s, box-shadow 0.3s",
            margin: "0 auto 20px",
            width: "400px",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
          }}
          onClick={() => setShowModal(true)}
        >
          <img
            src={imageSrc}
            alt={recipe.name}
            style={{
              width: "400px",
              height: "400px",
              objectFit: "cover",
            }}
          />
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "red",
            margin: "20px",
          }}
        >
          Image not found
        </div>
      )}

      {/* Modal for Image */}
{showModal && imageSrc && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    }}
  >
    {/* ❌ Exit Button (Top Right Corner) */}
    <button
      onClick={() => setShowModal(false)}
      style={{
        position: "absolute",
        top: "20px",
        right: "30px",
        background: "rgba(255, 97, 12, 0.9)",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        fontSize: "20px",
        cursor: "pointer",
        fontWeight: "bold",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#e55a0c")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 97, 12, 0.9)")}
    >
      ✖
    </button>

    {/* Image */}
    <img
      src={imageSrc}
      alt={recipe.name}
      style={{
        maxHeight: "90%",
        maxWidth: "90%",
        borderRadius: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
        cursor: "default",
      }}
    />
  </div>
)}

      {/* Prep & Cook Time */}
      <div
        style={{
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "600",
          color: "#333",
          margin: "10px 0 40px",
        }}
      >
        <span style={{ marginRight: "20px" }}>
          Prep Time: {recipe.prepTime}
        </span>
        <span>Cook Time: {recipe.cookTime}</span>
      </div>

      {/* Ingredients, Preparation, Nutrition */}
      <div
        style={{
          width: "90%",
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {/* Ingredients */}
        <div>
          <h2
            style={{
              color: "#ff610c",
              marginBottom: "10px",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            Ingredients:
          </h2>
          {Array.isArray(recipe.ingredients) ? (
            <ul
              style={{
                lineHeight: "1.8",
                fontSize: "20px",
                listStyleType: "disc",
                paddingLeft: "20px",
              }}
            >
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          ) : (
            Object.entries(recipe.ingredients).map(([section, items], idx) => (
              <div key={idx} style={{ marginBottom: "15px" }}>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    color: "#ff8800",
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}:
                </h3>
                <ul
                  style={{
                    lineHeight: "1.8",
                    fontSize: "20px",
                    listStyleType: "disc",
                    paddingLeft: "20px",
                  }}
                >
                  {items.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>

        {/* Preparation */}
        <div>
          <h2
            style={{
              color: "#ff610c",
              marginBottom: "10px",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            Preparation Steps:
          </h2>
          <ul
            style={{
              lineHeight: "1.8",
              fontSize: "20px",
              paddingLeft: "20px",
            }}
          >
            {recipe.preparation.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </div>

        {/* Nutrition */}
        <div>
          <h2
            style={{
              color: "#ff610c",
              marginBottom: "10px",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            Nutrition:
          </h2>
          <ul
            style={{
              lineHeight: "1.8",
              fontSize: "20px",
              paddingLeft: "20px",
            }}
          >
            <li>Calories: {recipe.nutrition.calories}</li>
            <li>Protein: {recipe.nutrition.protein}</li>
            <li>Carbs: {recipe.nutrition.carbs}</li>
            <li>Fat: {recipe.nutrition.fat}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
