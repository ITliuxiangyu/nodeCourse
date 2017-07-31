var a = require('./test');
console.log(a);
for (var key in a) {
    console.log(key, a[key]);
}
var b = new a;
console.log(b);
for (var key in b) {
    console.log(key, b[key]);
}
var c = new a.A();
console.log(c);