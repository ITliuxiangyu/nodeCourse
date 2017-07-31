/**
 * Created by qingyun on 16/10/30.
 */
//当我们的应用非常庞大的时候  我们要更加方便的管理路由那么 我们需要实例化路由
//express.Router 类创建模块化、可挂载的路由句柄。Router 实例是一个完整的中间件和路由系统，因此常称其为一个 “mini-app”

var express = require('express');
var router = express.Router();
var app = express();

app.get('/',function (req,res) {
    res.send('hello world 这是主页!');
});
app.get('/test',function (req,res) {
    res.send('hello 这是test页面!');
});

module.exports = app;