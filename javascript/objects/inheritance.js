function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.increase = function(value) {
    this.price += value;
};

Product.prototype.discount = function(value) {
    this.price -= value;
};

function Shirt(name, price, color) {
    Product.call(this, name, price);
    this.color = color;
}

Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt;

Shirt.prototype.increase = function(percentage) {
    this.price = this.price + (this.price * (percentage / 100));
}

function Mug(name, price, material, stock) {
    Product.call(this, name, price);
    this.material = material;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: function() {
            return stock;
        },
        set: function(value) {
            if (typeof value === 'number') stock = value;
        }
    });
}

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

const product = new Product('Gen', 111);
const shirt = new Shirt('Tank top', 7.5, 'Black');
const mug = new Mug('Mug', 13, 'Plastic', 5);
mug.stock = 100;

console.log(mug);
console.log(mug.stock);
console.log(shirt);
console.log(product);