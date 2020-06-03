'use strict';


export const wallet = {
    transactions: [123, 456, 3, 54, 66],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    },
};



console.log(wallet.getMax());
console.log(wallet.getMin());



