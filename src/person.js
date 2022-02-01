module.exports = class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completeName = this.firstName+"  "+this.lastName;
  }

  getFullName(){
    return this.firstName+" "+this.lastName;
  }

  getAge() {
    return this.age;
  }

}