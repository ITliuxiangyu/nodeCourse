/**
 * Created by qingyun on 16/10/24.
 */
/*
* Node.js 标准库提供了http 模块,其中装了一个高效的HTTP服务器和一个简易的HTTP服务器端。http.Server 是一个基于事件的 HTTP 服务器,它的核心由 Node.js 下层 C++ 部分实现,而接口由 JavaScript封装,兼 了高性能与简易性。http.request 则是一个 HTTP客户端工具,用于向HTTP服务器发送请求
* */

// var http = require('http');
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<h1>Node.js</h1>');
//     res.end('<p>Hello World</p>');
// }).listen(3000);
// console.log("HTTP server is listening at port 3000.");

//http继承与EventEmitter所以其有几个事件

/*
*   request:   端请求到来时,该事件被触发,提供两个参数 req 和res,分别是 http.ServerRequest和http.ServerResponse 的实例,表示请求和 应  。
 connection:  TCP  接建 时,该事件被触发,提供一个参数 socket,为 net.Socket 的实例。connection 事件的优先级要大于 request,因为用户端在 Keep-Alive 模式下可能会在同一个连接内发送多次请求。 2
 close : 服务器关闭时,该事件被触发。注意不是在用户接接断开时。
 除此之外还有 checkContinue、upgrade、clientError 事件,通常我们不需要关心,只有在实现复杂的 HTTP 服务器的时  会用到。
 在这些事件中,最常用的就是request了,因此http提供了一个  : http.createServer([requestListener]),功能是创建一个 HTTP 服务器并将 requestListener 作为 request 事件的 听函数,这也是我们前面例 中使用的方法
* */

var http = require('http');
var server = new http.Server();
server.on('request',function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>Hello World</p>');
}).listen(3000);
console.log("HTTP server is listening at port 3000.");