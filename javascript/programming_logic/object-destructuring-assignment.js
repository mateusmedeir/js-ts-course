const person = {
    firstName: 'Luiz',
    lastName: 'Miranda',
    age: 30,
    address: {
        street: 'Av Brasil',
        number: 320
    }
};

//console.log(person.firstName);

/* const firstName = person.firstName;
console.log(firstName); */

// destruturing assignment

/* const { firstName, lastName, } = person;
console.log(firstName, lastName); */

/* const { firstName = '', lastName } = person;
console.log(firstName, lastName); */

/* const { firstName: n = '', lastName } = person;
console.log(n, lastName); */

/* const { address: { street: s = 12345, number }, address } = person;
console.log(s, number, address); */

const { firstName, lastName, ...remnant } = person;
console.log(firstName, remnant);