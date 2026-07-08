import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);

  const linkStyle = (path) => ({
    color: location.pathname === path ? "#ff610c" : "#000",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "18px",
  });

  // 🔹 Handle Enter key to confirm logout
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && showLogoutAlert) {
        handleLogoutConfirm();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [showLogoutAlert]);

  const handleLogoutConfirm = () => {
    setShowLogoutAlert(false);
    // 🟠 Optional: clear local storage or token here if needed
    navigate("/login");
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 30px",
          borderBottom: "1px solid #eee",
          fontFamily: "Poppins, sans-serif",
          backgroundColor: "#fff",
          height: "80px",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "30px",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <img src={logo} alt="logo" style={{ height: "50px" }} />

          <Link to="/home" style={linkStyle("/home")}>Home</Link>
          <Link to="/categories" style={linkStyle("/categories")}>Categories</Link>
          <Link to="/recipes" style={linkStyle("/recipes")}>Search</Link>
          <Link to="/pantry" style={linkStyle("/pantry")}>Pantry</Link>
          <Link to="/grocery" style={linkStyle("/grocery")}>Grocery</Link>
          <Link to="/mealplanner" style={linkStyle("/mealplanner")}>Meal Planner</Link>
          <Link to="/settings" style={linkStyle("/settings")}>Settings</Link>

          {/* 🔹 Logout Button */}
          <button
            onClick={() => setShowLogoutAlert(true)}
            style={{
              backgroundColor: "#ff610c",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* 🔸 Custom Alert Box */}
      {showLogoutAlert && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 200,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              width: "300px",
            }}
          >
            <h3 style={{ marginBottom: "20px", color: "#333" }}>
              Are you sure you want to logout?
            </h3>
            <button
              onClick={handleLogoutConfirm}
              style={{
                backgroundColor: "#ff610c",
                color: "#fff",
                border: "none",
                padding: "10px 25px",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
            <button
              onClick={() => setShowLogoutAlert(false)}
              style={{
                backgroundColor: "#ccc",
                color: "#000",
                border: "none",
                padding: "10px 25px",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
