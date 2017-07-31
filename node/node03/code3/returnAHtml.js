var CompileHtml = require('../code1/module');
var http = require('http');
var url = require('url');

// 创建服务器
http.createServer(function (req, res) {


    var query = url.parse(req.url, true).query;
    var pathname = url.parse(req.url).pathname;
    // console.log(pathname);
    // console.log(query);
    if (pathname == "/login") {
        var cHtml = new CompileHtml();
        cHtml.read('login.html', function (data) {
            res.writeHead(200, {
                "Content-Type" : "text/html;charset=utf-8"
            });
            res.end(data);
        });
    } else {
        res.writeHead(404, {
            "Content-Type" : "text/html;charset=utf-8"
        });
        res.end("404 NOT Found!");
    }


}).listen(3000, function (err) {
    if (!err) {
        console.log("服务器启动成功, 端口号3000");
    }
});