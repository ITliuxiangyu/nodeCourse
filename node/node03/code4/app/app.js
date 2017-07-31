var http = require('http');
var url = require('url');
var CompileHtml = require('../../code1/module');
var fs = require('fs');

// 创建服务器
http.createServer(function (req, res) {

    var obj = url.parse(req.url);
    var pathname = obj.pathname;
    if (pathname != "/" && pathname != "/favicon.ico") {
        // console.log(pathname);
        // 去掉路径前面的 /
        // var pathStr = pathname.replace(/^\//, "");
        var pathStr = ".." + pathname;
        console.log(pathStr);
        fs.exists(pathStr, function (flag) {
            if (flag) {
                // 如果文件存在
                var cHtml = new CompileHtml();
                cHtml.read(pathStr, function (data) {
                    console.log(data);
                    res.end(data);
                });
            } else {
                res.end("404 NOT Found!!!");
            }
        });

    } else {
        res.end("404 NOT Found!!!");
    }


}).listen(3000, function (err) {
    if (!err) {
        console.log("服务器已开启, 端口号3000!!!");
    }
});