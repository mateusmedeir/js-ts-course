// function getDayWeekText(day) {
//     const daysWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     return daysWeek[day];
//     /* switch (day) {
//         case 0:
//             return 'Sunday';
//         case 1:
//             return 'Monday';
//         case 2:
//             return 'Tuesday';
//         case 3:
//             return 'Wednesday';
//         case 4:
//             return 'Thursday';
//         case 5:
//             return 'Friday';
//         case 6:
//             return 'Saturday';
//         default:
//             return '';
//     } */
// }

// function getMonthText(mounth) {
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     return months[mounth];
// /*     switch (mounth) {
//         case 0:
//             return 'January';
//         case 1:
//             return 'February';
//         case 2:
//             return 'March';
//         case 3:
//             return 'April';
//         case 4:
//             return 'May';
//         case 5:
//             return 'June';
//         case 6:
//             return 'July';
//         case 7:
//             return 'August';
//         case 8:
//             return 'September';
//         case 9:
//             return 'October';
//         case 10:
//             return 'November';
//         case 11:
//             return 'December';
//         default:
//             return '';
//     } */
// }

// function zeroToTheLeft(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function createDate(date) {
//     return `${date.getDate()}, ${getDayWeekText(date.getDay())} of ${getMonthText(date.getMonth())} of ${date.getFullYear()} ${zeroToTheLeft(date.getHours())}:${zeroToTheLeft(date.getMinutes())}`;
// }

// const h1 = document.querySelector('.container h1');
// const date = new Date();

// h1.innerHTML = createDate(date);

const h1 = document.querySelector('.container h1');
const date = new Date();

h1.innerHTML = date.toLocaleString(undefined, { dateStyle: 'full', timeStyle: 'short'
});