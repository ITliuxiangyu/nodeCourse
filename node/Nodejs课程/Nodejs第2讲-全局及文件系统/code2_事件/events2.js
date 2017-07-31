/**
 * Created by qingyun on 16/10/24.
 */
/*
* EventEmitter.on(event, listener) 为指定事件注一个听器,接受一个字
 符 event 和一个回调函数listener。
 EventEmitter.emit(event, [arg1], [arg2], [...]) 发射event事件,传
 递可参数到事件听器的参数表。
 EventEmitter.once(event, listener) 为指定事件注一个听器,
 听器最多只会触发一次,触发后  解除该 听器。
 EventEmitter.removeListener(event, listener)除指定事件的个听
 器,listener是该事件已经注过的听器
 */
var event = require('events');
var emitter = new event.EventEmitter();
emitter.once('doOnce',function (str) {
    console.log(str)
});
setInterval(function () {
   emitter.emit('doOnce','hello');
},500);


function doSome() {
    console.log("doSome");
    //除指定事件的某个监听器,listener是该事件已经注过的听器
    emitter.removeListener('doSome',doSome);
}

emitter.on('doSome',doSome);

setInterval(function () {
    emitter.emit('doSome');
},500);


function sayHello() {
    console.log('hello');
    // emitter.removeAllListeners();//这样是移除所有的事件和所有的监听
    emitter.removeAllListeners('say');//删除某个事件的所有监听
}
emitter.on('say',sayHello);
setInterval(function () {
   emitter.emit('say');
},500);

//查看事件的监听

emitter.on('listen',function () {
    // console.log(emitter.prependOnceListener);
});
emitter.on('listen',function () {
    console.log('ssss');
    console.log(emitter.prependOnceListener);
});
console.log(emitter.listeners('listen'));
console.log(emitter.listenerCount('listen'));

//EventEmitter 定义了一个特殊的事件 error,它包含了错误的语义,我们在遇到异常的时通常会发射 error 事件来结束这个程序
emitter.emit('error');

emitter.emit('listen');