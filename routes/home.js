var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
        let products=[
                {
                        name:'shirt11',
                        description:'best product 1',
                        price:'$50'
                },
                {
                        name:'shirt22',
                        description:'best product 2',
                        price:'$100'
                },
                {
                        name:'shirt33',
                        description:'best product 3',
                        price:'$150'
                },
                {
                        name:'shirt44',
                        description:'best product 4',
                        price:'$200'
                },
        ]
  res.render('home.hbs', { products });
});

module.exports = router;
