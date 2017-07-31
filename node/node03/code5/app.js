var http = require('http');
var url = require('url');
var qs = require('querystring');
http.createServer(function (req, res) {
    // console.log(url.parse(req.url));
    res.setHeader("Access-Control-Allow-Origin", "*");
    // 所有请求头的内容
    // console.log(req.headers);
    // 客户端的请求方式
    console.log(req.method);
    var postData = "";
    // 编码格式
    req.setEncoding('utf-8');
    // 该方法会走多次
    req.addListener('data', function (chunkData) {
        // console.info("~~~~~~");
        // console.log(chunkData);
        // console.info("~~~~~~~");
        postData += chunkData;
    });

    req.addListener('end', function () {
        // console.log("数据接收完毕");
        // console.log(postData);
        // 可以把postData中的&去掉, 并转化成对象
        // var obj = qs.parse(postData);
        // console.log(obj);
        res.end(postData);
    });

}).listen(3000, function (err) {
    if (!err) {
        console.log("服务器已经开启, 端口号3000!!!");
    }
});