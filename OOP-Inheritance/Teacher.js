const Person = require("./Person");

class Teacher extends Person {
  constructor(name, year, salary) {
    super(name, year);
    this.salary = salary;
  }
}

module.exports = Teacher;
