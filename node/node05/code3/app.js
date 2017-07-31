var http = require('http');
var url = require('url');
var fs = require('fs');

// 原生路由用法
http.createServer(function (req, res) {
    var staticPath = "views";
    var pathname = url.parse(req.url).pathname;
    if (pathname == "/login" || pathname == "/register") {
        var data = fs.readFileSync(staticPath + pathname + ".html", 'utf-8');
        res.end(data);
    } else {
        res.end("hello, world!!!");
    }


}).listen(3000, function (err) {
    if (!err) {
        console.log("服务器已经启动, 端口号3000");
    }
});