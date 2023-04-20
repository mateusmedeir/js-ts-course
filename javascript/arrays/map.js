// Double the numbers
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const doubleNumbers = numbers.map(value => value * 2);

console.log(doubleNumbers);


// For each element: 
const people = [
    {firstName: 'Luiz', age: 62},
    {firstName: 'Maria', age: 23},
    {firstName: 'Eduardo', age: 55},
    {firstName: 'Leticia', age: 19},
    {firstName: 'Rosana', age: 32},
    {firstName: 'Wallace', age: 47},
];

// Return only a string with the person's name
const firstNames = people.map(obj => obj.firstName);

console.log(firstNames);

// Only remove "firstName" key from the object

//const ages = people.map(obj => ({ age: obj.age}));

const ages = people.map(obj => {
    const newObj = {...obj};
    delete newObj.firstName;
    return newObj;
});

console.log(ages);

// Add an id key on each object

const withIds = people.map((obj, index) =>{
    const newObj = {...obj};
    newObj.id = index + 1;
    return newObj;
});

console.log(withIds);