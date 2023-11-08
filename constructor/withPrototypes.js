/**
 * Constructors with prototypes
 **/

function Person(name, surname, age, profession) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.profession = profession;
}

Person.prototype.toString = function() {
    return `${this.name} ${this.surname} is ${this.profession} and he/she/they ${this.age} years old`;
}

const person1 = new Person('Anna', 'Born', 35, 'writer');
const person2 = new Person('Jason', 'Clark', 26, 'singer');

console.log(person1.toString());
console.log(person2.toString());
