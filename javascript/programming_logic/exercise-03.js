// Write a function that takes a number and
// return the following:
// Number is divisble by 3 = Fizz
// Number is divisible by 5 = Buzz
// Number is divisible by 3 and 5 = FizzBuzz
// Number is not divisible by 3 or 5 = Returns the number itself
// Check if number is really a number
// Use the function with numbers form 0 to 100

fizzBuzz = number => {
    if (typeof number !== 'number') return number;
    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
    if (number % 3 === 0) return 'Fizz';
    if (number % 5 === 0)  return 'Buzz';
    return number;
};

for (let i = 0; i <= 100; i++) 
    console.log(i, fizzBuzz(i));

console.log('a',  fizzBuzz('a'));