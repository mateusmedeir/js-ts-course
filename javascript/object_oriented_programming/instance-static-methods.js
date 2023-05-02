function test() {
    console.log('This is my test.');
}

class RemoteControl {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        test();
    }
    // Instance Method
    increaseVolume() {
        this.volume += 2;
    }
    decreaseVolume() {
        this.volume -= 2;
    }

    /* Instance Method
    changeBattery() {
        
    } */

    // Static Methods
    static changeBattery() {
        console.log('Ok, I will change');
    }

    static add(x, y) {
        return x + y;
    }
}

const control1 = new RemoteControl('LG');
control1.increaseVolume();
control1.increaseVolume();
console.log(control1);

RemoteControl.changeBattery();

console.log(RemoteControl.add(2, 4));