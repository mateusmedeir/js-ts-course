// Superclass
function Account(agency, account, balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

Account.prototype.withdraw = function(value) {
    if (value > this.balance) {
        console.log(`Insufficient balance: R$ ${this.balance.toFixed(2)}`);
        return;
    };
    this.balance -= value;
    this.seeBalance();
};
Account.prototype.deposit = function(value) {
    this.balance += value;
    this.seeBalance();
};
Account.prototype.seeBalance = function() {
    console.log(`Ag/c: ${this.agency}/${this.account}\nBalance: R$ ${this.balance.toFixed(2)}`);
};

function CA(agency, account, balance, limit) {
    Account.call(this, agency, account, balance);
    this.limit = limit;
}

CA.prototype = Object.create(Account.prototype);
CA.prototype.constructor = CA;

CA.prototype.withdraw = function(value) {
    if (value > (this.balance + this.limit)) {
        console.log(`Insufficient balance: R$ ${this.balance.toFixed(2)}`);
        return;
    };
    this.balance -= value;
    this.seeBalance();
};

function SA(agency, account, balance) {
    Account.call(this, agency, account, balance);
}

SA.prototype = Object.create(Account.prototype);
SA.prototype.constructor = SA;


const ca1 = new CA(11, 22, 0, 100);
ca1.deposit(10);
ca1.withdraw(110);
ca1.withdraw(1);

console.log('--------------------');

const sa1 = new SA(12, 33, 0);
sa1.deposit(10);
sa1.withdraw(10);
sa1.withdraw(1);