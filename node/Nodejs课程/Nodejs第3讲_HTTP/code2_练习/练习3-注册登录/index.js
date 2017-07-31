/**
 * Created by qingyun on 16/10/26.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-type':'text/plain;charset=utf8'});
    var reqUrl = url.parse(req.url,true);
    var query = reqUrl.query;
    if (reqUrl.pathname == "/login"){
        fs.readFile('user.txt','utf8',function (err,data) {
            console.log(JSON.parse(data).userName);
            if (JSON.parse(data).userName == query.userName && JSON.parse(data).passWord == query.passWord){
                res.write("认证成功!");
                res.end();
            }else {
                res.write("账号或者密码错误!");
                res.end();
            }
        })
    }

    if (reqUrl.pathname == "/register"){
        fs.writeFile('user.txt',JSON.stringify(query),'utf8',function (err) {
            if(!err){
                console.log("注册成功,已写入文件!");
                res.write("注册成功!");
                res.end();
            }
        })
    }

}).listen("3000",function () {
    console.log("服务开启成功!端口3000")
});