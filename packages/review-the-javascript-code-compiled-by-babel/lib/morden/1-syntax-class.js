"use strict";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log('My name is ' + this.name + '.');
    console.log("I'm " + this.age + ' years old.');
  }

}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  sayHello() {
    super.sayHello();
    console.log("I'm a " + this.getGrade() + ' grade student.');
  }

  getGrade() {
    return Student.GradeMap[this.grade];
  }

}

Student.GradeMap = {
  1: '1st',
  2: '2nd',
  3: '3rd',
  4: '4th',
  5: '5th',
  6: '6th'
};
const Leon = new Person('Leon', 1);
Leon.sayHello();
const Tom = new Student('Tom', 12, 6);
Tom.sayHello();