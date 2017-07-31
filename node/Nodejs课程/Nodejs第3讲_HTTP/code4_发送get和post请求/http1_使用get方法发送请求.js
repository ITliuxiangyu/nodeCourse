/**
 * Created by qingyun on 16/10/24.
 */
var http = require('http');
var url = require('url');
http.createServer(function(req, res) {
    //解决中文乱码
    res.writeHead(200,{'Content-Type': 'text/plain;charset=utf-8'});
    var wyUrl = "http://c.m.163.com/nc/article/headline/T1348647853363/0-140.html";
    http.get(wyUrl,function (response) {
        response.setEncoding('utf8');
        var resultData = '';
        response.on('data',function (result) {
            // console.log(result);
            resultData += result;
        });
        response.on('end',function () {
            res.end(JSON.stringify(resultData));
        })
    }).on('error',function (e) {
        console.log(e);
    })

}).listen(3000);
console.log("HTTP server is listening at port 3000.");