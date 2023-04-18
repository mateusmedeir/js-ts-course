// function add(a, b) {
//     return a + b;
// }

// function add(a, b) {
//     console.log(a + b);
// }

// add(5, 2);

// function createPerson(firstName, lastName) {
//     return {firstName, lastName};
// }

// const p1 = createPerson('Mateus', 'Lopes');

// const p2 = {
//     firstName: 'João',
//     lastName: 'Pedro'
// };

// console.log(typeof p1);
// console.log(typeof p2);

// function speakSentence(start) {
//     function speakRest(rest) {
//         return start + ' ' + rest;
//     }
//     return speakRest;
// }

// const helloWorld = speakSentence('Hello');
// console.log(helloWorld('World!'));


// function duplicate(n) {
//     return n * 2;
// }

// function triplicate(n) {
//     return n * 3;
// }

// function quadruplicate(n) {
//     return n * 4;
// }

function createMultiplier(multiplier) {
    return n => n * multiplier;
}

const duplicate = createMultiplier(2);
const triplicate = createMultiplier(3);
const quadruplicate = createMultiplier(4);

console.log(duplicate(2));
console.log(triplicate(2)); 
console.log(quadruplicate(2));