var express = require('express');
var app = express();

// 使用多个回调函数处理路由
app.get("/", function (req, res, next) {
    console.log("下个函数给你返回内容!!!!");
    next();
}, function (req, res, next) {
    console.log("我擦, 我也不想给你数据, 下个函数!!!");
    next();
    
}, function (req, res) {
    res.send("楼上两个2b!!!");
});

// var cb0 = function (req, res, next) {
//     console.log('CB0');
//     next();
// };
//
// var cb1 = function (req, res, next) {
//     console.log('CB1');
//     next();
// };
//
// var cb2 = function (req, res) {
//     res.send('Hello from C!');
// };
//
// // 数组形式处理路由
// app.get('/example/c', [cb0, cb1, cb2]);



// 混合使用函数和函数数组处理路由
var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
};

var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
};

app.get('/example/d', [cb0, cb1], function (req, res, next) {
    console.log('response will be sent by the next function ...');
    next();
}, function (req, res) {
    res.send('Hello from D!');
});




app.route("/login")
    .get(function (req, res) {
        res.send("login页面的get请求");
    })
    .post(function (req, res) {
        res.send("login页面的post请求");
    });

app.route("/register")
    .get(function (req, res) {
        res.send("register页面的get请求");
    })
    .post(function (req, res) {
        res.send("register页面的post请求");
    });




app.listen(3000, function (err) {
    if (!err) {
        console.log("服务器已经开启, 端口号3000");
    }
});