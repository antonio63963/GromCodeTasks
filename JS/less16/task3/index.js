'use strict';

const createArrayOfFunctions = (len) => {
    let arr = [];

    for(let i = 0; i < len; i++) {
        arr.push(function() { return i;});
    }
 
    return arr;
};

console.log(createArrayOfFunctions(10));
console.log(createArrayOfFunctions(10)[5]());

export default createArrayOfFunctions();