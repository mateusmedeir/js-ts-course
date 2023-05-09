export const firstName = 'Mateus';
export const lastName = 'Lopes';
export const age = 21;

export function add(x, y) {
    return x + y;
}

export default class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}