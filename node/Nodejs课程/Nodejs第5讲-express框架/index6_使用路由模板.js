/**
 * Created by qingyun on 16/10/30.
 */
var express = require('express');
var app = express();
var testRouter = require('./index5_创建router模板');
app.use('/',testRouter);
app.listen(3000,function (err) {
    if (!err){
        console.log("服务创建成功,端口为3000!");
    }
});