function Products(name, price, stock) {
    this.name = name;
    this.price= price;

    let privateStock = stock;
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false ,
        get: function() {
            return privateStock;
        },
        set: function(value) {
            if (typeof value !== 'number') {
                throw new TypeError('Message');
                return;
            }
            privateStock = value;
        }
    });

}

function createProduct() {
    return {
        get name() {
            return name;
        },
        set name(value) {
            name = value;
        }
    };
}

// const p1 = new Products('T-shirt', 20, 3);
// console.log(p1);
// p1.stock = 'test';
// console.log(p1.stock);

const p2 = createProduct('T-shirt');
p2.name = 'Test';
console.log(p2.name);