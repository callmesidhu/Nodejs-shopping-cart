var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[{
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
    name:"realme 12 pro",
    price: 29999,
    discription: "budget king",
    image:"images/product-8.jpg"
  }]
  res.render('products', { products });
});

module.exports = router;
