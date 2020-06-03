'use strict';


const wallet = {
    transaction: [123, 456, 3, 54, 66],
    getMax() {
        return Math.max(...this.transaction);
    },
    getMin() {
        return Math.min(...this.transaction);
    },
};



console.log(wallet.getMax());
console.log(wallet.getMin());



