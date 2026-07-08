const Pantry = require("../models/Pantry");

// Add item to pantry
exports.addPantryItem = async (req, res) => {
  try {
    const { name, quantity } = req.body;

    let pantry = await Pantry.findOne({ userId: req.userId });
    if (!pantry) {
      pantry = new Pantry({ userId: req.userId, items: [] });
    }

    pantry.items.push({ name, quantity });
    await pantry.save();

    res.json({ msg: "Item added to pantry", pantry });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get pantry items
exports.getPantry = async (req, res) => {
  try {
    const pantry = await Pantry.findOne({ userId: req.userId });
    res.json(pantry || { items: [] });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
