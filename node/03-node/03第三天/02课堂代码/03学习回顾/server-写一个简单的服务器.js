//引入http模块
var http = require('http');

/**
 静态资源服务器:根据客户端url(统一资源定位符) 找到对应的服务器。服务器根据url找到对应的服务器资源,
 这个资源可能是(html,text,jpg,mp4)并且读取返回给客户端。(中间的过程都是二进制的流。)
 中间分请求流和响应流

 respone,request:是node当有客户端请求的时候,建立的对象,当做参数传递给这个回调函数的。
 *
 * **/
var server = http.createServer(function(request,response){
    response.write('hello')
    //调用end把流关闭,浏览器才能知道流已经结束,然后显示相应内容。
    response.end();
    console.log(request)
})

var port = 8000;
server.listen(port,function(err){
    if(!err){
        console.log("开始监听"+port)
    }
})

