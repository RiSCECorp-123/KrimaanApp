

// Middleware cors to eastablish the connection between MongoDb and Nodejs


const Farmer = require('../models/Farmer');

// Register Farmer
exports.registerFarmer = async (req, res) => {
  const { name, id, password, address } = req.body;
  try {
    const newFarmer = new Farmer({ name, id, password, address });
    await newFarmer.save();
    res.status(201).json({ message: 'Farmer registered successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error registering farmer', error: err });
  }
};

// Login Farmer
exports.loginFarmer = async (req, res) => {
  const { id, password } = req.body;
  try {
    const farmer = await Farmer.findOne({ id, password });
    if (!farmer) return res.status(400).json({ message: 'Invalid credentials' });
    res.status(200).json(farmer);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};

// Get Farmer by ID
exports.getFarmerById = async (req, res) => {
  const { id } = req.params;
  try {
    const farmer = await Farmer.findOne({ id });
    if (!farmer) return res.status(404).json({ message: 'Farmer not found' });
    res.status(200).json(farmer);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};
