// Constructor -> mold (class)
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Person.prototype === p1.__proto__

// instance
Person.prototype.fullName = function() {
     return this.firstName + ' ' + this.lastName;
};
const p1 = new Person('Mateus', 'L.'); // Person = constructor function
const date = new Date(); // <- Date = constructor function
console.log(p1);
console.log(p1.fullName());
console.log(date);