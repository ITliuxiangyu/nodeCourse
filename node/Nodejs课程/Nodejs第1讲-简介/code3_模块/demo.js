/**
 * Created by qingyun on 16/10/23.
 */


//require是单次加载 也就是说无论调用多少次 require,获得的模块都是同一个
var People = require('./people');
console.log(People);

//我们这样使用的话显得非常的多余 因为要 People.People("zaq",'25')
var people = new People.People("zaq",'25');
console.log(people);
people.say();//构造函数创建的对象可以使用其私有方法


