var express = require('express');
const productData = require('../data/product-data');
var router = express.Router();


router.get('/', function(req, res, next) {
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
          res.render('admin',{ products })
});

router.post('/submit', async (req, res) => {
  try {
    const formData = new Form({
      product: req.body
    });

    await formData.save();
    res.status(200).send('Form data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving form data');
  }
});

module.exports = router;
