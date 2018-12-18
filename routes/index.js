var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'That new JavaScript framework I am developing is so awesome !' });
});

module.exports = router;
