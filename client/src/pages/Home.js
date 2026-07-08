import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import { recipeData } from "../data/recipeData"; // 🔹 import recipeData

// 🔹 Function to import all images from a folder
function importAll(r) {
  return r.keys().map((path) => {
    const name = path
      .split("/")
      .pop()
      .split(".")[0]
      .replace(/_/g, " ")
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
    return { src: r(path), name };
  });
}

// 🔹 Import images category-wise
const breakfast = importAll(require.context("../assets/Images/breakfast", false, /\.(png|jpe?g|svg)$/));
const chineseRecipes = importAll(require.context("../assets/Images/chinese_recipes", false, /\.(png|jpe?g|svg)$/));
const dinner = importAll(require.context("../assets/Images/dinner", false, /\.(png|jpe?g|svg)$/));
const italianRecipes = importAll(require.context("../assets/Images/italian_recipes", false, /\.(png|jpe?g|svg)$/));
const lunch = importAll(require.context("../assets/Images/lunch", false, /\.(png|jpe?g|svg)$/));
const northIndianSpecial = importAll(require.context("../assets/Images/north_indian_special", false, /\.(png|jpe?g|svg)$/));
const southIndianSpecial = importAll(require.context("../assets/Images/south_indian_special", false, /\.(png|jpe?g|svg)$/));
const streetFood = importAll(require.context("../assets/Images/street_food", false, /\.(png|jpe?g|svg)$/));

const forYouCategories = [
  { name: "BREAKFAST", images: breakfast },
  { name: "CHINESE RECIPES", images: chineseRecipes },
  { name: "DINNER", images: dinner },
  { name: "ITALIAN RECIPES", images: italianRecipes },
  { name: "LUNCH", images: lunch },
  { name: "NORTH INDIAN SPECIAL", images: northIndianSpecial },
  { name: "SOUTH INDIAN SPECIAL", images: southIndianSpecial },
  { name: "STREET FOOD", images: streetFood },
];

function Home() {
  const [activeSection, setActiveSection] = useState("forYou");
  const [user, setUser] = useState("User");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.name) setUser(storedUser.name);
  }, []);

  // 🔹 Function to get recipe by image name and category
  const getRecipeByImage = (categoryName, imageName) => {
    const categoryKey = categoryName.toLowerCase().replace(/[\s-]/g, " ");
    return recipeData.find(
      (r) =>
        r.category.toLowerCase() === categoryKey &&
        r.imageName.toLowerCase().replace(/_/g, " ") === imageName.toLowerCase()
    );
  };

  return (
    <div style={{ padding: "40px 20px", fontFamily: "Poppins, sans-serif" }}>
      {/* Hello User */}
      <div style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "600", color: "#ff610c" }}>
        Hello <span style={{ color: "#333" }}>{user}</span> 👋🏻
      </div>

      {/* Section Tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "80px", marginBottom: "30px" }}>
        <div
          onClick={() => setActiveSection("forYou")}
          style={{
            cursor: "pointer",
            color: activeSection === "forYou" ? "#ff610c" : "#000",
            fontWeight: "700",
            fontSize: "26px",
            borderBottom: activeSection === "forYou" ? "3px solid #ff610c" : "3px solid transparent",
            paddingBottom: "5px",
          }}
        >
          For You
        </div>

        <div
          onClick={() => navigate("/categories")}
          style={{
            cursor: "pointer",
            color: "#000",
            fontWeight: "700",
            fontSize: "26px",
            borderBottom: "3px solid transparent",
            paddingBottom: "5px",
          }}
        >
          Categories
        </div>
      </div>

      {/* For You Section */}
      {activeSection === "forYou" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {forYouCategories.map((cat) => (
            <div key={cat.name}>
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "1000",
                    color: "#ff610c",
                    textDecoration: "underline",
                  }}
                >
                  {cat.name}
                </h3>

                {/* 🔹 More > Button */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "20px 50px 0 50px",
                  }}
                >
                  <button
                    onClick={() =>
                      navigate("/category-recipes", { state: { categoryName: cat.name } })
                    }
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
                    More &gt;
                  </button>
                </div>
              </div>

              {/* Horizontal scroll images */}
              <div
                className="scroll-container"
                style={{
                  display: "flex",
                  overflowX: "auto",
                  gap: "15px",
                  paddingBottom: "10px",
                }}
              >
                {cat.images.slice(0, 10).map((img, idx) => (
                  <div
                    key={idx}
                    className="hover-box"
                    style={{
                      flex: "0 0 calc(100% / 8 - 15px)",
                      minHeight: "200px",
                      maxHeight: "200px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                      position: "relative",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      const recipe = getRecipeByImage(cat.name, img.name);
                      if (recipe) navigate(`/recipe/${recipe.id}`);
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "12px",
                      }}
                    />

                    {/* Name Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        background: "rgba(0,0,0,0.5)",
                        color: "#fff",
                        textAlign: "center",
                        fontWeight: "800",
                        padding: "6px 0",
                        fontSize: "16px",
                        borderBottomLeftRadius: "12px",
                        borderBottomRightRadius: "12px",
                      }}
                    >
                      {img.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Vertical scroll hint */}
          <div
            onClick={() => navigate("/categories")}
            style={{
              marginTop: "30px",
              fontWeight: "700",
              fontSize: "28px",
              textAlign: "center",
              color: "#ff610c",
              cursor: "pointer",
            }}
          >
            For more items → move to category page
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
