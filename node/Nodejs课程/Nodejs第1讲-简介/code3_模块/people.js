/**
 * Created by qingyun on 16/10/23.
 */
function People(name,age) {
    this.name = name;
    this.age = age;
}
//给其原型添加方法
People.prototype.say = function () {
    console.log("我是大帅哥!");
};
/***
 * Node.js 提供了exports和require两个对象,其中exports是模块公开的接口,require 用于从外部获取一个模块的接口,即所获取模块的exports对象
 * exports这是一个对象
 * exports就是定义模块的接口
 * 在这个上面设置属性(require就可以拿到这些属性)
 */
exports.People = People;
