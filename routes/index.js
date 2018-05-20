var express = require('express');
var router = express.Router();
var loginController = require('../controller/loginController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', loginController.index);

module.exports = router;
