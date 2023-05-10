class ValidateCPF {
    constructor(cpf) {
        this.cpf = cpf;
        this.cleanCpf = this.cpf.replace(/\D+/g, '');
    }

    isSequence() {
        return this.cleanCpf[0].repeat(11) === this.cleanCpf;
    }

    static createDigit(cpfArray) {
        const size = cpfArray.length + 1;
        const digit = cpfArray
        .reduce((ac, value, index) => ac + (Number(value) * (size - index)), 0);
        return 11 - (digit % 11);
    }

    static pushOnCpf(cpfArray) {
        for(let i = 0; i < 2; i++) {
            const digit = ValidateCPF.createDigit(cpfArray);
            cpfArray.push(digit > 9 ? '0' : String(digit));
        }
    }

    generateFinalCpf() {
        this.cpfArray = Array.from(this.cleanCpf.slice(0, -2));
        ValidateCPF.pushOnCpf(this.cpfArray);
        return this.cpfArray.join('');
    }

    validate() {
        if (typeof this.cleanCpf === 'undefined') return false;
        if (this.cleanCpf.length !== 11) return false;
        if (this.isSequence()) return false;
        
        return this.generateFinalCpf() === this.cleanCpf;
    }
}

const validateCpf = new ValidateCPF('070.987.720-03');

if (validateCpf.validate()) {
    console.log('Valid CPF');
} else {
    console.log('Invalid CPF');
}