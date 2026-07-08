// client/src/pages/Settings.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import axios from "axios";

function Settings() {
  const navigate = useNavigate();
  const phoneRef = useRef(null);

  const [user, setUser] = useState({
    username: "",
    name: "",
    phone: "",
    location: "",
    bio: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [tempUser, setTempUser] = useState({});
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [invalidFocus, setInvalidFocus] = useState(false);

  // Load user data from localStorage
  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user")) || {};
      setUser({
        username: storedUser.username || "",
        name: storedUser.name || "",
        phone: storedUser.phone || "",
        location: storedUser.location || "",
        bio: storedUser.bio || "",
      });
    } catch (err) {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempUser({ ...tempUser, [name]: value });
    if (name === "phone") {
      setPhoneError("");
      setInvalidFocus(false);
    }
  };

  const handleEdit = () => {
    setTempUser(user);
    setEditMode(true);
  };

  const validatePhone = () => {
    const phone = tempUser.phone || "";
    const phoneRegex = /^[6-9]\d{9}$/;
    if (phone && !phoneRegex.test(phone)) {
      setPhoneError("Invalid mobile number");
      setInvalidFocus(true);
      phoneRef.current?.focus();
      return false;
    }
    setPhoneError("");
    setInvalidFocus(false);
    return true;
  };

  const handleConfirmSave = async () => {
    if (!validatePhone()) return;

    try {
      const API_URL = "http://localhost:5000/api/auth/update";
      const payload = { ...tempUser, username: user.username };

      const response = await axios.put(API_URL, payload);

      if (response.data && response.data.user) {
        const updatedUser = response.data.user;
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setEditMode(false);
        setShowSaveConfirm(false);
        setShowSuccessAlert(true);
      } else {
        alert(response.data.message || "Failed to save changes: Bad response format");
      }
    } catch (err) {
      console.error("Error updating user:", err.response ? err.response.data : err.message);
      const errorMessage =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : "Failed to save changes. Check backend is running!";
      alert(errorMessage);
    }
  };

  const handleDiscard = () => {
    setTempUser(user);
    setShowSaveConfirm(false);
    setEditMode(false);
    setPhoneError("");
    setInvalidFocus(false);
  };

  // 🔹 Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (!editMode) return;

      // ✅ If alert box open → close it
      if (showSuccessAlert) {
        setShowSuccessAlert(false);
        return;
      }

      // ✅ If Save Confirm box open → Save changes
      if (showSaveConfirm) {
        handleConfirmSave();
        return;
      }

      // ✅ Otherwise show confirmation box
      if (!showSaveConfirm) {
        if (validatePhone()) setShowSaveConfirm(true);
      }
    }
  };

  const handleLogout = () => setShowLogoutConfirm(true);
  const handleLogoutConfirm = () => {
    localStorage.clear();
    setShowLogoutConfirm(false);
    navigate("/login");
  };
  const handleCancelLogout = () => setShowLogoutConfirm(false);

  return (
    <div
      onKeyDown={handleKeyDown}
      tabIndex="0"
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
        overflowX: "hidden",
        padding: "0 20px",
      }}
    >
      <Navbar />
      <img
        src={logo}
        alt="watermark"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          opacity: 0.3,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "fixed",
          top: "100px",
          left: "40px",
          marginLeft: "60px",
          fontSize: "24px",
          fontWeight: "600",
          color: "#ff610c",
          zIndex: 2,
        }}
      >
        Hello, <span style={{ color: "#333" }}>{user.name || "User"}</span> 👋🏻
      </div>

      <h2
        style={{
          color: "#ff610c",
          fontWeight: "700",
          fontSize: "34px",
          marginTop: "150px",
          marginBottom: "40px",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        Personal Details
      </h2>

      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          paddingBottom: "200px",
          zIndex: 1,
        }}
      >
        <div>
          <label style={{ fontWeight: "600" }}>Username (Email)</label>
          <input type="text" value={user.username || ""} disabled style={inputDisabledStyle} />
        </div>

        <div>
          <label style={{ fontWeight: "600" }}>Full Name</label>
          <input
            type="text"
            name="name"
            value={editMode ? tempUser.name || "" : user.name || ""}
            onChange={handleChange}
            disabled={!editMode}
            style={editMode ? inputEditStyle : inputDisabledStyle}
          />
        </div>

        <div>
          <label style={{ fontWeight: "600" }}>Phone Number</label>
          <input
            ref={phoneRef}
            type="tel"
            name="phone"
            value={editMode ? tempUser.phone || "" : user.phone || ""}
            onChange={handleChange}
            disabled={!editMode}
            placeholder="Enter your phone number"
            style={{
              ...(!editMode ? inputDisabledStyle : inputEditStyle),
              border: phoneError || invalidFocus ? "2px solid red" : "1.5px solid #ccc",
            }}
          />
          {phoneError && (
            <p style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>{phoneError}</p>
          )}
        </div>

        <div>
          <label style={{ fontWeight: "600" }}>Location</label>
          <input
            type="text"
            name="location"
            value={editMode ? tempUser.location || "" : user.location || ""}
            onChange={handleChange}
            disabled={!editMode}
            style={editMode ? inputEditStyle : inputDisabledStyle}
          />
        </div>

        <div>
          <label style={{ fontWeight: "600" }}>Bio</label>
          <textarea
            name="bio"
            value={editMode ? tempUser.bio || "" : user.bio || ""}
            onChange={handleChange}
            disabled={!editMode}
            placeholder="Write something about yourself..."
            style={{
              ...(!editMode ? inputDisabledStyle : inputEditStyle),
              minHeight: "100px",
              resize: "none",
            }}
          />
        </div>

        {!editMode ? (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button onClick={handleEdit} style={orangeBtn}>
              Edit Profile
            </button>
          </div>
        ) : (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button
              onClick={() => {
                if (validatePhone()) setShowSaveConfirm(true);
              }}
              style={orangeBtn}
            >
              Save Changes
            </button>
          </div>
        )}

        {!editMode && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button onClick={handleLogout} style={darkBtn}>
              Logout
            </button>
          </div>
        )}
      </div>

      {/* 🔸 Save Confirmation Modal (with Exit) */}
      {showSaveConfirm && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <button onClick={() => setShowSaveConfirm(false)} style={exitBtnStyle}>
              ×
            </button>
            <h3>Do you want to save the changes?</h3>
            <div style={buttonRowStyle}>
              <button style={orangeBtn} onClick={handleConfirmSave}>
                Save Changes
              </button>
              <button style={grayBtn} onClick={handleDiscard}>
                Discard Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🔸 Logout Confirmation Modal (with Exit) */}
      {showLogoutConfirm && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <button onClick={() => setShowLogoutConfirm(false)} style={exitBtnStyle}>
              ×
            </button>
            <h3>Are you sure you want to logout?</h3>
            <div style={buttonRowStyle}>
              <button style={orangeBtn} onClick={handleLogoutConfirm}>
                Logout
              </button>
              <button style={grayBtn} onClick={handleCancelLogout}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

     {/* 🔸 Success Alert (Enter key also closes) */}
{showSuccessAlert && (
  <div
    style={overlayStyle}
    tabIndex="0"
    ref={(el) => el && el.focus()} // Auto-focus overlay when rendered
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        setShowSuccessAlert(false);
      }
    }}
  >
    <div style={modalStyle}>
      <h3 style={{ color: "#000" }}>✅ Profile updated successfully!</h3>
      <button style={orangeBtn} onClick={() => setShowSuccessAlert(false)}>
        OK
      </button>
    </div>
  </div>
)}


      <p
        style={{
          position: "fixed",
          bottom: "20px",
          fontSize: "20px",
          fontWeight: "700",
          color: "#ff610c",
          letterSpacing: "3px",
        }}
      >
        COOKERY
      </p>
    </div>
  );
}

