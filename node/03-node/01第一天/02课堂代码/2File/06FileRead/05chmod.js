//引入系统模块
var fs = require('fs');

fs.chmod('./e.txt', 777, (err) => {
    if (err) throw err;
    console.log('successfully chmod ');
})