var express = require('express');
var router = express.Router();
var myCtrl = require('../../controller/testController');
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Cms İndex');
});
/* GET users listing. */
router.get('/test', myCtrl.two, myCtrl.first);


module.exports = router;
