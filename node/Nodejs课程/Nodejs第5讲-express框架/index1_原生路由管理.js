/**
 * Created by qingyun on 16/10/30.
 */
var http = require('http');
var url = require('url');
http.createServer(function (req,res) {
    var theUrl = url.parse(req.url,true);
    if (theUrl.pathname == '/demo1'){
        res.write('进入demo1路由')
    }
    if (theUrl.pathname == '/demo2'){
        res.write("进入demo2路由")
    }
    res.end();

}).listen(3000,function (err) {
    if (!err){
        console.log("服务开启成功!端口为3000");
    }
});