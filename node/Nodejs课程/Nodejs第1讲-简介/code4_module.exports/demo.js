/**
 * Created by qingyun on 16/10/23.
 */


//require是单次加载 也就是说无论调用多少次 require,获得的模块都是同一个
var People = require('./people');
console.log(People);


// var p = new People('zaq','25');
// console.log(p);