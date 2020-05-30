'use strict';

export function createArrayOfFunctions(len) {
    if (typeof len !== 'number') {
        return null;
    } else if (typeof len == 'undefined') {
        return [];
    }
    let arr = [];

    for (let i = 0; i < len; i++) {
        arr.push(function () {
            return i;
        });
    }

    return arr;
};

console.log(createArrayOfFunctions('5'));
console.log(createArrayOfFunctions(5));
console.log(createArrayOfFunctions(10)[5]());