var http = require('http');
var server = http.createServer(function (req, res) {

    // 响应头
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    res.write("<h2 style='text-align: center; color: red; font-size: 30px;'>Hello, world!!!</h2>");
    res.write("<div style='margin: 100px auto 0; width: 120px; text-align: center;'>最近好吗?</div>");
    res.write("你好<br>");
    res.end("结束!!!");

});
server.listen(3000, function (err) {
    if (!err) {
        console.log("服务器已经启动, 端口号3000");
    };
});