let arrNum = [10, 12, 3, 5, 4]

const squareArray = arrNum => {
    
   return Array.isArray ?
     arrNum.map(num => num**2)
    : null;
}

console.log(squareArray(arrNum));
