class ValidateCPF {
    constructor(cpf) {
        this.cpf = cpf;
        this.cleanCpf = this.cpf.replace(/\D+/g, '');
    }

    static isSequence(cleanCpf) {
        return cleanCpf[0].repeat(11) === cleanCpf;
    }

    createDigit() {
        const size = this.cpfArray.length + 1;
        const digit = this.cpfArray
        .reduce((ac, value, index) => ac + (Number(value) * (size - index)), 0);
        return 11 - (digit % 11);
    }

    pushOnCpf() {
        for(let i = 0; i < 2; i++) {
            const digit = this.createDigit();
            this.cpfArray.push(digit > 9 ? '0' : String(digit));
        }
    }

    generateFinalCpf() {
        this.cpfArray = Array.from(this.cleanCpf.slice(0, -2));
        this.pushOnCpf();
        return this.cpfArray.join('');
    }

    validate() {
        if (typeof this.cleanCpf === 'undefined') return false;
        if (this.cleanCpf.length !== 11) return false;
        if (ValidateCPF.isSequence(this.cleanCpf)) return false;
        
        return this.generateFinalCpf() === this.cleanCpf;
    }
}

const validateCpf = new ValidateCPF('070.987.720-03');

if (validateCpf.validate()) {
    console.log('Valid CPF');
} else {
    console.log('Invalid CPF');
}