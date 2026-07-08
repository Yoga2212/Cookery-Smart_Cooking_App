// client/src/pages/Login.js
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);
  const okButtonRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (res.status === 400 || res.status === 404) {
        setAlertMsg(data.message || "Invalid email or password!");
        setAlertSuccess(false);
        setShowAlert(true);
      } else if (res.status === 200) {
        const userData = data.user;

        localStorage.setItem(
          "user",
          JSON.stringify({
            _id: data.user._id,
            username: userData.username,
            name: userData.name,
            phone: userData.phone || "",
            location: userData.location || "",
            bio: userData.bio || "",
            token: data.token,
          })
        );

        setAlertMsg(`Welcome back, ${userData.name} 👋🏻`);
        setAlertSuccess(true);
        setShowAlert(true);
      }
    } catch (err) {
      setAlertMsg("Server error. Please try again later.");
      setAlertSuccess(false);
      setShowAlert(true);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);

    if (alertSuccess) {
      setTimeout(() => navigate("/home"), 100);
    } else {
      setTimeout(() => window.location.reload(), 100);
    }
  };

  // ✅ Focus OK button when alert appears
  useEffect(() => {
    if (showAlert && okButtonRef.current) {
      okButtonRef.current.focus();
    }
  }, [showAlert]);

  // ✅ Enter key triggers alert close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showAlert && e.key === "Enter") {
        closeAlert();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showAlert]);

  // ✅ Enter key triggers login (when not in alert)
  useEffect(() => {
    const handleEnterKey = (e) => {
      if (!showAlert && e.key === "Enter") {
        handleSubmit(e);
      }
    };
    window.addEventListener("keydown", handleEnterKey);
    return () => window.removeEventListener("keydown", handleEnterKey);
  }, [form, showAlert]); // listen for form updates

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffffff",
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

      <h2
        style={{
          fontSize: "36px",
          fontWeight: "700",
          color: "#ff610c",
          marginBottom: "40px",
          zIndex: 1,
        }}
      >
        Login
      </h2>

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
          type="email"
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
          type="password"
          name="password"
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
          Login
        </button>
      </form>

      <p style={{ marginTop: "20px", zIndex: 1 }}>
        Don’t have an account? <Link to="/register">Create New One</Link>
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

export default Login;
