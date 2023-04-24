// const person = {
//     firstName: 'Mateus',
//     lastName: 'Lopes'
// };

// console.log(person.firstName);
// console.log(person.lastName);

// const key = 'firstName';
// console.log(person[key]);
// console.log(person['lastName']);

// const person1 = new Object();
// person1.firstName = 'Mateus';
// person1.lastName = 'Lopes';
// person1.age = 30;

// delete person1.firstName;
// console.log(person1);

// person1.sayName = function() {
//     return (`${this.firstName} is saying his name`);
// }

// person1.getDateOfBirth = function() {
//     const date = new Date();
//     return date.getFullYear() - this.age;
// }

// console.log(person1.getDateOfBirth());

// for (let key in person1) {
//     console.log(person1[key]);
// }


// Factory functions / Constructor functions / Classes

// function createPerson(firstName, lastName) {
//     return {
//         firstName,
//         lastName,
//         fullName() {
//             return `${this.firstName} ${lastName}`;
//         }
//     };
// }

// const p1 = createPerson('Mateus', 'Lopes');
// console.log(p1.fullName());

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    Object.freeze(this);
}

const p1 = new Person('Mateus', 'Lopes');
p1.firstName = 'Another Name';
const p2 = new Person('Lucas', 'Lopes');
console.log(p1);
console.log(p2);