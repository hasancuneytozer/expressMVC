
exports.index = function (req, res, next) {
    res.render('index', 
        { 
            title: 'Express', 
            categories: req.categories, 
            url: req.originalUrl 
        }
    );
};
