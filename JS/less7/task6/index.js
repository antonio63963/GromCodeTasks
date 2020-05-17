

let arrNum = [10, 12, 3, 5, 4];

const reverseArray = arrNum =>
    Array.isArray(arrNum) ?
    arrNum.reverse()  
    : null;

console.log(reverseArray(arrNum));