//引入系统模块
var fs = require('fs');

fs.readFile('./a.txt',function(err,data){
    if(!err){
        console.log(data.toString());
    }
})
