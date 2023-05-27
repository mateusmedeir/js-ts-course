/* const firstName = 'Mateus';
const lastName = 'Lopes';

const sayName = () => firstName + ' ' + lastName;

exports.firstName = firstName;
exports.lastName = lastName;
exports.sayName = sayName;
this.anything = 'Test';

console.log(exports); */

class Person {
    constructor (name) {
        this.name = name;
    }
}

exports.Person = Person;

const firstName = 'Mateus';
const lastName = 'Lopes';

const sayName = () => firstName + ' ' + lastName;

module.exports = { 
	firstName, lastName, sayName 
};

console.log(exports);