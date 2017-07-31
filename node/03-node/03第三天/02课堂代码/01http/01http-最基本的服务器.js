const http = require('http');
//定义一个常量,和var一样,只不过,不能修改。
const fs = require('fs');
/**
 req:请求流
 res:响应流
 写一个静态资源服务器。

 response,request是响应和请求流。
 调用end方法:直接结束了流。
 write:往流里面写,没有结束流。

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
        var filename = req.url;
        console.log(filename);
        //如果请求的是根目录。
        if(filename == '/'){
            fs.readFile('index.html',function(err,data){
                 if(err)
                     throw err;
                 console.log(data.toString());
                res.end(data.toString())
            })
        }
        console.log("接收到客户端请求");
        //
        //res.end('你好,服务器接收到你的请求了');
});
server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
var port = 8000;
server.listen(port,function(){
    console.log('监听在'+port )
});