// --- Styles ---
const inputEditStyle = {
  width: "100%",
  padding: "14px 16px",
  border: "1.5px solid #ccc",
  borderRadius: "14px",
  backgroundColor: "#fff",
  boxSizing: "border-box",
};

const inputDisabledStyle = {
  width: "100%",
  padding: "14px 16px",
  border: "1.5px solid #ccc",
  borderRadius: "14px",
  backgroundColor: "#f5f5f5",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  boxSizing: "border-box",
};

const orangeBtn = {
  background: "#ff610c",
  color: "#fff",
  padding: "12px 28px",
  borderRadius: "14px",
  border: "none",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
};

const darkBtn = {
  background: "#222",
  color: "#fff",
  padding: "12px 28px",
  borderRadius: "14px",
  border: "none",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
};

const grayBtn = {
  background: "#ccc",
  color: "#000",
  padding: "10px 20px",
  borderRadius: "10px",
  border: "none",
  fontWeight: "600",
  cursor: "pointer",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  position: "relative",
  background: "#fff",
  padding: "30px 40px",
  borderRadius: "16px",
  textAlign: "center",
  boxShadow: "0 6px 25px rgba(0,0,0,0.2)",
  minWidth: "320px",
};

const buttonRowStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "20px",
};

const exitBtnStyle = {
  position: "absolute",
  top: "10px",
  right: "15px",
  background: "transparent",
  border: "none",
  fontSize: "24px",
  fontWeight: "bold",
  color: "#555",
  cursor: "pointer",
};

export default Settings;
