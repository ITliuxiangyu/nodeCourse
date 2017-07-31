var events = require('events');
var emitter = new events.EventEmitter();

// 执行一次以后移除监听

// emitter.once('one', function (arg1, arg2) {
//     console.log("张增光只兴奋一次", arg1, arg2);
// });
// setInterval(function () {
//     emitter.emit("one", "参数1", "参数2");
// }, 5000);


// 原理

// function interesting(arg1, arg2) {
//     console.log("张增光只兴奋一次!!!");
//     console.log(arg1, arg2);
//     // 移除监听, 第一个参数eventType, 第二个参数回调
//     emitter.removeListener('do', interesting);
// }
//
// emitter.on('do', interesting);
// setInterval(function () {
//     emitter.emit("do", "haha", "hehe");
// }, 3000);




// 观察者(回调函数)先在emitter注册(添加事件监听器)
// emitter发射消息
// 观察者收到emitter发送的事件消息, 执行

emitter.on("listen", function () {
   console.log("first_listener");
});
//
emitter.on('listen', function () {
   console.log("second_listener");
});

// 数组中存放的是函数对象, 也是监听器中的回调函数
// console.log(emitter.listeners('listen'));
// console.log(emitter.listenerCount('listen'));
// emitter.listeners('listen')[1]();

// 移除所有事件的监听
// emitter.removeAllListeners();
// 移除某个事件的所有监听
emitter.removeAllListeners('listen');

emitter.emit('listen');

// EventEmitter 定 了一个特 的事件 error,它包 了 错误 的语 ,我们在遇到 异常的时 通常会发射 error 事件。  error 被发射时,EventEmitter 规定如果没有  应的 听器,Node.js 会 它 作异常, 出程序并打 调用 。我们一 要为会发射 error 事件的对象设置 听器,避免遇到错误后 个程序  emitter.emit('error');



