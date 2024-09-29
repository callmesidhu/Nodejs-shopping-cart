var express = require('express');
var router = express.Router();
const Product = require('./models/Product'); // Adjust the path if necessary

/* GET admin page. */
router.get('/', function(req, res, next) {    
  res.render('admin.hbs', {});
});

// Corrected route for adding a product
router.post('/add', async function(req, res) {
        try {
                const newProduct = new Product({
                    title: req.body.title,
                    image: req.body.image, // Handle image upload properly
                    description: req.body.description,
                    price: req.body.price
                });
        
                await newProduct.save(); // Save the product to the database
                console.log('Product added:', newProduct);
                res.redirect('/admin'); // Redirect after successful addition
            } catch (error) {
                console.error('Error adding product:', error);
                res.status(500).send('Internal Server Error');
            }
});

module.exports = router;
