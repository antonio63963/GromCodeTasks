

let arrNum = [10, 12, 3, 5, 4];

const cloneArr = (arrNum) => 
    Array.isArray(arrNum) ? [...arrNum] : null;

console.log(cloneArr(arrNum));
console.log(arrNum);