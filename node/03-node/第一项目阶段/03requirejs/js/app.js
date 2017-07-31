/***
 *
 * 模块的定义:
 * 模块是功能的集合,一般需要一个输入,产生一个输出。
 *
 *
 * define([dep1],function(dep1){
 *  return '模块定义对象'
 * })
 *
 * 这中cmd语法可以定义一个模块。
 *
 *
 *
 *
 */
define(['./Student'],function (Student) {
    var student = new Student('赵宁');

    student.learn();
})