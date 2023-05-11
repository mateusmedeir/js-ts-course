const rand = (min, max) => Math.round(Math.random() * (max - min) + min);
const randCapital = () => String.fromCharCode(rand(65, 90));
const randSmall = () => String.fromCharCode(rand(97, 122));
const randNumber = () => rand(0, 9);
const symbols = "!\"#$%&'()*,-./:;<=>?@[\\]^_`{|}~";
const randSymbol = () => symbols[rand(0, symbols.length)];
const randFunctions = [randCapital, randSmall, randNumber, randSymbol];

export default function generatePassword(amount, capital, small, numbers, symbols) {
    const characters = [capital, small, numbers, symbols];
    amount = Number(amount);
    let password = '';
    let size = randFunctions.length;
    for(let i = 0; i < amount; i++) {
        for (let j = 0; j < size; j++)
            if (characters[j % size]) password += randFunctions[j % size]();
    }
    return password.slice(0, amount);
}