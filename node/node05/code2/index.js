var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send("Hello, world!!!");
});

app.get('/login', function (req, res) {
    res.send("登录页面!!!");
});

app.get('/register', function (req, res) {
    res.send("注册页面!!!");
});

app.post("/", function (req, res) {
    res.send("post");
});


app.listen(3000, function (err) {
    if (!err) {
        console.log("服务器已经启动, 端口号3000");
    }
});
