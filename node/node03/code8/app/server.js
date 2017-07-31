var http = require('http');
var qs = require('querystring');
var url = require('url');
var fs = require('fs');


http.createServer(function (req, res) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.method == "POST") {
        console.log(777);
        var result = "";
        var pathname = url.parse(req.url).pathname;
        req.addListener('data', function (chunk) {
            result += chunk;
            console.log(888);
        });

        req.on('end', function () {
            var user = qs.parse(result);
            console.log(user);
            // 判断用户名是否存在
            if (user.username) {
                fs.readFile('db.txt', 'utf-8', function (err, data) {
                    if (!err) {
                        if (!data) {
                            console.log(999);
                            if (pathname == "/login") {
                                res.end("该用户不存在!!!");
                                return;
                            }
                            if (pathname == "/register") {
                                var arr = [];
                                var obj = {};
                                obj.username = user.username;
                                obj.password = user.password;
                                arr.push(obj);
                                fs.writeFileSync('db.txt', JSON.stringify(arr), 'utf-8');
                                res.end("注册成功!!!");
                                return;
                            }


                        } else {

                            var arr = JSON.parse(data);
                            for (var i = 0; i < arr.length; i++) {
                                var obj = arr[i];
                                if (obj.username == user.username) {
                                    if (pathname == "/login") {
                                        if (obj.password == user.password) {
                                            res.end("登录成功!!!");
                                            return;
                                        } else {
                                            res.end("密码错误!!!");
                                            return;
                                        }
                                    }
                                    if (pathname == "/register") {
                                        res.end("用户名已经存在!");
                                        return;
                                    }
                                }
                            }

                            if (pathname == "/login") {
                                res.end("用户名不存在!!!");
                                return;
                            }
                            if (pathname == "/register") {
                                var obj = {};
                                obj.username = user.username;
                                obj.password = user.password;
                                arr.push(obj);
                                fs.writeFileSync('db.txt', JSON.stringify(arr), 'utf-8');
                                res.end("注册成功!!!");
                                return;
                            }


                        }
                    }
                })
            }

        });


    } else {
        res.end("GET方法还没写, 大家玩去吧!!!");
    }


}).listen(3000, function (err) {
    if (!err) {
        console.log("服务器开启成功, 端口号3000!!!");
    }
});
