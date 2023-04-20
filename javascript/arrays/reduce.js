//               0   1   2  3  4  5  6  7  8   9  10  11  12
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* const total = numbers.reduce(function(accumulator, value, index, array) {

}, 0); */


/* Return an array with the even (Filter)
const total = numbers.reduce(function(accumulator, value, index, array) {
    if (value %2 == 0)
        accumulator.push(value);
    return accumulator;
}, []); */


/* Return an array with the double of the values (Map)
const total = numbers.reduce(function(accumulator, value) {
    accumulator.push(value * 2);
    return accumulator;
}, []) */


/* Add all the numbers (Reduce)
const total = numbers.reduce(function(accumulator, value, index, array) {
    accumulator += value;
    return accumulator;
}, []); */

const total = numbers.reduce((accumulator, value) => {
    if (value % 2 === 0) accumulator += value;
    return accumulator;
}, 0);
console.log(total);


// Return the oldest person
const people = [
    {firstName: 'Maria', age: 23},
    {firstName: 'Eduardo', age: 55},
    {firstName: 'Leticia', age: 19},
    {firstName: 'Luiz', age: 62},
    {firstName: 'Rosana', age: 32},
    {firstName: 'Wallace', age: 1000},
];

const oldest = people.reduce((accumulator, obj) => {
    if (obj.age > accumulator.age)
        return obj;
    return accumulator;
});

console.log(oldest);