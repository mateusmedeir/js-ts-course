function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('not a string');
                return;
            }
            resolve(msg.toUpperCase() + '- I passed on the promise');
        }, time);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject

/* const promises = [
    'First value',
    waitThere('Promise 1', rand(1, 5)),
    waitThere('Promise 2', rand(1, 5)),
    waitThere('Promise 3', rand(1, 5)),
    waitThere(1000, rand(1, 5)),
    'Other value'
]; */


/* Promise.all(promises)

.then(function(value) {
    console.log(value);
})
.catch(function(error){
    console.log('ERROR: ' + error);
}); */


/* Promise.race(promises)

.then(function(value) {
    console.log(value);
})
.catch(function(error){
    console.log('ERROR: ' + error);
}); */


function downloadPage(){
    const cached = true;

    if (cached) {
        //return Promise.resolve('Cached Page');
        return Promise.reject('Cached Page');
    } else {
        return waitThere('Downloaded Page', 3000);
    }
}

downloadPage()
.then(pageData => {
    console.log(pageData);
})
.catch(e => console.log('ERROR: ' + e));