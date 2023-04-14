/* const threeHours = 60 * 60 * 3 * 1000;
const oneDay = 60 * 60 * 24 * 1000;
const date = new Date(0 + threeHours + oneDay); */
//const date = new Date(2019, 3); // a, m, d, h, M, s, ms
/* const date = new Date(1681394596304);

console.log('Day', date.getDate());
console.log('Month', date.getMonth()); // Month starts in 0
console.log('Year', date.getFullYear());
console.log('Min', date.getHours());
console.log('Seg', date.getMinutes());
console.log('ms', date.getMilliseconds());
console.log('Day of the week', date.getDay()); // 0 - Sunday, 6 - Saturday
console.log(date.toString()); */
//console.log(Date.now());

function zeroToTheLeft(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {
    const day = zeroToTheLeft(date.getDay());
    const month = zeroToTheLeft(date.getMonth() + 1);
    const year = zeroToTheLeft(date.getFullYear());
    const hour = zeroToTheLeft(date.getHours());
    const min = zeroToTheLeft(date.getMinutes());
    const seg = zeroToTheLeft(date.getSeconds());

    return `${day}/${month}/${year} ${hour}:${min}:${seg}`;
}

const date = new Date();
const brazilDate = formatDate(date);
console.log(brazilDate);