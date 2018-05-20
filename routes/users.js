var express = require('express');
var router = express.Router();
var myCtrl = require('../controller/testController');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET users listing. */
router.get('/test', myCtrl.first);


module.exports = router;
