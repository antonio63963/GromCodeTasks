'use strict';

export class Wallet {
    constructor() {
        _balance = 0;
    }
    _getBalance() {
        return this._balance;
    }

    _deposit(value) {
        this._balance += value;
    }

    _withDraw(value) {
        if (value > this._balance) {
            console.log('No enough funds');
            return;
        } else {
            this._balance -= value;
        }
    }

}