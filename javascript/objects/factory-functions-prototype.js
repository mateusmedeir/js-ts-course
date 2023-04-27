const speak = {
    speak() {
        console.log(`${this.firstName} is speaking`);
    },
};

eat() {
    console.log(`${this.firstName} is eating`);
},
drink() {
    console.log(`${this.firstName} is drinking`);
},

const personPrototype = {
    
};

function createPerson(firstName, lastName) {
    return Object.create(personPrototype, {
        firstName: {value: firstName},
        lastName: {value: lastName}
    });
}

const p1 = createPerson('Mateus', 'Lopes');
console.log(p1);