function getDayWeekText(dayWeek) {
    let dayWeekText;
    switch (dayWeek) {
        case 0:
            dayWeekText = 'Sunday';
            return dayWeekText;;
        case 1:
            dayWeekText = 'Monday';
            return dayWeekText;;
        case 2:
            dayWeekText = 'Tuesday';
            return dayWeekText;;
        case 3:
            dayWeekText = 'Wednesday';
            return dayWeekText;;
        case 4:
            dayWeekText = 'Thursday';
            return dayWeekText;;
        case 5:
            dayWeekText = 'Friday';
            return dayWeekText;;
        case 6:
            dayWeekText = 'Saturday';
            return dayWeekText;;
        default:
            dayWeekText = '';
            return dayWeekText;;
    }
}

/* if (dayWeek === 0) {
    dayWeekText = 'Sunday';
} else if (dayWeek === 1) {
    dayWeekText = 'Monday';
} else if (dayWeek === 2) {
    dayWeekText = 'Tuesday';
} else if (dayWeek === 3) {
    dayWeekText = 'Wednesday';
} else if (dayWeek === 4) {
    dayWeekText = 'Thursday';
} else if (dayWeek === 5) {
    dayWeekText = 'Friday';
} else if (dayWeek === 6) {
    dayWeekText = 'Saturday';
} else {
    dayWeekText = '';
} */

const date = new Date('1987-04-26 00:00:00');
const dayWeek = date.getDay();
const dayWeekText = getDayWeekText(dayWeek);

console.log(dayWeek, dayWeekText);