const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product = require('../models/Product'); // Replace with the correct path
const path = require('path');






// Render the admin panel with current products
router.get('/', async (req, res) => {
  const products=[{
    name:"iphone 14",
    price: 79999,
    discription:"offer closes soon",
    image:"images/product-10.jpg"
  },{
    name:"S23",
    price: 89222,
    discription: "android king",
    image:"images/product-9.jpg"
  },{
    name:"Shoe",
    price: 5000,
    discription: "best shoe ever",
    image: "images/product-7.jpg"
  },{
    name:"watch",
    price: 1222,
    discription: "android watch",
    image:"images/product-8.jpg"
  }]
    res.render('admin', { products });
});

// Handle form submission and return updated product list
router.post('/admin', upload.single('image'), async (req, res, next) => {
  try {
    console.log(req.body)
    const { title, description, price } = req.body;
    const imagePath = `/images/${req.file.filename}`;

    const newProduct = new Product({
      title,
      image: imagePath,
      description,
      price
    });

    const savedData = await newProduct.save();
    console.log('Saved data:', savedData);
    res.redirect('/admin');

  } catch (error) {
    console.error('Error adding product:', error);
    next(error);
  }
});

module.exports = router;
