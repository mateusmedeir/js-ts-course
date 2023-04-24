function Products(name, price, stock) {
    this.name = name;
    this.price= price;

    Object.defineProperty(this, 'stock', {
        enumerable: true, // show the key
        value: stock, // value
        writable: false, // defines if you can change the value
        configurable: false // defines if you can reconfigure/delete the key
    });

    // Object.defineProperties(this, {
    //     name: {
    //         enumerable: true, // show the key
    //         value: name,// value
    //         writable: false, // defines if you can change the value
    //         configurable: false // defines if you can reconfigure/delete the key
    //     },
    //     price: {
    //         enumerable: true, // show the key
    //         value: price,// value
    //         writable: false, // defines if you can change the value
    //         configurable: false // defines if you can reconfigure/delete the key
    //     },
    // });
}

const p1 = new Products('T-shirt', 20, 3);
console.log(Object.keys(p1));

for (let key in p1) {
    console.log(key);
}