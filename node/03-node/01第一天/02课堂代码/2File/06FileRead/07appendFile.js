//引入系统模块
var fs = require('fs');


fs.appendFile('e.txt', 'data to append', (err) => {
    if (err) throw err;
console.log('The "data to append" was appended to file!');
});