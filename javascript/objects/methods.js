const product = {name: 'Product', price:  1.8};

//const mug = {name: product.name, price: product.price};

//const mug = Object.assign({}, product, {material: 'porcelain'});

// const mug = {
//     ...product,
//     material: 'porcelain'
// };

// mug.name = 'Test';
// mug
// console.log(product);
// console.log(mug);

/* Object.defineProperty(product, 'name', {
    writable: false,
    configurable: false,
    value: 'Test'
});
console.log(Object.getOwnPropertyDescriptor(product, 'name'));
console.log(product); */

console.log(Object.entries(product));

for (let [key, value] of Object.entries(product)) {
    console.log(key, value);
}