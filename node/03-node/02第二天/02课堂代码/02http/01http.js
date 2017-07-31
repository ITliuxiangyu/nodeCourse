const http = require('http');
/**
 req:请求流
 res:响应流
 写一个静态资源服务器。

 function(req,res){
    filename = req.url //拿到请求的资源路径
    文件读出filename,
    读出的内容通过res.end()//响应给客户端。
 }
 
 * */
const server = http.createServer((req, res) => {
        /*req.on('data',function(err,data){
            console.log(data);
        })*/

        console.log(req.url);
        console.log("接收到客户端请求");
        res.end('你好,服务器接收到你的请求了');
});
server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
var port = 8000;
server.listen(port,function(){
    console.log('监听在'+port )
});