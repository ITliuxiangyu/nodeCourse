const http = require('http');
const fs = require('fs');

/**
 这个文件,就是手写apache。
 写出来一个静态的服务器。


 形如下面的字符串:
 name=zs&pwd=zs
 就叫查询字符串。


 通过原生的方式理解express
 路由:根据请求的路径、方法进行不同的处理。
 中间件:在createServer的回调里面对request,response 进行拦截处理。就叫中间件。
 * **/

//设置静态服务器的,网站目录。
var baseUrl = './www/';


const server = http.createServer(function (req, res) {
    var filename = req.url;

    //服务网站根目录,如果是/,把index.html返回给客户端。
    if (filename == '/') {
        fs.readFile(baseUrl + 'index.html', function (err, data) {
            if (err)
                throw err;
            
            console.log(data.toString());
            res.end(data.toString())
        })
    }
        //处理/users路径的所有请求方法。
      else if(/users/.test(filename)){
        //说明请求的事登录接口
        if(/\/users\/login/.test(filename)){
            req.on('data',function(data){
                console.log('请求体内容是'+data);
            });
        }
    }
        //服务静态资源文件
    else {
        var path = baseUrl + '.' + filename;
        //
        serviceFile(path, function (data) {
            res.end(data);
        })
    }


});
/***
 * 读取path路径的文件,把它传给fn。
 * @param path
 * @param fn
 */
function serviceFile(path, fn) {

    fs.access(path, fs.R_OK, function (err) {
        if (err) {
            fn('文件不存在');
        } else {
            //console.log('读取文件:'+path)
            fs.readFile(path, function (err, data) {
                if (err)
                    throw err;
                console.log('读取文件:' + data)
                fn(data)
            })
        }
    });

}


var port = 8000;
server.listen(port, function () {
    console.log('监听在' + port)
});