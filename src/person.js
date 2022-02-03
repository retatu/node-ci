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
  getAgePlus2() {
    return this.age+2;
  }
  getAgePlus3() {
    return this.age+3;
  }
  getAgePlus4() {
    return this.age+4;
  }
  getAgePlus5() {
    return this.age+5;
  }

}