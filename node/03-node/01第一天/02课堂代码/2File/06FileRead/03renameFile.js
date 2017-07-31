//引入系统模块
var fs = require('fs');

fs.rename('./out.txt', '../e.txt', (err)=>{
    if (err)
    throw err;
    console.log('重命名好了!');
})