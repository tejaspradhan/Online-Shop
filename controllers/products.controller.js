const {Product}= require('../models/products.model');
const getAddProducts = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
    });
}

const postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}

const getProducts =  (req, res, next) => {
  const products = Product.fetchAll();
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  })
};

module.exports={
    getAddProducts,
    postAddProducts,
    getProducts,
};