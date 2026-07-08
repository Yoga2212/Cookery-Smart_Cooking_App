// server/controllers/userController.js

import User from "../models/user.js";

// Update user details
export const updateUser = async (req, res) => {
  try {
    const { email, name, phone, location, bio } = req.body;

    // Find user by email (or id)
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Update fields
    user.name = name || user.name;
    user.phone = phone || user.phone;
    user.location = location || user.location;
    user.bio = bio || user.bio;

    await user.save();

    res.status(200).json({ message: "User updated successfully", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update user" });
  }
};
