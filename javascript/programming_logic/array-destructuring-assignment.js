// ... rest, ... spread

/*const numbers = [10000, 20000, 3000, 4000, 500, 6000, 7000, 8000, 900];
const [one, two, three, ...remnant] = numbers;
console.log(one, two, three);
console.log(remnant);*/

/*const numbers = [10000, 20000, 3000, 4000, 500, 6000, 7000, 8000, 900];
const [one, , three, , five, , seven] = numbers;
console.log(one, three, five, seven);*/


//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numbers = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
//console.log(numbers[1][2]);
//const [, [, , six]] = numbers;
const [list1, list2, list3] = numbers;

console.log(list3[2]);