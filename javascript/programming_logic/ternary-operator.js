// ? :

const userScore = 999;

/* if (userScore >= 1000) {
    console.log('VIP user');
} else {
    console.log('Normal user');
} */

const userLevel = userScore >= 1000 ?'VIP user' : 'Normal user';

const userColor = 'Pink';
const defaultColor = userColor || 'Dark'
console.log(userLevel, defaultColor);