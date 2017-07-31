// 引入http模块
var http = require('http');
// 查询参数模块
var qs = require('querystring');
// 引入url模块
var url = require('url');

// 创建服务器, 监听3000端口号
http.createServer(function (req, res) {
    console.log(111111);
    // 设置编码格式
    req.setEncoding('utf-8');
    res.setHeader("Access-Control-Allow-Origin", "*");


    var query = url.parse(req.url, true).query;

    if (query.myUrl) {
        console.log(22222);

        // 作为客户端向别的服务器发送请求
        http.get(query.myUrl, function (clientRes) {
            console.log(333333);
            clientRes.setEncoding('utf-8');
            var result = "";
            clientRes.on('data', function (chunk) {
                console.log(4444444);
                result += chunk;

            });
            clientRes.on('end', function () {
                console.log(55555);
                // 把数据发送给前端
                res.writeHead(200, {
                    // "Content-Type": "application/json;charset=utf-8"
                    "Content-Type": "text/plain;charset=utf-8"
                });
                console.log(result);
                res.end(result);

            });
        }).on('error', function (e) {
            console.log(e);
            res.end("未知类型错误!!!");
        });

    } else {
        res.end("参数错误!!!!");
    }


}).listen(3000, function (err) {
    if (!err) {
        console.log("服务器已开启, 端口号3000");
    }
});