// Filter -> Always returns an array, with the same amount of elements
// or less.

// Return numbers greater than 10
//               0   1   2  3  4  5  6  7  8   9  10  11  12
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* function callbackFilter(value, index, array) {
    if (value > 10){
        return true;
    }else {
        return false;
    }
} */

/* function callbackFilter(value) {
    return value > 10;
} */

/* const filteredNumbers = numbers.filter(function (value) {
    return value > 10;
}); */

/* const filteredNumbers = numbers.filter((value) =>{
    return value > 10;
}); */


// Shorted code

const filteredNumbers = numbers.filter(value => value > 10);

//console.log(filteredNumbers);

const people = [
    {firstName: 'Luiz', age: 62},
    {firstName: 'Maria', age: 23},
    {firstName: 'Eduardo', age: 55},
    {firstName: 'Leticia', age: 19},
    {firstName: 'Rosana', age: 32},
    {firstName: 'Wallace', age: 47},
];

/* const peopleWithBigName = people.filter(function(obj) {
    return obj.firstName.length >= 5;
}); */


// Return people whose name is 5 letters or more
const peopleWithBigName = people.filter(obj => obj.firstName.length >= 5);

console.log(peopleWithBigName);


// Return people over 50 years
const peopleOver50 = people.filter(obj => obj.age > 50);

console.log(peopleOver50);


// Return people whose name ends with a
const peopleWhoseNameEndsWithA = people.filter(obj => {
    return obj.firstName.toLowerCase().endsWith('a');
});

console.log(peopleWhoseNameEndsWithA);