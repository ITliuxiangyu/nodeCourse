/**
 * Created by qingyun on 16/10/23.
 */
var http = require('http');
var server = http.createServer(function (request,response) {
    response.end('hello world');
});
server.listen(3000,function (err) {
    if(!err){
        console.log("服务器启动成功,端口为3000");
    }
});