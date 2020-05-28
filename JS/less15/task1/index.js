'use strict'; 



export function makeCounter() {
    let count = 0;
    return function() {
        count++;
    };
};


