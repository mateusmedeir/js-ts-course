// arguments - sustains all submitted arguments

// function newFunction(a, b, c) {
//     let total = 0;
//     for (let argument of arguments) total += argument;
//     console.log(total, a, b, c);
// }

// function newFunction(a, b, c, d, e, f) {
//     console.log(a, b, c, d, e, f);
// }

// newFunction(1, 2, 3);

// function newFunction(a, b = 2, c = 4) {
//     console.log(a + b + c);
// }

// newFunction(2, undefined);

// function newFunction({firstName, lastName, age}) {
//     console.log(firstName, lastName, age);
// }

// let obj = {firstName: 'Mateus', lastName: 'Lopes', age: 21};

// newFunction(obj);

// function newFunction([value1, value2, value3]) {
//     console.log(value1, value2, value3);
// }

// newFunction(['Mateus', 'Lopes', 21]);

// const count = (operator, accumulator, ...numbers) => {
//     for (let number of numbers) {
//         if (operator === '+') accumulator += number;
//         if (operator === '-') accumulator -= number;
//         if (operator === '/') accumulator /= number;
//         if (operator === '*') accumulator *= number;
//     }
//     console.log(accumulator);
// }

// count('+', 1,  20, 30, 40, 50);

// const count = function (operator, accumulator, ...numbers) {
//     console.log(arguments);
// };

// const count = (operator, accumulator, ...numbers) => {
//     //console.log(arguments);
//     console.log(operator, accumulator, numbers);
// }

const count = (...args) => {
    //console.log(arguments);
    console.log(args);
}

count('+', 1,  20, 30, 40, 50);