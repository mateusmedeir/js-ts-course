// If can be used alone
// Whenever an else is used, there needs to be an if before
// There may be many elses in the check
// There can only be one else in the check

/* const hour = 50;

if (hour >= 0 && hour <= 11) {
    console.log('Good Morning');
} else if (hour >= 12 && hour <= 17) {
    console.log('Good Afternoon');
} else if (hour >= 18 && hour <= 23) {
    console.log('Good Night');
} else {
    console.log('Hi');
} */

const number = 10;

if (number <= 10) {
    console.log('The number is less or equal to 10');
}

if (number >= 0 && number <= 5) {
    console.log('The number is between 0 and 5');
} else if (number >= 6 && number <= 8) {
    console.log('The number is between 6 and 8');
} else if (number >= 9 && number <= 11) {
    console.log('The number is between 9 and 11');
} else {
    console.log('The number is not between 0 and 11');
}