function rand(min=0, max=3) {
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

/* waitThere('Phase 1', rand())
.then(phase => {
    console.log(phase);
    return waitThere('Phase 2', rand())
    .then(pashe => {
        console.log(phase);
        return waitThere('Phase 3', rand())
        .then(phase => {
            console.log(phase);
            return phase;
        });
    });
})
.then(phase => {
    console.log('We end on phase: ' + phase);
})
.catch(e => console.log('ERROR: ' + e)); */

async function run() {
    try {
        const phase1 = waitThere('Phase 1', 1);
        console.log(phase1);

        setTimeout(function() {
            console.log('This promise was pending:', phase1);
        }, 1100);
        const phase2 = await waitThere('Phase 2', rand());
        console.log(phase2);
        const phase3 = await waitThere(3, rand());
        console.log(phase3);
        console.log('We end on phase: ' + phase3);
    } catch (error) {
        console.log('ERROR: ' + error);
    }
}

run();

// Pending
// Fulfilled -> resolved
// Rejected

const test2 = waitThere('qlq', 5000);
console.log('Test2:', test2);