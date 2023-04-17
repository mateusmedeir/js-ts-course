function displayHour() {
    let date = new Date();

    return date.toLocaleTimeString(undefined, {

    });
}

const timer = setInterval(() => console.log(displayHour()), 1000);

setTimeout(() => clearInterval(timer), 3000);

setTimeout(() => console.log('Hello World'), 5000);