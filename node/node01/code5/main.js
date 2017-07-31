// 如果文件夹中没有package.json文件, 会自动require其中的index.js模块

var hello = require('./somepackage');
hello.sayHello();


