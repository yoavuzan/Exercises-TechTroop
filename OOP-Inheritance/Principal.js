const Person = require("./Person");

class Principal extends Person {
  constructor(name, year) {
    super(name, year);
    this.teachers = [];
    this.students = [];
  }

  hireTeacher(teacher) {
    this.teachers.push(teacher);
    console.log(`${this.name} just hired ${teacher.name}`);
  }

  recruitStudent(student) {
    this.students.push(student);
  }

  expelStudent(student) {
    let index = this.students.find((stu) => stu.name === student.name);
    this.students.splice(index, 1);
  }
  transferStudent(student, principal) {
    this.expelStudent(student);
    principal.recruitStudent(student);
  }
}

module.exports = Principal;
