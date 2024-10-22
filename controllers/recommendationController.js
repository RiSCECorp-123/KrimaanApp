// /controllers/recommendationController.js
const Farmer = require('../models/Farmer');

exports.getCropRecommendation = async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.params.id);
    if (!farmer) {
      return res.status(404).json({ message: 'Farmer not found' });
    }

    // Return the pre-existing crop recommendation
    const recommendation = {
      details: `Recommended crop for ${farmer.name}: ${farmer.cropRecommendation || 'No recommendation available'}`,
    };

    res.json(recommendation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

