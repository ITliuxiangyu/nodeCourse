function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
Person.prototype.info = function () {
    console.log(this.name, this.age, this.gender);
};

exports.Person = Person;
