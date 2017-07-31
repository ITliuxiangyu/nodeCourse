var express = require('express');
//引入express router
var router = express.Router();
///book路径都走这个路由处理模块。

// 该路由使用的中间件
//所有请求都会经过这里
router.use(function timeLog(req, res, next) {});
 

module.exports = router;