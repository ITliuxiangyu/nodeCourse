//引入系统模块
var fs = require('fs');

/*
es6:
箭头函数: (参数列表)=>{ 函数体}

 */
fs.writeFile('./out.txt', 'Hello Node.js,我来自中国', (err) => {
    if (err)
    throw err;
    console.log('It\'s saved!');
});