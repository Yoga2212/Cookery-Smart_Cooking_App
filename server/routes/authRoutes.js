//server/routes/authRoutes.js
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const router = express.Router();

// 🔹 Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body; // frontend sends email only
    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields required" });

    // 🎯 Use email as username and normalize
    const normalizedEmail = email.toLowerCase();

    // ✅ Check if user already exists by email (username = email)
    const existingUser = await User.findOne({ username: normalizedEmail });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: normalizedEmail, // ✅ username = email
      name,
      email: normalizedEmail,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during registration" });
  }
});

// 🔹 Login
router.post("/login", async (req, res) => {
  try {
    const { identifier, password } = req.body; // identifier = email from frontend
    if (!identifier || !password)
      return res.status(400).json({ message: "All fields required" });

    const normalizedIdentifier = identifier.toLowerCase();

    // ✅ Find user by username (email)
    const user = await User.findOne({ username: normalizedIdentifier });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "secret123", { expiresIn: "1d" });

    res.status(200).json({
      message: "Login successful",
      token,
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during login" });
  }
});

// 🔹 Update User Profile
router.put("/update", async (req, res) => {
  try {
    const { username, name, phone, location, bio } = req.body;

    if (!username) {
      return res.status(400).json({ message: "Username (email) required" });
    }

    // Find user by username (email)
    const user = await User.findOne({ username: username.toLowerCase() });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update only allowed fields
    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (location) user.location = location;
    if (bio) user.bio = bio;

    await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while updating profile" });
  }
});

export default router;
