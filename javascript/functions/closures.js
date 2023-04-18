function returnFunction(firstName) {
    return () => firstName;
}

const newFunction = returnFunction('Mateus');
const newFunction2 = returnFunction('Luiz');

console.log(newFunction());
console.log(newFunction2());