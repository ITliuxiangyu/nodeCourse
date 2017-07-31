//引入http模块
var http = require('http');
var fs = require('fs');
var queryString = require('querystring');//查询字符串模块,主要处理查询字符串
var url = require('url');//url对应url(统一资源定位符).包含许多方法和对象。
/**
  跨域:url中的:协议,地址,端口三者有一个不一样,就会跨域

 解决跨域:解决跨域有很多。
 其中一种比较常用的是jsonp。
 jsonp利用script(脚本可以跨域)来实现跨域
 
 * **/
var server = http.createServer(function(request,response){
    var path = request.url;
    var baseUrl = './www/';
    //console.log(path);
    //请求根目录
    if(path == '/'){
        //读取www里面的index.html;
        fs.readFile(baseUrl+'index.html',function(err,data){
            response.end(data);
        })
    }
        //jsonp接口
    else if(/jsonp/.test(path)){
        //拿到url里面的查询字符串。
        var query = url.parse(path).query;

        var proxyUrl = queryString.parse(query).url;
        proxyUrl = decodeURIComponent(proxyUrl);
        //处理查询字符串,拿出上面的callback函数名:这个callback函数名是jquery定义的。
        var callback = queryString.parse(query).callback;
        console.log('开始请求代理地址:'+proxyUrl)
        //proxy(url,fn)
        // 当请求完成代理的地址后,拿到数据后,调用 fn(请求到的数据);
        proxy(proxyUrl,function(data){
            response.end(callback+'('+data+')')
        })
    }
    //服务静态资源
    else {
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


/*
 * 代理方法
 * 创建一个客户端取请求url地址。
 * 当请求的数据拿到后,调用fn,并且传入请求道的数据。
 * @param url
 * @param fn
 */
function proxy(url, fn) {
    //创建一个客户端取请求url地址。
    //创建一个客户端去请求指定的url,
    //当请求完成后,node会调用fn,并且把服务器的响应传进去。
    http.get(url, function (res) {
        var content = "";
        res.on('data', function (data) {
            content += data;
        })
        res.on('end', function () {
            fn(content);
        })
    })
}

var port = 8000;
server.listen(port,function(err){
    if(!err){
        console.log("代理服务器开始监听"+port)
    }
})

