var bird = {
    type: "鹦鹉",
    color: "yellow",
    age: 2,
    fly: function () {
        console.log(this.type + "会飞");
    }
};
// exports.bird = bird;
module.exports = bird;
