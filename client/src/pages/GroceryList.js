import React, { useContext, useState, useRef, useEffect } from "react";
import { AppDataContext } from "../context/AppDataContext";
import logo from "../assets/logo.png";
import { FaTrash } from "react-icons/fa";

function GroceryList() {
  const { groceryItems, setGroceryItems } = useContext(AppDataContext); // global persistent state
  const [input, setInput] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const inputRef = useRef(null);

  const user = JSON.parse(localStorage.getItem("user"))?.name || "User";

  // auto-focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const addItem = () => {
    if (!input.trim()) return;
    const formattedItem =
      input.trim().charAt(0).toUpperCase() + input.trim().slice(1);
    setGroceryItems([...groceryItems, formattedItem]);
    setInput("");
    setShowAlert(true);
    inputRef.current?.blur();
  };

  const requestDeleteItem = (index) => {
    setDeleteTarget(index);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    const newItems = [...groceryItems];
    newItems.splice(deleteTarget, 1);
    setGroceryItems(newItems);
    setShowDeleteConfirm(false);
    setDeleteTarget(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setDeleteTarget(null);
  };

  const closeAlert = () => {
    setShowAlert(false);
    inputRef.current?.focus();
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
      {/* Watermark logo */}
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

      {/* Greeting */}
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
        🛒 Grocery List
      </h1>

      {/* Input Section */}
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
          ref={inputRef}
          type="text"
          placeholder="Add grocery item..."
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

      {/* Grocery Items */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          width: "90%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          zIndex: 1,
        }}
      >
        {groceryItems.map((item, idx) => (
          <li
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#fff3eb",
              padding: "12px 16px",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
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
              onClick={() => requestDeleteItem(idx)}
              style={{
                cursor: "pointer",
                color: "#ff610c",
                fontSize: "18px",
                transition: "0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e55a0c")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#ff610c")}
            />
          </li>
        ))}
      </ul>

      {/* Alert for item added */}
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
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 0 15px rgba(0,0,0,0.3)",
            }}
          >
            <p style={{ marginBottom: "20px", fontSize: "18px" }}>
              Grocery item added!
            </p>
            <button
              onClick={closeAlert}
              style={{
                padding: "10px 20px",
                backgroundColor: "#ff610c",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e55a0c")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff610c")}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
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
              Are you sure you want to delete this grocery item?
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
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
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e55a0c")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff610c")}
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ff610c";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.color = "#ff610c";
                }}
              >
                ❌ Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GroceryList;
