/**
 * Created by qingyun on 16/10/26.
 */
var compileHtml = require('./moudle');
var cHtml = new compileHtml();
var data = cHtml.read('index.html');
console.log(data);