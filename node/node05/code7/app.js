var express = require('express');
var app = express();

// 加载模块
var bird = require('./bird');
var dog = require("./dog");

// 将路由挂载至应用
app.use('/bird', bird);
app.use('/dog', dog);





app.listen(3000, function (err) {
    if (!err) {
        console.log("服务器已经开启, 端口号3000!!!");
    }
});