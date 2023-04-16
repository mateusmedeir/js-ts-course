const firstNames = ['Luiz', 'João', 'Pedro'];

// for (let i = 0; i < fullName.length; i++) {
//     console.log(fullName[i]);
// }

// for (let i in fullName) {
//     console.log(fullName[i]);
// }

for (let value of firstNames) {
    console.log(value);
}

console.log('-----------------------------------------');

firstNames.forEach((value, index, array) => {
    console.log(value, index, array);
});