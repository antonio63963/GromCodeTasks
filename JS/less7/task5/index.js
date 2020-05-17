let arrNum = [10, 12, 3, 5, 4]

const squareArray = arrNum =>
    Array.isArray(arrNum) ?
    arrNum.map(num => num ** 2) 
    : null;
    


console.log(squareArray(1));