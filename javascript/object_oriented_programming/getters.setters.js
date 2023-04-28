/* const _speed = Symbol('speed');
class Car {
    constructor(name) {
        this.name = name;
        this[_speed] = 0;
    }
    
    get speed() {
        return this[_speed];
    }
    
    set speed(value) {
        if (typeof value !== 'number') return;
        if (value < 0 || value > 100) return;
        this[_speed] = value;
    }

    speedUp() {
        if(this[_speed] >= 100) return;
        this[_speed]++;
    }
    slowDown() {
        if (this[_speed] <= 0) return;
        this[_speed]--;
    }
}

const c1 = new Car('Car');

for(let i = 0; i <= 200; i++) {
    c1.speedUp();
}

c1.speed = 55;
console.log(c1.speed); */

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        value = value.split(' ');
        this.firstName = value.shift();
        this.lastName = value.join(' ');
    }
}

const p1 = new Person('Mateus', 'Lopes');
p1.fullName = 'Mateus Medeiros Lopes';
console.log(p1.firstName);
console.log(p1.lastName);
console.log(p1.fullName);