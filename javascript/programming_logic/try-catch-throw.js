// try {
//     console.log(iDoNotExist);
// } catch (error) {
//     console.log('"iDoNotExist" does not exist.');
// }

function add(x, y) {
    if (
        typeof x !== 'number' || 
        typeof y !== 'number'
        ) {
        throw new Error('x and y must be numbers');
    }

    return x + y;
}

try {
    console.log(add('1', 2));
} catch (error) {
    console.log(error);
    console.log('something');
}