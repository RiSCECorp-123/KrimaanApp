const express = require('express');
const { registerFarmer, loginFarmer, getFarmerById } = require('../controllers/farmerControllers');

const router = express.Router();

// Register Farmer
router.post('/register', registerFarmer);

// Login Farmer
router.post('/login', loginFarmer);

// Get Farmer by ID
router.get('/farmer/:id', getFarmerById);


module.exports = router;
