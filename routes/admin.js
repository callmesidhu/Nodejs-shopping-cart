var express = require('express');
var router = express.Router();
const Product = require('../models/Product'); // Correctly import the Product model



// CREATE
router.post('/add', async function(req, res) {
    try {
        const { title, image, description, price } = req.body;

        // Simple validation
        if (!title || !image || !description || !price) {
            return res.status(400).send('All fields are required'); // Check for required fields
        }

        // Create a new product instance
        const newProduct = new Product({
            title,
            image,
            description,
            price: parseFloat(price), // Ensure price is a number
        });

        // Save the product to the database
        await newProduct.save();

        console.log('Product added successfully:', newProduct.id);

        // Redirect back to the admin page or show a success message
        res.redirect('/admin');
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).send('Server error'); // Handle any errors
    }
});





/* GET route to fetch all products */
router.get('/', async (req, res) => {
    try {
        // const products = await Product.find(); // Fetch all products from MongoDB
        const products = await Product.find().sort({ createdAt: -1 }); // Fetch products sorted in descending order
        res.render('admin.hbs', {products}); // Render the admin page
       // res.json(products); // Send the data to the frontend as JSON
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server error' }); // Handle any errors
    }
});


module.exports = router; // Export the router
