const speak = {
    speak() {
        console.log(`${this.firstName} is speaking`);
    },
};

const eat = {
    eat() {
        console.log(`${this.firstName} is eating`);
    },
};

const drink = {
    drink() {
        console.log(`${this.firstName} is drinking`);
    },
};

// spread
const personPrototype = { ...speak, ...eat, ...drink };

// .assign()
//const personPrototype = Object.assign({}, speak, eat, drink);

function createPerson(firstName, lastName) {
    return Object.create(personPrototype, {
        firstName: {value: firstName},
        lastName: {value: lastName}
    });
}

const p1 = createPerson('Mateus', 'Lopes');
console.log(p1);