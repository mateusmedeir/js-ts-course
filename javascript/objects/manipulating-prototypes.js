/* // new Object -> Object.prototype
const objA = {
    keyA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    keyB: 'B'
    // __proto__: objA
};

const objC = new Object();
objA.keyC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.keyA); */

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function(percentage) {
    this.price = this.price - (this.price * (percentage / 100));
};

Product.prototype.increase = function(percentage) {
    this.price = this.price + (this.price * (percentage / 100));
};

const p1 = new Product('T-shirt', 50);
const p2 = {
    name: 'Mug',
    price: 15
};

Object.setPrototypeOf(p2, Product.prototype);

p2.increase(100);

const p3 = Object.create(Product.prototype, {
    price: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 99
    },
    size: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 42
    },
});

p3.increase(10);

console.log(p3);