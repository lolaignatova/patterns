/**
 * Object creation
 **/

const newObject = {};
/* or */
const newObject1 = new Object();


/**
 * Basic constructors
 **/

function Person(name, surname, age, profession) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.profession = profession;

    this.toString = function() {
        return `${this.name} ${this.surname} is ${this.profession} and he/she/they ${this.age} years old`;
    }
}

const personInstance1 = new Person('Anna', 'Born', 35, 'writer');
const personInstance2 = new Person('Jason', 'Clark', 26, 'singer');

console.log(personInstance1.toString());
console.log(personInstance2.toString());

/**
 * Constructors with prototypes
 **/

function Person1(name, surname, age, profession) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.profession = profession;
}

Person1.prototype.toString = function() {
    return `${this.name} ${this.surname} is ${this.profession} and he/she/they ${this.age} years old`;
}

const person1Instance1 = new Person1('Anna', 'Born', 35, 'writer');
const person1Instance2 = new Person1('Jason', 'Clark', 26, 'singer');

console.log(person1Instance1.toString());
console.log(person1Instance2.toString());
