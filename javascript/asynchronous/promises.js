function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

/* function waitThere(msg, time, cb) {
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, time);
}

waitThere('Sentence 1', rand(1, 3), function() {
    waitThere('Sentence 2', rand(1, 3), function() {
        waitThere('Sentence 3', rand(1, 3))
    })
}); */

function waitThere(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') reject('BAD VALUE');
            resolve(msg);
        }, time);
    });
}

waitThere('Connection with DB.', rand(1, 3))
.then(response => {
    console.log(response);
    return waitThere('Searching for data in DB.', rand(1, 3));
})
.then(response => {
    console.log(response);
    return waitThere(2222222, rand(1, 3));
})
.then(response => {
    console.log(response);
})
.then(() => {
    console.log('Showing data on the screen.');
})
.catch(e => {
    console.log('ERROR:', e);
});

console.log('This here will be displayed before any promise.');