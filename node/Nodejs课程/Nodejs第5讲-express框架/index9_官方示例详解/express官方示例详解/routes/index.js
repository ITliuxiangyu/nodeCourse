var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  var url = 'http://c.m.163.com/nc/article/headline/T1348647853363/0-140.html';
  request(url,function (err,response,body) {
    // console.log(body);
  }).pipe(
      request.get(url,function (err,response,body) {
        console.log(body);
      })
  );

  res.render('index', { title: 'Express' });
});

module.exports = router;
