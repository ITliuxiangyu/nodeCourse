/**
 * Created by qingyun on 16/10/23.
 */
/***
 * 异常处理事件
 * 注册异常事件的回调函数
 * 当一个异常冒泡回到事件循环,触发这个事件。如果给异常添加了监视器,默认的操作(打印堆栈跟踪信息并退
 出)就不会发生
 */
process.on('uncaughtException',function (err) {
    console.log(err);
});
setTimeout(function(){
    console.log('1s后关闭!');
},1000);
aa();
//异常事件会导致下面的结束 下面的不能执行
console.log("hello world");