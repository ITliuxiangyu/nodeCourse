var name;
exports.setName = function (str) {
    name = str;
};
exports.sayHello = function () {
    if (name) {
        console.log("Hello, " + name);
    } else {
        console.log("hello, world!");
    }
};