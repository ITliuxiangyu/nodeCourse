const http = require('http');

const fs = require('fs');
const queryString = require('querystring');

/**

 形如下面的字符串:
 name=zs&pwd=zs
 就叫查询字符串。

 *
 * **/
const server = http.createServer((req, res) => {
        var filename = req.url;
        //res.statusCode = 302;
        //设置编码方式
        res.setHeader('content-type','text/html;charset=utf-8')
        //设置location
        //res.setHeader('Location','http://baidu.com');

        var date = Date.now()+ 6000;
        res.setHeader('Expires',date)

        console.log(req.headers);
        console.log(req.method);

        req.on('data',function(data){
            console.log('请求的数据:'+data)
            var str = queryString.parse(data.toString());
            console.log(str);
        });
        req.on('end',function(data){

        })

        if(filename == '/'){
            fs.readFile('index.html',function(err,data){
                if(err)
                    throw err;
                console.log(data.toString());
                res.end(data.toString())
            })
        }else{
            var path = '.'+filename;
            serviceFile(path,function(data){
                res.end(data);
            })
        }


});

function serviceFile(path,fn){

    fs.access(path, fs.R_OK, (err) => {
        if(err){
            fn('文件不存在');
        }else{
            //console.log('读取文件:'+path)
            fs.readFile(path, function (err, data) {
            if (err)
                throw err;
            console.log('读取文件:'+data)
            fn(data.toString(),type)
        })
    }
});

}

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
var port = 8000;
server.listen(port,function(){
    console.log('监听在'+port )
});