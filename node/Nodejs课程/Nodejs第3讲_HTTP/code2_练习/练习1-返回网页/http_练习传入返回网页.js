/**
 * Created by qingyun on 16/10/26.
 */
var http = require('http');
var url = require('url');
var complieHtml = require('./moudle');

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    var query = url.parse(req.url,true).query;
    console.log(query);
    if (query.path){
        var readHtml = new complieHtml();
        var data = readHtml.read(query.path);
        res.end(data);
    }else {
        res.end("没有path参数!");
    }

}).listen("3000",function () {
    console.log("服务开启成功!端口3000")
});