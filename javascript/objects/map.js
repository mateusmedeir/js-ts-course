const people = [
    {id: 3, firstName: 'Mateus'},
    {id: 2, firstName: 'Luiz'},
    {id: 1, firstName: 'Maria'},
];

/* const newPeople = {};
for (const person of people) {
    const { id } = person;
    newPeople[id] = {...person};
} */

const newPeople = new Map();
for (const person of people) {
    const { id } = person;
    newPeople.set(id, {...person});
}

console.log(newPeople.get(2));

/* for (const person of newPeople) {
    console.log(person);
} */

/* for (const [identifier, {id, firstName}] of newPeople) {
    console.log(identifier, id, firstName);
} */

/* for (const person of newPeople.keys()) {
    console.log(person);
} */

/* for (const person of newPeople.values()) {
    console.log(person);
} */

newPeople.delete(2);
console.log(newPeople);