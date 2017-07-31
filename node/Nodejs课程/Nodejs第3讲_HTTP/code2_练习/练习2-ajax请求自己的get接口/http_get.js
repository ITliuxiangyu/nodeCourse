/**
 * Created by qingyun on 16/10/24.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req,res) {
    var myUrl = url.parse(req.url,true);
    var htmlData = '';
    if (myUrl.href.indexOf('?') < 0 && myUrl.href != '/' && myUrl.href != '/favicon.ico'){
        // && myUrl.href.split('.').indexOf('html') > 0 || myUrl.href.split('.').indexOf('js') > 0
        if (myUrl.href.split('.').length){
            htmlData = fs.readFileSync(myUrl.href.split('/')[1],'utf8');
            res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
        }
    }
    if (htmlData){
        res.end(htmlData);
    }else {

        res.end(JSON.stringify(myUrl.query));
    }
}).listen("3000",function () {
    console.log("服务开启成功!端口3000")
});