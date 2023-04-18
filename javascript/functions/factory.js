// Factory function
function createPerson(firstName, lastName, a, p) {
    return {
        firstName,
        lastName,
        // Getter
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        // Set
        set fullName(value) {
            value = value.split(' ');
            this.firstName = value.shift();
            this.lastName = value.join(' ');
        },
        speak(subject = 'speaking about NOTHING') {
            return `${this.firstName} is ${subject}.`;
        },
        height: a,
        weight: p,

        // Getter
        get imc() {
            const index = this.weight / (this.height ** 2);
            return index.toFixed(2);
        }
    };
}

const p1 = createPerson('Mateus', 'Lopes', 1.8, 80);
const p2 = createPerson('Luiz', 'Otávio', 1.90, 57);
const p3 = createPerson('João', 'Santos', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);