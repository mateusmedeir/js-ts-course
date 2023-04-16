// try {
//     console.log('Opening a file');
//     console.log('Manipulating the file');
//     console.log('Closing the file');

//     try {
//         console.log(b);
//     } catch (error) {
//         console.log('An error');
//     } finally {
//         console.log('Also a finally');
//     }
// } catch (error) {
//     console.log('Handling an error');
// } finally {
//     console.log('FINALLY: I always get executed');
// }

function returnHour(date) {
    if (date && !(date instanceof Date))
        throw new TypeError('Waiting for instance of Date.');
    if (!date)
        date = new Date();
    return date.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

try {
    const date = new Date('01-01-1970 12:58:12');
const hour = returnHour(11);
console.log(hour);
} catch (error) {

} finally {
    console.log('Have a nice day.');
}