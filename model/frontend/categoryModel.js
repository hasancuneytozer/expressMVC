/*Mongo */
var mongoose = require('mongoose');

var categoriesSchema = mongoose.Schema({
    _id: String,
    children: Array,
    name: String,
});

exports.categories = function (req, res, next) {
    var categories = mongoose.model('categories', categoriesSchema);
    categories.find(function (err, col) {
        if (err) return console.error(err);
        req.categories = col;
        next();
    });
};


/*Mongo End */