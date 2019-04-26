// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
var app=require('./app');

// Listen to port 3001
app.listen(3001,()=>console.log('Listening the server on Port 3001') )