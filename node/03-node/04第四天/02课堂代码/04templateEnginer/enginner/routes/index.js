var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //渲染一个视图,并且把渲染好的html字符串发送到客户端(浏览器);
  //第一个参数就是视图。
  res.render('index', { title: '青云' });
});

module.exports = router;
