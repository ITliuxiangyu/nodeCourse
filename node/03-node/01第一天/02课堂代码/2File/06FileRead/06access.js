//引入系统模块
var fs = require('fs');

//测试用户对指定文件的权限。
fs.access('e.txt', fs.R_OK | fs.W_OK|fs.X_OK, (err) => {
    console.log(err ? 'no access!' : 'can read/write');
});