/**
 * Created by qingyun on 16/10/23.
 */
console.log("我是一段日志");
console.info("我是一段info日志");

/***
 * console.time和console.timeEnd 做性能诊断,计算中间JS代码执行时间。
 */
console.time('testPerformance');
var i = 10000000;
while (i > 0){
    i--;
}
console.timeEnd('testPerformance');

/**
 * assert:断言,判断程序执行的流程
 */
//正常情况下返回true
// function assertedFn(){
//     return true;
// }
// var assertedVal = assertedFn();
//在浏览器中当console.assert()方法接受到一个值为假断言（assertion）的时候，会向控制台输出传入的内容，但是并不会中断代码的执行，而在Node.js中一个值为假的断言将会导致一个AssertionError被抛出，使得代码执行被打断
// console.assert(5 > 10,function () {
//     console.log("ssssssss")
// });
console.assert(15 > 10,"出错了!!!!!!!!");
//这时是会阻断下面的代码
console.log("11111");

/***
 * trace:追踪,打印函数的调用堆栈
 */
function level1(){
    console.log('调用 level2');
    level2();
}

function level2(){
    console.log('调用 level3');
    level3();
}

function level3(){
    console.log('结束');
    console.trace();
}

level1();

/**
 * error:
 */
console.error('i am error');

/**
 * warn
 */
console.warn('i am warn');