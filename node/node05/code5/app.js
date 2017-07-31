var express = require('express');
var app = express();

var path = require('path');

// 第一个参数可选, 默认是 "/"
// 相对路径
app.use("/user", express.static('public'));
app.use("/view", express.static("views"));

// 动态绝对路径
// /Users/qingyun/Desktop/1611班课堂代码/node5/code5/public
// app.use('/', express.static(path.join(__dirname, "public")));

// 第一个参数可以是正则表达式
app.use('/ab*cd', express.static(path.join(__dirname, "public")));

app.get("/hell/a", function (req, res) {
    res.send("你好!!!");
});



console.log(__dirname);
app.listen(3000, function (err) {
    if (!err) {
        console.log("服务器开启成功, 端口号3000!!!");
    }
});
