function Person(firstName, lastName) {
    // Attributes with private methods
    const ID = 123456;

    const internalMethod = function() {

    };

    this.firstName = firstName;
    this.lastName = lastName;

    // Attributes with public methods
    this.method = function() {
        console.log(this.firstName + ': I\'m a method');
    }
}

const p1 = new Person('Mateus', 'Lopes');
const p2 = new Person('Luiz', 'Otávio');
p1.method();