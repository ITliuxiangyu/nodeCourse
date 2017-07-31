/**
 * Created by qingyun on 16/12/9.
 */

function Student(name) {
    this.name = name;
}

inherits(Student, Man);

//这样写更简洁。
extend(Student.prototype, {
    learn: function () {
        console.log(this.name + '学的很开心。。。哈哈😆');
    },

    dota: function () {
        console.log(this.name + '学的很开心。。。哈哈😆');
    }
});
