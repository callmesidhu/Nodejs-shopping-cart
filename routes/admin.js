var express = require('express');
var router = express.Router();

/* GET home page. */
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

router.post('/submit', (req, res) => {
  
  console.log(req.body);
  res.send('Form submitted! Check the console for the values.');
});

module.exports = router;
