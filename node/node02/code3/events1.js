// events 是 Node.js 最重要的模块,没有 之一 , 因是 Node.js 本身架构就是事件式 的,而它提供了唯一的接口,所以堪称Node.js 事件编程的基石 。events 模块不仅用于用户代码与 Node.js 下层事件循环的交互,还几乎被所有的模块依赖。

// events 模块只提供了一个对象: events.EventEmitter。EventEmitter 的核心就 是事件发射与事件 听器功能的 装。EventEmitter 的每个事件由一个事件 和  个参 数 成,事件 是一个字符 ,通常表达一定的语 。对于每个事件,EventEmitter 支持   个事件 听器。 事件发射时,注 到这个事件的事件 听器被 次调用,事件参数作 为回调函数参数传递。
var events = require('events');
var EventEmitter = events.EventEmitter;
// console.log(events === emitter);
// emitter 对象
var emitter = new EventEmitter();
// console.log(events);
// console.log("----");
// console.log(emitter);
// // 添加事件监听器
var pigMsg = 'pigIsBirthed';
emitter.addListener(pigMsg, function (arg1, arg2) {
   console.log("皮俊辉收到了消息", arg1, arg2);
});
emitter.on(pigMsg, function (arg1, arg2) {
    console.log("张增光收到了消息", arg1, arg2);
});
// // 发射消息
setInterval(function () {
    emitter.emit(pigMsg, "他好开心", "他好兴奋");
}, 5000);









