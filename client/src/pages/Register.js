// client/src/pages/Register.js
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);
  const okButtonRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop page refresh

    // Password match check
    if (form.password !== form.confirmPassword) {
      setAlertMsg("Password and Confirm Password do not match!");
      setAlertSuccess(false);
      setShowAlert(true);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.status === 400) {
        setAlertMsg(data.msg || "User already exists!");
        setAlertSuccess(false);
        setShowAlert(true);
      } else if (res.status === 201) {
    // Save full user object including username
    localStorage.setItem(
    "user",
    JSON.stringify({
    username: data.email, // ✅ Email store as username
    name: data.name,
    phone: data.phone || "",
    location: data.location || "",
    bio: data.bio || "",
    token: data.token,
  })
);


    setAlertMsg(`Welcome ${data.name} 👋🏻`);
    setAlertSuccess(true);
    setShowAlert(true);
}

    } catch (err) {
      setAlertMsg("Server error");
      setAlertSuccess(false);
      setShowAlert(true);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);

    if (alertSuccess) {
      // ✅ Success -> Navigate to home
      setTimeout(() => navigate("/home"), 100);
    } else {
      // ❌ Error -> Refresh page
      setTimeout(() => window.location.reload(), 100);
    }
  };

  // Focus OK button when alert shows
  useEffect(() => {
    if (showAlert && okButtonRef.current) {
      okButtonRef.current.focus();
    }
  }, [showAlert]);

  // Handle Enter key for alert modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showAlert && e.key === "Enter") {
        closeAlert();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showAlert]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Logo watermark */}
      <img
        src={logo}
        alt="logo"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "350px",
          height: "350px",
          opacity: 0.3,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Page Heading */}
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "700",
          color: "#ff610c",
          marginBottom: "40px",
          zIndex: 1,
        }}
      >
        Create Account
      </h2>

      {/* Register Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
          maxWidth: "400px",
          zIndex: 1,
        }}
      >
        <input
          name="name"
          placeholder="Enter Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            padding: "14px 16px",
            borderRadius: "20px",
            border: "2px solid #000",
            fontSize: "16px",
            outline: "none",
            boxShadow: "0 6px 12px rgba(0,0,0,0.12)",
            transition: "0.2s",
            color: "#000",
          }}
        />
        <input
          name="email"
          placeholder="Enter Email Address"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            padding: "14px 16px",
            borderRadius: "20px",
            border: "2px solid #000",
            fontSize: "16px",
            outline: "none",
            boxShadow: "0 6px 12px rgba(0,0,0,0.12)",
            transition: "0.2s",
            color: "#000",
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          required
          style={{
            padding: "14px 16px",
            borderRadius: "20px",
            border: "2px solid #000",
            fontSize: "16px",
            outline: "none",
            boxShadow: "0 6px 12px rgba(0,0,0,0.12)",
            transition: "0.2s",
            color: "#000",
          }}
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          style={{
            padding: "14px 16px",
            borderRadius: "20px",
            border: "2px solid #000",
            fontSize: "16px",
            outline: "none",
            boxShadow: "0 6px 12px rgba(0,0,0,0.12)",
            transition: "0.2s",
            color: "#000",
          }}
        />

        <button
          type="submit"
          style={{
            background: "#ff610c",
            color: "#fff",
            padding: "14px",
            border: "none",
            borderRadius: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
            fontSize: "16px",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#e55a0c")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#ff610c")}
        >
          Register
        </button>
      </form>

      <p style={{ marginTop: "20px", zIndex: 1 }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>

      <p
        style={{
          position: "fixed",
          bottom: "20px",
          fontSize: "22px",
          fontWeight: "700",
          color: "#ff610c",
          letterSpacing: "3px",
        }}
      >
        COOKERY
      </p>

      {/* ✅ Custom Alert Modal */}
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
              padding: "30px 40px",
              borderRadius: "20px",
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
              ref={okButtonRef}
              onClick={closeAlert}
              style={{
                backgroundColor: "#ff610c",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e55a0c")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff610c")}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
