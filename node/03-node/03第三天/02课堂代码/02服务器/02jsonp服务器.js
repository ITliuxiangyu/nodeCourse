const http = require('http');

const fs = require('fs');
const url = require('url');
const queryString = require('querystring');

/**

 形如下面的字符串:
 name=zs&pwd=zs
 就叫查询字符串。

 *
 * **/

var baseUrl = './www/';
const server = http.createServer((req, res) => {
        var filename = req.url;


console.log(filename)
if(filename == '/'){
    fs.readFile(baseUrl+'index.html',function(err,data){
        if(err)
            throw err;
        console.log(data.toString());
        res.end(data.toString())
    })
}
    //里面只要包含/list,都走这里处理
else if(/\/list/.test(filename)){
    //url.parse:解析路径成对象。(很想location对象)
    var query = url.parse(filename).query;
    //查询字符串,把一组查询字符串解析成对象。
    var cb = queryString.parse(query).callback;
    var proxyUrl = queryString.parse(query).url;
    console.log('代理:'+proxyUrl);
    //代理请求数据,请求成功,相应给客户端
    proxy(proxyUrl,function (data) {
        res.end(cb+'('+ data +')')
    })
    //res.end( cb+'({"name":"zs"})');
}
else{
    var path = baseUrl+'.'+filename;
    serviceFile(path,function(data){
        res.end(data);
    })
}


});

/**
 * 代理方法
 * @param url
 * @param fn
 */
function proxy(url,fn){
    http.get(url,function(res){
        var content = "";
        res.on('data',function(data){
            content+=data;
        })
        res.on('end',function(){
            fn(content);
        })
    })
}

/***
 * 服务静态资源文件
 * @param path
 * @param fn
 */
function serviceFile(path,fn){

    fs.access(path, fs.R_OK, function(err) {
        if(err){
            fn('文件不存在');
        }else{
            //console.log('读取文件:'+path)
            fs.readFile(path, function (err, data) {
                if (err)
                    throw err;
                console.log('读取文件:'+data)
                fn(data.toString())
            })
        }
    });

}

server.on('clientError', function(err, socket) {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
var port = 8888;
server.listen(port,function(){
    console.log('监听在'+port )
});
