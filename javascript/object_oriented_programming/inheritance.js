class EletronicDevice {
    constructor(name) {
        this.name = name;
        this.connected = false;
    }

    connect() {
        if (this.connected) {
            console.log(this.name + ' already connected');
            return;
        }
        this.connected = true;
    }
    disconnect() {
        if (!this.connected) {
            console.log(this.name + ' already disconnected');
            return;
        }
        this.connected = false;
    }
}

class Smartphone extends EletronicDevice {
    constructor(name, color, model) {
        super(name);
        this.color = color;
        this.model = model;
    }
}

class Tablet extends EletronicDevice {
    constructor(name, hasWifi) {
        super(name);
        this.hasWifi = hasWifi;
    }

    connect() {
        console.log('Look, You changed the connect method.');
    }
    
    sayHi() {
        console.log('Hi');
    }
}

const s1 = new Smartphone('Samsung', 'Black', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.connect();
t1.connect();