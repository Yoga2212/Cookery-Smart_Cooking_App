const Grocery = require("../models/Grocery");

// Add grocery item
exports.addGroceryItem = async (req, res) => {
  try {
    const { name, quantity } = req.body;

    let grocery = await Grocery.findOne({ userId: req.userId });
    if (!grocery) {
      grocery = new Grocery({ userId: req.userId, items: [] });
    }

    grocery.items.push({ name, quantity });
    await grocery.save();

    res.json({ msg: "Item added to grocery list", grocery });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get grocery list
exports.getGrocery = async (req, res) => {
  try {
    const grocery = await Grocery.findOne({ userId: req.userId });
    res.json(grocery || { items: [] });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
