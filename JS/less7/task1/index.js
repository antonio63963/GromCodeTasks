let numArr = [1, 2, 3, 4, 5, 6, 7];

const getSpecialNumbers = arr => 
    arr.filter(item => item % 3 === 0);


let sortArr = getSpecialNumbers(numArr);
console.log(sortArr);