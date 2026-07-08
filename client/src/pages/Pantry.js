import React, { useState, useEffect, useContext } from "react";
import { PantryContext } from "../context/PantryContext";
import logo from "../assets/logo.png";
import { FaTrash } from "react-icons/fa";

const Pantry = () => {
  const { items, setItems } = useContext(PantryContext);
  const [input, setInput] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState({ date: "", index: null });

  // Get user name
  const user = JSON.parse(localStorage.getItem("user"))?.name || "User";

  // auto-focus input box when page loads
  useEffect(() => {
    document.getElementById("pantryInput")?.focus();
  }, []);

  const addItem = () => {
    if (input.trim() === "") return;

    const formattedItem =
      input.trim().charAt(0).toUpperCase() + input.trim().slice(1);

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB"); // dd/mm/yyyy

    const updatedItems = {
      ...items,
      [formattedDate]: [...(items[formattedDate] || []), formattedItem],
    };

    setItems(updatedItems);
    setInput("");
  };

  const requestDeleteItem = (date, index) => {
    setDeleteTarget({ date, index });
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    const { date, index } = deleteTarget;
    const updated = { ...items };
    updated[date].splice(index, 1);
    if (updated[date].length === 0) delete updated[date];
    setItems(updated);
    setShowDeleteConfirm(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#fff",
        padding: "60px 20px 100px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 🔶 Watermark Logo */}
      <img
        src={logo}
        alt="logo"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "300px",
          opacity: 0.3,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 👋 Greeting */}
      <h2
        style={{
          alignSelf: "flex-start",
          marginLeft: "60px",
          color: "#ff610c",
          fontWeight: "600",
          fontSize: "24px",
          zIndex: 1,
        }}
      >
        Hello, <span style={{ color: "#333" }}>{user}</span> 👋🏻
      </h2>

      {/* 📦 Page Title */}
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "#ff610c",
          marginTop: "20px",
          marginBottom: "40px",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        Items in My Pantry
      </h1>

      {/* 🧺 Input Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginBottom: "50px",
          zIndex: 1,
        }}
      >
        <input
          id="pantryInput"
          type="text"
          placeholder="Add pantry item..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addItem()}
          style={{
            padding: "12px 20px",
            width: "320px",
            borderRadius: "12px",
            border: "2px solid #ff610c",
            fontSize: "16px",
            outline: "none",
            boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
            zIndex: 1,
            transition: "0.2s",
          }}
        />
        <button
          onClick={addItem}
          style={{
            backgroundColor: "#ff610c",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            padding: "10px 25px",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "0.2s",
            zIndex: 1,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#e55a0c")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#ff610c")
          }
        >
          ➕ Add Item
        </button>
      </div>

      {/* 📝 Pantry Items Grouped by Date */}
      <div
        style={{
          width: "90%",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          zIndex: 1,
        }}
      >
        {Object.keys(items)
          .sort(
            (a, b) =>
              new Date(b.split("/").reverse()) - new Date(a.split("/").reverse())
          )
          .map((date) => (
            <div
              key={date}
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {/* Date Heading */}
              <h3
                style={{
                  color: "#ff610c",
                  fontWeight: "600",
                  fontSize: "20px",
                  marginBottom: "10px",
                  borderBottom: "2px solid #ff610c",
                  display: "inline-block",
                }}
              >
                🗓️ {date}
              </h3>

              {/* Items for that date */}
              {items[date].map((item, idx) => (
                <div
                  key={`${date}-${idx}`}
                  style={{
                    width: "100%",
                    backgroundColor: "#fff3eb",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    transition: "0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)")
                  }
                >
                  <span>
                    {idx + 1}. {item}
                  </span>
                  <FaTrash
                    onClick={() => requestDeleteItem(date, idx)}
                    style={{
                      cursor: "pointer",
                      color: "#ff610c",
                      fontSize: "18px",
                      transition: "0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#e55a0c")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#ff610c")
                    }
                  />
                </div>
              ))}
            </div>
          ))}
      </div>

      {/* ❗ Delete Confirmation Modal */}
      {showDeleteConfirm && (
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
              backgroundColor: "#fff",
              padding: "30px 40px",
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
              Are you sure you want to delete this pantry item?
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <button
                onClick={confirmDelete}
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
                🗑️ Delete
              </button>
              <button
                onClick={cancelDelete}
                style={{
                  backgroundColor: "#fff",
                  color: "#ff610c",
                  border: "2px solid #ff610c",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ff610c") ||
                  (e.currentTarget.style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#fff") ||
                  (e.currentTarget.style.color = "#ff610c")
                }
              >
                ❌ Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pantry;
