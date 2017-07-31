/**
 * Created by qingyun on 16/10/23.
 */
var http = require('http');
var server = http.createServer(function (request,response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<head><meta charset="utf-8"/></head>');
    response.write("<button>哈哈</button>");
    response.end('hello world');
}).listen(3000,function (err) {
    if(!err){
        console.log("服务器启动成功,端口为3000");
    }
});