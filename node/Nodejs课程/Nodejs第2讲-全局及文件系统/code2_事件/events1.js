/**
 * Created by qingyun on 16/10/24.
 */
//events 是 Node.js 最重要的模块,没有 之一 , 因是 Node.js 本身架构就是事件式 的,而它提供了 一的接口,所以   Node.js 事件编程的基 。events 模块不仅用于用, 代码与 Node.js下层事件 环的交互,还几被所有的模块
var event = require('events');
// console.log(event);
var emitter = new event.EventEmitter();
//addListener和on一样
emitter.addListener('doSome',function (msg1,msg2) {
    console.log('listen0',msg1,msg2);
});
emitter.on('doSome',function (msg1,msg2) {
    console.log('listen1',msg1,msg2);
});
emitter.on('doSome',function (msg1,msg2) {
    console.log('listen2',msg1,msg2);
});
emitter.emit('doSome','hello','world');