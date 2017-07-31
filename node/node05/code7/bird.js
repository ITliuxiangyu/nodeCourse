// 可使用 express.Router 类创建模块化、可挂载的路由句柄。Router 实例是一个完整的中间件和路由系统，因此常称其为一个 “mini-app”。
var express = require('express');
// 创建路由
var router = express.Router();

router.use(function (req, res, next) {
    console.log("走起");
    next();
});
router.get("/", function (req, res) {
    res.send("这是主页!!!");
});

router.get("/leg", function (req, res) {
    res.send("鸟腿页面!!!");
});
module.exports = router;