var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/', function(req, res, next) {    
  res.render('admin.hbs', {});
});

// Corrected route for adding a product
router.post('/add', function(req, res) {
    console.log(req.body); // This will log the form data
    
    res.redirect('/admin');
});

module.exports = router;
