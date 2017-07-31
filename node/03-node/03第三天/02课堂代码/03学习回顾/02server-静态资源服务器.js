//引入http模块
var http = require('http');
var fs = require('fs');
/**
 1.获取客户端(浏览器)请求资源的路径
    request.url --客户端请求的路径
    如果 request.url===/ :意味着是请求根目录的index.html
 2.读取对应路径的文件,并返回给客户端。(判断一下是否存在)

 * **/
var server = http.createServer(function(request,response){
    var path = request.url;
    var baseUrl = './www/';
    console.log(path);
    //请求根目录
    if(path == '/'){
        //读取www里面的index.html;
        fs.readFile(baseUrl+'index.html',function(err,data){
            response.end(data);
        })
    }else {
        console.log('读取静态资源文件路径是:'+baseUrl+path);
        fs.readFile(baseUrl+path,function(err,data){
            if(err){
                response.setHeader('content-type','text/html;charset=utf-8');
                response.end('文件找不到');
                //throw err;
            }
            response.end(data);
        })
    }
})

var port = 8080;
server.listen(port,function(err){
    if(!err){
        console.log("静态资源服务器开始监听"+port)
    }
})

