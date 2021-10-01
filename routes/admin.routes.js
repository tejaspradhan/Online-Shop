const path = require('path');

const express = require('express');
const productsController = require('../controllers/products.controller')
const rootDir = require('../util/path');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productsController.getAddProducts);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProducts);

exports.routes = router;
