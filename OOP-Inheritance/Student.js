const Person = require("./Person");

class Student extends Person{
    constructor(name,year){
        super(name,year);
    }
}

module.exports = Student;
