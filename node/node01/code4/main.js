// var exp = require('./person');
// var per = new exp.Person("小明", 18, "男");
// per.info();

var Person = require('./person').Person;
var per = new Person("小明", 18, "女");
per.info();

var bird = require('./bird');
bird.type = "黄鹂鸟";
bird.age = 3;
bird.color = "red";
bird.fly();

// 同一个模块只能被加载一次, bird2和bird是同一个对象
var bird2 = require('./bird');
console.log(bird2.type);
bird2.type = "老鹰";
console.log(bird.type);

console.log(bird === bird2);



