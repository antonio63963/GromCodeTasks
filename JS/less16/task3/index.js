'use strict';

export function createArrayOfFunctions(len) {
    let arr = [];
    if (typeof len == 'number') {
        for (let i = 0; i < len; i++) {
            arr.push(function () {
                return i;
            });
        }
    } else if (typeof len == 'undefined') {
        return [];
    } else {
        return null;
    }
    return arr;
};

console.log(createArrayOfFunctions('5'));
console.log(createArrayOfFunctions());
console.log(createArrayOfFunctions(10)[5]());