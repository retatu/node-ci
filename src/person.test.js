const Person = require('./person')

describe('App', () => {
  test('Providing name in constructor should have name', () => {
    const validName = "Valid FirstName";
    const person = new Person(validName, null, null);
    expect(person.firstName).toBe(validName);
  })
  test('Providing age in constructor should have name', () => {
    const validLastName = "Valid LastName";
    const person = new Person(null, validLastName, null);
    expect(person.lastName).toBe(validLastName);
  })
  test('Providing age in constructor should have name', () => {
    const validAge = 12;
    const person = new Person(null, null, validAge);
    expect(person.age).toBe(validAge);
  })
  test('Providing age in constructor should have name', () => {
    const validName = "Valid Name";
    const validLastName = "Valid Name";
    const person = new Person(validName, validLastName, null);
    expect(person.getFullName()).toBe(validName+" "+validLastName);
  })
})