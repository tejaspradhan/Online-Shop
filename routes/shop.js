const express = require("express");
const path = require('path')
const router = express.Router();
const adminData = require("./admin.js");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render('shop.pug',{prods: products, docTitle:'Shop'});
});

module.exports = router;
