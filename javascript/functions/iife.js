// IIFE -> Immediately invoked function expression

// (function() {
//     const firstName = 'Mateus';
//     console.log(firstName);
// })();

// const firstnName = 'Anything';

(function(age, weight, height) {
    const lastName = 'Lopes';
    function createName(firstName) {
        return firstName + ' ' + lastName;
    }

    function speakName() {
        console.log(createName('Mateus'));
    }
    speakName();
    console.log(age, weight, height);
})(30, 80, 1.80);

const firstName = 'Anything';