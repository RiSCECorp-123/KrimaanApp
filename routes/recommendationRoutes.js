const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');


router.get('/recommendation/:id', recommendationController.getCropRecommendation);

module.exports = router;
