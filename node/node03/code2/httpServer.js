/*
 Node.js 标准库提供了 http 模块,其中 装了一个高 的 HTTP 服务器和一个简易的 HTTP   端。http.Server 是一个基于事件的 HTTP 服务器,它的核心由 Node.js 下层 C++ 部分实现,而接口由 JavaScript  装,兼 了高性能与简易性。http.request 则是一个 HTTP   端工具,用于  HTTP 服务器发 请求,例如实现 Pingback1或者内容 取
*
* */
/*
* 这段代码中,http.createServer 创建了一个 http.Server 的实例,将一个函数 作为 HTTP 请求处理函数。这个函数接受两个参数,分别是请求对象( req )和响应对象 ( res )。在函数体内,res 显式地写回了响应代码 200 (表示请求成功),指定响应头为 'Content-Type': 'text/html', 后写入响应体 '<h1>Node.js</h1>',通过 res.end
 结束并发送。最后该实例还调用了 listen 函数,启动服务器并监听 3000 端口。
 */
/*
var http = require('http');
http.createServer(function (request, respose) {
    respose.writeHead(200, {
        "Content-Type" : "text/html;charset=utf-8"
    });
    respose.write("<h1>Node.js</h1>");
    respose.write("<h2>你好!!!</h2>");
    respose.end("end!!!!");
    
}).listen(3000, function (err) {
    if (!err) {
        console.log("HTTP is listening at port 3000!!!");
    }
});
*/

/*
* http.Server是一个基于事件的HTTP服务器, 所有的请求都被封装为独立的事件, 开发者只需要对它的事件编写响应函数即可实现 HTTP 服务器的所有功能。它继承自 EventEmitter,提供了以下几个事件。
*
*   request: 当客户端请求到来时,该事件被触发,提供两个参数 req 和res,分别是 http.ServerRequest和http.ServerResponse 的实例,表示请求和响应  。
 connection: 当TCP 连接建立时,该事件被触发,提供一个参数 socket,为 net.Socket 的实例。connection 事件的粒度要大于 request,因为客户端端在 Keep-Alive 模式下可能会在同一个连接内发送多次请求。
 2 close : 服务器关闭时,该事件被触发。注意不是在用户链接接断开时。
 除此之外还有 checkContinue、upgrade、clientError 事件,通常我们不需要关 心,只有在实现复杂的 HTTP 服务器的时  会用到。
 在这些事件中,最常用的就是 request 了,因此 http 提供了一个  : http.createServer([requestListener]),功能是创建一个 HTTP 服务器并将 requestListener 作为 request 事件的 听函数,这也是我们前面例 中使用的方法。 事实上它显式的实现方法是:
*
* */
var http = require('http');
var server = new http.Server;
server.on('request', function (req, res) {
    res.writeHead(200, {
        "Content-Type" : "text/plain"
    });
    res.end("Hello, world!!!");
});
server.listen(3000);
console.log("HTTPServer is listening at port 3000!!!");