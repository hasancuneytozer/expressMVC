exports.first = function (req, res, next) {
    res.send('respond with a resouasasdrce tes as');
    console.log('one');
}
exports.two = function (req, res, next) {
    //res.send('this two');
    
    if (typeof req.query.bb !== 'undefined' && req.query.bb !== null) {
        console.log('not undefined',req.query.bb);
        res.redirect('/'); 
    }
    else{
        console.log('Is undefined', req.query.bb);
        next();
    }
    
}
/*
  _parsedUrl:
   Url {
     protocol: null,
     slashes: null,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: null,
     search: '?asd=234&bb=222',
     query: 'asd=234&bb=222',
     pathname: '/test',
     path: '/test?asd=234&bb=222',
     href: '/test?asd=234&bb=222',
     _raw: '/test?asd=234&bb=222' },
  params: {},
  query: { asd: '234', bb: '222' },
*/