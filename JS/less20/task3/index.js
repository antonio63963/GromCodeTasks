'use strict';

export class Wallet {
    constructor() {
        this._balance = 0;
    }
    getBalance() {
        console.log(this._balance);
        return this._balance;
    }

    deposit(value) {
        this._balance += value;
    }

    withdraw(value) {
        if (value > this._balance) {
            console.log('No enough funds');
            return;
        } else {
            this._balance -= value;
        }
    }

}

const wallet1 = new Wallet();

wallet1.getBalance();
wallet1.withdraw(34);
