let arrNum = [10, 12, 3, 5, 4];

const increaseEvenEl = (arrNum, delta) => {
    
    if(Array.isArray(arrNum)) {
     return  arrNum.map(num => 
        num % 2 === 0 ? num + delta : num);
     } else {return   null;} 
};
console.log(increaseEvenEl(arrNum, 10));