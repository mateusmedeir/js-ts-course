// 705.484.450-52 070.987.720-03
/*

  7  0  5  4  8  4  4  5  0
x10 x9 x8 x7 x6 x5 x4 x3 x2
 70  0 40 28 48 20 16 15  0 = 237

11 - (237 % 11) = 5 (First digit)
If the number is greater than 9, consider it as 0.

  7   0  5  4  8  4  4  5  0  5
x11 x10 x9 x8 x7 x6 x5 x4 x3 x2
 77   0 45 32 56 24 20 20  0 10 = 284

11 - (284 % 11) = 2 (Second digit)
If the number is greater than 9, consider it as 0.
*/


// /\D+/g -> everything that is not a number

function cpfValidator(cpf) {

    function finalDigits(cpf) {
        const size = cpf.length + 1;
        const digit = cpf
        .map((value, index) => value > 0 ? Number(value) * (size - index) : 0)
        .reduce((accumulator, value) => accumulator + Number(value), 0);
        return 11 - (digit % 11);
    };

    function pushOnCpf(cpf) {
        const digit = finalDigits(cpf);
        cpf.push(digit > 9 ? '0' : digit.toString());
    };

    const cleanCpf = cpf.replace(/\D+/g, '');
    const cpfArray = Array.from(cleanCpf).slice(0, -2);

    if (typeof cleanCpf === 'undefined') return false;
    if (cleanCpf.length !== 11) return false;

    for (i = 0; i < 2; i++) pushOnCpf(cpfArray);

    const finalCpf = cpfArray.join('');
    return finalCpf === cleanCpf;
}

console.log(cpfValidator('705.484.450-52')); 

/* function CPFValidator(cpf) {
    Object.defineProperty(this, 'cleanCpf', {
        get: function() {
            return cpf.replace(/\D+/g, '');
        },
    });
}

CPFValidator.prototype.validate = function() {
    if (typeof this.cleanCpf === 'undefined') return false;
    if (this.cleanCpf.length !== 11) return false;
    return true;
};

CPFValidator.prototype.createDigit = function(cpf) {
    const cpfArray
};

const cpf = new CPFValidator('705.484.450-52');
console.log(cpf.cleanCpf);
console.log(cpf.validate()); */