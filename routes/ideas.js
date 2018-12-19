var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
    console.log(req.params[0]);
    let params = req.params[0].split('/');
    console.log(params);
    res.render('names', { text: params })

});

module.exports = router;
