import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

// 🔹 Automatically import all categories from `client/src/assets/Images`
function importCategories() {
  const categoriesContext = require.context(
    "../assets/Images",
    true,
    /\.(png|jpe?g|svg)$/
  );

  const categories = {};
  categoriesContext.keys().forEach((path) => {
    const folder = path.split("/")[1];
    if (!categories[folder]) categories[folder] = [];
    categories[folder].push({
      src: categoriesContext(path),
      name: path
        .split("/")
        .pop()
        .split(".")[0]
        .replace(/_/g, " ")
        .toLowerCase(),
    });
  });

  return Object.keys(categories).map((key) => {
    let formattedName = key.replace(/_/g, " ").toLowerCase();
    formattedName = formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
    return {
      name: formattedName,
      images: categories[key],
    };
  });
}


function Categories() {
  const navigate = useNavigate();
  const [user, setUser] = useState("User");
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.name) setUser(storedUser.name);

    // 🔹 Load all categories automatically
    setAllCategories(importCategories());
  }, []);

  return (
    <div style={{ padding: "40px 20px", fontFamily: "Poppins, sans-serif" }}>
      {/* 👋 Hello User */}
      <div
        style={{
          marginBottom: "20px",
          fontSize: "24px",
          fontWeight: "600",
          color: "#ff610c",
        }}
      >
        Hello, <span style={{ color: "#333" }}>{user}</span> 👋🏻
      </div>

      {/* 🔹 Top Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "80px",
          marginBottom: "30px",
        }}
      >
        {/* For You Tab */}
        <div
          onClick={() => navigate("/home")}
          style={{
            cursor: "pointer",
            color: "#000",
            fontWeight: 700,
            fontSize: "26px",
            borderBottom: "3px solid transparent",
            paddingBottom: "5px",
          }}
        >
          For You
        </div>

        {/* Categories Tab */}
        <div
          style={{
            cursor: "default",
            color: "#ff610c",
            fontWeight: 700,
            fontSize: "26px",
            borderBottom: "3px solid #ff610c",
            paddingBottom: "5px",
          }}
        >
          Categories
        </div>
      </div>

      {/* 🔹 Categories List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxHeight: "80vh",
          overflowY: "auto",
          alignItems: "center",
          paddingRight: "10px",
        }}
      >
        {allCategories.map((cat, idx) => (
          <div
            key={idx}
            onClick={() =>
              navigate("/category-recipes", { state: { categoryName: cat.name } })
            }
            style={{
              width: "50%",
              height: "80px",
              backgroundColor: "#fff",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              padding: "0 20px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "transform 0.2s",
              
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <span style={{ fontWeight: "500", fontSize: "20px" }}>{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
