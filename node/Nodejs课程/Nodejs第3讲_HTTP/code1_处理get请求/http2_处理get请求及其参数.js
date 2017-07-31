/**
 * Created by qingyun on 16/10/24.
 */
var http = require('http');
var url = require('url');
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-type':'text/plain'});
    //url.parse(req.url,true)不传true不会转换成对象
    var query = url.parse(req.url,true).query;
    console.log(query);
    res.end(JSON.stringify(query));
}).listen("3000",function () {
    console.log("服务开启成功!端口3000")
});