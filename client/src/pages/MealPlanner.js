import React, { useState, useEffect, useContext } from "react";
import { AppDataContext } from "../context/AppDataContext";
import logo from "../assets/logo.png";
import { FaTrash } from "react-icons/fa";

const MealPlanner = () => {
  const { meals, setMeals } = useContext(AppDataContext);
  const [form, setForm] = useState({ date: "", type: "", recipeId: "" });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteTargetIndex, setDeleteTargetIndex] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const user = JSON.parse(localStorage.getItem("user"))?.name || "User";

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "type" || e.target.name === "recipeId") {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
    setForm({ ...form, [e.target.name]: value });
  };

  const addMeal = (e) => {
    e?.preventDefault();
    if (!form.date || !form.type || !form.recipeId) return;

    const selectedDate = new Date(form.date);
    const today = new Date();
    today.setHours(0,0,0,0);
    if (selectedDate < today) {
      setAlertMessage("You cannot add a meal for a past date!");
      setShowAlert(true);
      return;
    }

    setMeals([...meals, { ...form }]);
    setForm({ date: "", type: "", recipeId: "" });
  };

  const requestDeleteMeal = (index) => {
    setDeleteTargetIndex(index);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    const updated = [...meals];
    updated.splice(deleteTargetIndex, 1);
    setMeals(updated);
    setShowDeleteConfirm(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  const closeAlert = () => setShowAlert(false);

  // Group meals by date (ascending order)
  const groupedMeals = meals.reduce((acc, meal) => {
    const formattedDate = new Date(meal.date).toLocaleDateString("en-GB");
    if (!acc[formattedDate]) acc[formattedDate] = [];
    acc[formattedDate].push(meal);
    return acc;
  }, {});

  const sortedDates = Object.keys(groupedMeals).sort(
    (a, b) => new Date(a.split("/").reverse()) - new Date(b.split("/").reverse())
  );

  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "#fff", padding: "60px 20px 100px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Watermark */}
      <img src={logo} alt="logo" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "300px", height: "300px", opacity: 0.3, pointerEvents: "none", zIndex: 0 }} />

      

      {/* Greeting */}
      <h2 style={{ alignSelf: "flex-start", marginLeft: "60px", color: "#ff610c", fontWeight: "600", fontSize: "24px", zIndex: 1 }}>
        Hello, <span style={{ color: "#333" }}>{user}</span> 👋🏻
      </h2>

      <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#ff610c", marginTop: "20px", marginBottom: "40px", textAlign: "center", zIndex: 1 }}>
        Meal Planner
      </h1>

      {/* Input Form */}
      <form style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", zIndex: 1 }} onSubmit={addMeal}>
        <input name="date" type="date" value={form.date} onChange={handleChange} style={{ padding: "12px 20px", width: "320px", borderRadius: "12px", border: "2px solid #ff610c", fontSize: "16px", outline: "none", boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }} />
        <input name="type" placeholder="Meal Type" value={form.type} onChange={handleChange} style={{ padding: "12px 20px", width: "320px", borderRadius: "12px", border: "2px solid #ff610c", fontSize: "16px", outline: "none", boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }} />
        <input name="recipeId" placeholder="Recipe ID" value={form.recipeId} onChange={handleChange} style={{ padding: "12px 20px", width: "320px", borderRadius: "12px", border: "2px solid #ff610c", fontSize: "16px", outline: "none", boxShadow: "0 4px 8px rgba(0,0,0,0.15)" }} />
        <button type="submit" style={{ backgroundColor: "#ff610c", color: "#fff", border: "none", borderRadius: "12px", padding: "10px 25px", fontSize: "16px", cursor: "pointer", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", transition: "0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e55a0c")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff610c")}>
          ➕ Add Meal
        </button>
      </form>

      {/* Meals List */}
      <div style={{ width: "90%", maxWidth: "600px", display: "flex", flexDirection: "column", gap: "20px", zIndex: 1, marginTop: "40px" }}>
        {sortedDates.length === 0 ? (
          <p style={{ textAlign: "center", color: "#999", fontSize: "16px", marginTop: "20px" }}>No meals planned yet!</p>
        ) : (
          sortedDates.map(date => (
            <div key={date} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3 style={{ color: "#ff610c", fontWeight: "600", fontSize: "20px", marginBottom: "10px", borderBottom: "2px solid #ff610c", display: "inline-block" }}>🗓️ {date}</h3>
              {groupedMeals[date].map((meal, idx) => (
                <div key={idx} style={{ width: "100%", backgroundColor: "#fff3eb", padding: "12px 16px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "16px", fontWeight: "500", transition: "0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)"}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)"}>
                  <span>{idx + 1}. {meal.type} - {meal.recipeId}</span>
                  <FaTrash onClick={() => requestDeleteMeal(meals.indexOf(meal))} style={{ cursor: "pointer", color: "#ff610c", fontSize: "18px", transition: "0.2s" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#e55a0c"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#ff610c"} />
                </div>
              ))}
            </div>
          ))
        )}
      </div>

      {/* ❗ Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999 }}>
          <div style={{ backgroundColor: "#fff", padding: "30px 40px", borderRadius: "15px", textAlign: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.2)", width: "320px" }}>
            <p style={{ fontSize: "18px", marginBottom: "25px", fontWeight: "500" }}>Are you sure you want to delete this meal?</p>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
              <button onClick={confirmDelete} style={{ backgroundColor: "#ff610c", color: "#fff", border: "none", borderRadius: "10px", padding: "10px 20px", fontSize: "16px", cursor: "pointer", transition: "0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e55a0c")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff610c")}>
                🗑️ Delete
              </button>
              <button onClick={cancelDelete} style={{ backgroundColor: "#fff", color: "#ff610c", border: "2px solid #ff610c", borderRadius: "10px", padding: "10px 20px", fontSize: "16px", cursor: "pointer", transition: "0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#ff610c"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fff"; e.currentTarget.style.color = "#ff610c"; }}>
                ❌ Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ❗ Alert Modal */}
      {showAlert && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999 }}>
          <div style={{ backgroundColor: "#fff", padding: "30px 40px", borderRadius: "15px", textAlign: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.2)", width: "320px" }}>
            <p style={{ fontSize: "18px", marginBottom: "25px", fontWeight: "500" }}>{alertMessage}</p>
            <button onClick={closeAlert} style={{ backgroundColor: "#ff610c", color: "#fff", border: "none", borderRadius: "10px", padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#e55a0c"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#ff610c"}>
              OK
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default MealPlanner;
