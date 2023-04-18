// Function declaration (Function hoisting)
sayHi();
function sayHi() {
    console.log('Hi');
}

// First-class objects


// Function expression
const iAmAData = function() {
    console.log('I am a data.');
};

/* const iAmAData = function functionName() {
    console.log('I am a data.');
}; */

function executeFunction(f) {
    console.log("executing function:");
    f();
}

executeFunction(iAmAData);

// Arrow function

const arrowFunction = () => {
    console.log('I am an arrow function');
};


arrowFunction();

/* setInterval(function() {
    console.log('test');
}, 1000); */

// Inside an object

/* const obj = {
    speak: function () {
        console.log("I'm speaking...");
    }
}; */

const obj = {
    speak() {
        console.log("I'm speaking...");
    }
};

obj.speak();