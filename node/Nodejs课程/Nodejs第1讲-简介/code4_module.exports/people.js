/**
 * Created by qingyun on 16/10/23.
 */
function People(name,age) {
    this.name = name;
    this.age = age;

}
/*
* exports和module.exports的区别
* exports导出的模块代表模块本身
* module.exports = People输出的是People对象
* */
exports.sex = "男";
// module.exports = People;