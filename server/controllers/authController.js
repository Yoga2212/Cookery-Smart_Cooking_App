const User = require("../models/user");   
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check user exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Username doesn't exist" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Password mismatch" });

    const token = jwt.sign({ id: user._id }, "secret123", { expiresIn: "1h" });

    // ✅ Return name with token
    res.json({ msg: "Login success", token, name: user.name });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// authController.js
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("name");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json({ name: user.name });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
