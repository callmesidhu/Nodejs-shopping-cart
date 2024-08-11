const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product = require('../models/Product'); // Replace with the correct path

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images'); // Save images in the public/images directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Ensure unique filenames
  }
});

const upload = multer({ storage });

// Render the admin panel with current products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('admin', { products });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Handle form submission
router.post('/add', upload.single('image'), async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const imagePath = `/images/${req.file.filename}`;

    const newProduct = new Product({
      title,
      image: imagePath,
      description,
      price
    });

    await newProduct.save();
    res.redirect('/admin');
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
