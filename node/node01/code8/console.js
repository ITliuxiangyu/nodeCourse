console.log("这是一段日志");
console.info("这是一段info日志");

// console.time  console.timeEnd, 做性能诊断, 计算两个方法之间的js代码执行的时间
console.time("ceshi");
for (var i = 0; i < 300000000; i++) {

}
console.timeEnd("ceshi");

// 断言
// 第一个参数是布尔值, 如果为true, 继续执行下面的代码, 否则, 会导致AssertionError被抛出, 代码执行被打断, 错误信息为第二个参数
console.assert(15 > 3, "第12行有错误!!!");
console.log("代码继续执行");

/*
* error
* */
console.error("I am a error");

/*
*  warn
* */
console.warn("I am a warn");

/*
*  trace: 追踪, 打印函数的调用堆栈
* */
function level1() {
    console.log("调用level2");
    level2();
}

function level2() {
    console.log("调用level3");
    level3();
}

function level3() {
    console.log("结束");
    console.trace();
}
level1();
console.log(__dirname);