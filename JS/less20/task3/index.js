'use strict';

export class Wallet {
    constructor() {
        _balance = 0;
    }
    getBalance() {
        return this._balance;
    }

    deposit(value) {
        this._balance += value;
    }

    withDraw(value) {
        if (value > this._balance) {
            console.log('No enough funds');
            return;
        } else {
            this._balance -= value;
        }
    }

}