// 原生静态文件管理
var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer(function (req, res) {
    var pathname = url.parse(req.url, true).pathname;

    var data = "";

    if (pathname != "/") {
        var str = pathname.replace(/^\//, "");
        console.log(str);
        fs.exists(str, function (flag) {
            if (flag) {
                data = fs.readFileSync(str);
                res.end(data);
            } else {
                res.end("hello, world!!!");
            }
        });

    } else {
        res.end("hello, world!!!");
    }
}).listen(3000);