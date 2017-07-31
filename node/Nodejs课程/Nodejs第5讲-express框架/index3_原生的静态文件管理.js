/**
 * Created by qingyun on 16/10/30.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
//如数据含有不安全字符，则浏览器先将其转换成 16进制的字符再传送，如空格被转成 %20
//例如7%BD%91%E6%98%93%E5%8E%9F%E5%88%
var qs = require('querystring');
http.createServer(function(req, res) {

    // var myUrl = url.parse(req.url,true);
    var myUrl = url.parse(req.url,true);
    var htmlData = '';
    if (myUrl.href == '/favicon.ico'){
        return;
    }
    if (myUrl.href.indexOf('?') < 0 && myUrl.href != '/'){
        htmlData = fs.readFileSync(myUrl.href.split('/')[1],'utf8');
        res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
        res.end(htmlData);
    }else {
        res.end('hello world');
    }

}).listen(3000);
console.log("HTTP server is listening at port 3000.");