const path = require('path');

const express = require('express');

const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postNewProduct);

module.exports = router;
