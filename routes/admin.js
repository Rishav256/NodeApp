const path = require('path');

const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router();

router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postNewProduct);

module.exports = router;
