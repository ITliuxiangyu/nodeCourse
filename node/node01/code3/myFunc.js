// 模块(Module)和包(Package)是 Node.js 最重要的支柱。
// 模块是 Node.js 应用程序的基本组成部分,文件和模块是一一对应的。
// Node.js 提供了 exports 和 require 两个对 象,其中 exports 是模块公开的接口,require 用于从外部获取一个模块的接口,即所获 取模块的 exports 对象。
var hello = require('./hello');
hello.sayHello();
hello.setName("小强");
hello.sayHello();