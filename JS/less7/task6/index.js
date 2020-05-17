let arrNum = [10, 12, 3, 5, 4];

const reverseArray = arrNum => {
    let reverse = arrNum.slice();
    if(Array.isArray(arrNum)) {
     return  reverse.reverse();
     } else {return   null;} 
};
console.log(reverseArray(arrNum));