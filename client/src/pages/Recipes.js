import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// 🔹 Function to dynamically import all images from nested category folders
function importAll(r) {
  const images = {};
  r.keys().forEach((path) => {
    const parts = path.replace("./", "").split("/");
    const category = parts[0];
    const recipeName = parts[1].replace(/\.(png|jpe?g|svg)$/, "");
    if (!images[category]) images[category] = {};
    images[category][recipeName] = r(path);
  });
  return images;
}

// 🔹 Import all images
const allImages = importAll(require.context("../assets/Images", true, /\.(png|jpe?g|svg)$/));

// 🔹 Helper to format names
const formatRecipeName = (str) =>
  str.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
const formatCategoryName = (str) => str.replace(/_/g, " ").toUpperCase();

function Recipes() {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem("searchResults");
    return saved ? JSON.parse(saved) : [];
  });
  const [query, setQuery] = useState(() => localStorage.getItem("lastQuery") || "");
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"))?.name || "User";

  // 🔹 Flatten all recipes
  const getAllRecipes = () => {
    const list = [];
    Object.keys(allImages).forEach((category) => {
      Object.keys(allImages[category]).forEach((recipeName) => {
        list.push({
          title: recipeName,
          category,
          image: allImages[category][recipeName],
          ingredients: [],
          steps: [],
        });
      });
    });
    return list;
  };

  // 🔹 Search Function (auto-trigger on typing)
  const handleSearch = (searchText) => {
    const allRecipes = getAllRecipes();
    const text = searchText.toLowerCase();

    if (!text.trim()) {
      setRecipes([]);
      localStorage.removeItem("searchResults");
      localStorage.removeItem("lastQuery");
      return;
    }

    setLoading(true);
    const filtered = allRecipes.filter(
      (r) =>
        r.title.toLowerCase().includes(text) ||
        r.category.toLowerCase().includes(text)
    );

    setRecipes(filtered);
    localStorage.setItem("searchResults", JSON.stringify(filtered));
    localStorage.setItem("lastQuery", searchText);

    if (filtered.length === 0) {
      setAlertMsg(`No recipes found for "${searchText}"`);
      setShowAlert(true);
    }
    setLoading(false);
  };

  // 🔹 Focus input when page loads
  useEffect(() => {
    if (searchRef.current) searchRef.current.focus();
  }, []);

  // 🔹 Auto search when typing (real-time)
  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim()) handleSearch(query);
      else {
        setRecipes([]);
        localStorage.removeItem("searchResults");
        localStorage.removeItem("lastQuery");
      }
    }, 300); // debounce delay
    return () => clearTimeout(delay);
  }, [query]);

  // 🔹 Close alert
  const closeAlert = () => {
    setShowAlert(false);
    if (searchRef.current) searchRef.current.focus();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        padding: "60px 20px 100px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* 👋 Hello user */}
      <h2
        style={{
          alignSelf: "flex-start",
          marginLeft: "60px",
          color: "#ff610c",
          fontWeight: "600",
          fontSize: "24px",
        }}
      >
        Hello, <span style={{ color: "#333" }}>{user}</span> 👋🏻
      </h2>

      {/* Page Title */}
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "#ff610c",
          marginTop: "20px",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        Find Recipes
      </h1>

      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div style={{ position: "relative", width: "320px" }}>
          <input
            ref={searchRef}
            type="text"
            placeholder="Search recipes or categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: "12px 40px 12px 15px",
              width: "100%",
              borderRadius: "12px",
              border: "2px solid #ff610c",
              fontSize: "16px",
              outline: "none",
              boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
              transition: "0.2s",
            }}
          />
          <FaSearch
            style={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#ff610c",
              fontSize: 18,
              cursor: "pointer",
            }}
            onClick={() => handleSearch(query)}
          />
        </div>
      </div>

      {/* Recipes List */}
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading recipes...</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            width: "100%",
            maxWidth: 400,
          }}
        >
          {recipes.map((recipe, index) => (
            <div
              key={index}
              style={{
                borderRadius: 12,
                width: "100%",
                padding: 15,
                backgroundColor: "#ffffff",
                fontWeight: 500,
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
            >
              {recipe.image && (
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  style={{
                    width: "100%",
                    height: 180,
                    objectFit: "cover",
                    borderRadius: "12px",
                    marginBottom: 10,
                  }}
                />
              )}
              <h3 style={{ marginBottom: 8 }}>{formatRecipeName(recipe.title)}</h3>
              <p style={{ fontWeight: "600", marginBottom: 8 }}>
                Category: {formatCategoryName(recipe.category)}
              </p>

              <button
                style={{
                  marginTop: 10,
                  backgroundColor: "#ff610c",
                  color: "#fff",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: 8,
                  cursor: "pointer",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e55a0c")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff610c")}
                onClick={() =>
                  navigate(`/recipe/${recipe.title}`, {
                    state: { recipeName: recipe.title },
                  })
                }
              >
                Cook Now
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Alert Box */}
      {showAlert && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              width: "320px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "25px",
                fontWeight: "500",
              }}
            >
              {alertMsg}
            </p>
            <button
              onClick={closeAlert}
              style={{
                backgroundColor: "#ff610c",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e55a0c")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#ff610c")
              }
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recipes;
