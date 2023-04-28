class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    talk(){
        console.log(`${this.firstName} is talking.`);
    }
}

function Person2(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person2.prototype.talk = function() {
    console.log(`${this.firstName} is talking.`);
}

const p1 = new Person('Mateus', 'Lopes');
const p2 = new Person2('Mateus', 'Lopes');
console.log(p1);
console.log(p2);