const http = require('http');
const fs = require('fs');
/**

 一个简单的服务器:
 服务静态文件:

 express:express();

 * **/


/**
 createServer
    :创建一个服务器。
    它里面一个参数函数。这个函数里面有两个参数,一个请求(request)一个相应(response),,
    每次请求调用一次。每个请求对应一个请求相应。
    req:请求对象
        req对象里面,
            req.url:客户端请求的路径
            req.headers:客户端请求头。
            data,end可以拿到客户端的请求数据。
    res:是响应对象
        res.write --相应用户不结束流。
        res.end   --相应用户,结束流。结束之后不能再响应。

        res.status ---响应码
        res.setHeader --设置头
            content-type:内容类型(mime)。


    mime:文件的内容类型,举例:text/html,text/plain,application/json,iamge/jpeg.


 *
 * */


/**
 创建个服务器。
 * */
const server = http.createServer((req, res) => {
        /*req.on('data',function(err,data){
            console.log(data);
        })*/
        var filename = req.url;
        console.log(filename);
        //如果请求的是根目录。
        if(filename == '/'){
            //读取index.html
            fs.readFile('index.html',function(err,data){
                 if(err)
                     throw err;
                 console.log(data.toString());
                //相应客户端,结束请求。
                res.end(data.toString())
            })
        }
        //如果是其他静态资源文件。
        else{
            var path = '.'+filename;

            //读取指定路径的文件,并相应给客户端。
            serviceFile(path,function(data,type){
                type && res.setHeader('content-type',type);
                res.end(data);
            })
        }
        console.log("接收到客户端请求");
        //
        //res.end('你好,服务器接收到你的请求了');
});

/**
 * 服务静态文件
 * */
function serviceFile(path,fn){

    //查看path路径是否存在
    fs.access(path, fs.R_OK, (err) => {
        if(err){
            fn('文件不存在');
        }else{
            //console.log('读取文件:'+path)
            //读取文件
            fs.readFile(path, function (err, data) {
                if (err)
                    throw err;
                console.log('读取文件:'+data)
                //给文件添加mime类型。
                if( /(gif|jpg)$/.test(path)){
                    var type = 'image/jpeg'
                }
                type?fn(data,type):fn(data.toString(),type)
            })
        }
    });

}


server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
var port = 8000;

//监听某个端口。
server.listen(port,function(){
    console.log('监听在'+port )
});