// server/routes/userRoutes.js

import express from "express";
import User from "../models/user.js";

const router = express.Router();

// Update user details
router.put("/update", async (req, res) => {
  try {
    const { username, name, phone, location, bio } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (location) user.location = location;
    if (bio) user.bio = bio;

    await user.save();

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
