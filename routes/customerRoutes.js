const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// router GET api/customers - http://localhost:5000/api/customers
// description Get all customers
// access Public

router.get('/', customerController.getAll);

module.exports = router;
