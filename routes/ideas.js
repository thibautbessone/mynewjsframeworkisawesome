let express = require('express');
let router = express.Router();
let Generator = require('senso');

/* GET home page. */
router.get('/*', function(req, res, next) {
    console.log(req.params[0]);
    let params = req.params[0].split('/');
    console.log(params);

    let nameGenerator = new Generator(params, 5);
    nameGenerator.generateNames().then(function (names) {
        let jsonNames = JSON.parse(names.toString());
        res.render('names', {names: jsonNames});
    })

});

module.exports = router;
