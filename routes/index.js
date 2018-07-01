var express = require('express');
var router = express.Router();
var loginController = require('../controller/loginController');
var frontController = require('../controller/frontend/frontController');
var categoryModel = require('../model/frontend/categoryModel');
/* GET home page. */
router.get('/', categoryModel.categories, frontController.index);
router.get('/login', loginController.index);

module.exports = router;
