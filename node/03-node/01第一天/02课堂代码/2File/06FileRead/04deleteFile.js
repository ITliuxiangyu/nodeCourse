//引入系统模块
var fs = require('fs');

fs.unlink('./e.txt', (err) => {
    if (err) throw err;
    console.log('successfully deleted ');
});