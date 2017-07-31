/**
 * Created by qingyun on 16/12/9.
 */
/**
 *
 * this的确定:
 * 谁调用这个函数,this就是谁。是动态确定的。
 * 
 * call,apply:
 * 改变函数的执行上下文(也就是this值)。
 * call,apply的区别:call的参数是参数列别形式,apply的参数是数组形式。
 *
 * */
function extend(src,dst1){
    var dstes = [].slice.call(arguments,1,2);
    dstes.forEach(function(dst){
        //遍历dst对象,把上面的key,value拷贝到 src上面。
        for(var key in dst){
            src[key] = dst[key];
        }
    })
   
}