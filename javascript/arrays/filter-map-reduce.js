// Return the sum of the double of all evens
// Filter evens
// Double the values
// Reduce (sums all)
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numbers
.filter(value => value % 2 === 0)
.map(value => value * 2)
.reduce((ac, value) => ac += value, 0);

// [  50,  80, 2,  8, 22 ] evens
// [ 100, 160, 4, 16, 44 ] double
console.log(total);