//                 -5      -4         -3         -2       -1
//                  0       1          2          3        4
const names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

//names.splice(index, delete, elem1, elem2, elem3);

// pop
// const removedNames = names.splice(-1, -1);

// shift
// const removedNames = names.splice(0, 1);

//push
// const removedNames = names.splice(names.length, 0, 'Luiz', 'Felipe', 'Rogerio');

// unshift
const removedNames = names.splice(0, 0, 'Luiz', 'Felipe', 'Rogerio');

// const removedNames = names.splice(3, 2);
// const removedNames = names.splice(-2, Number.MAX_VALUE);
// const removedNames = names.splice(-2, 1);
// const removedNames = names.splice(3, 0, 'Luiz');
// const removedNames = names.splice(3, 2, 'Luiz');
//const removedNames = names.splice(3, 2, 'Luiz', 'Felipe');

console.log(names, removedNames);