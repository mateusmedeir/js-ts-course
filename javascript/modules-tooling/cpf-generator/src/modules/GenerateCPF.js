import ValidateCPF from './ValidateCPF';

export default class GenerateCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.round(Math.random() * (max - min) + min));
    }

    formatCpf(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    generateNewCpf() {
        const cpfArray = Array.from(this.rand());
        ValidateCPF.pushOnCpf(cpfArray);
        return this.formatCpf(cpfArray.join(''));
    }
}