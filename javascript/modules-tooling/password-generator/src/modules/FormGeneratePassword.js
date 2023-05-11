import generatePassword from './GeneratePassword';

const generatedPassword = document.querySelector('.generated-password');
const amount = document.querySelector('.amount-characters');
const chkCapital = document.querySelector('.chk-capital');
const chkSmall = document.querySelector('.chk-small');
const chkNumber = document.querySelector('.chk-number');
const chkSymbol = document.querySelector('.chk-symbol');
const genPassword = document.querySelector('.generate-password');

export default () => {
    genPassword.addEventListener('click', () => {
        generatedPassword.innerHTML = generate();
    });
}

function generate() {
    const password =  generatePassword(
        amount.value,
        chkCapital.checked,
        chkSmall.checked,
        chkNumber.checked,
        chkSymbol.checked,
    );

    return password || 'Nothing selected';
}