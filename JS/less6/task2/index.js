
function getSum(arrNum) {
    let sum = 0;
    if(Array.isArray(arrNum)) {
       for(let i of arrNum) {
           sum += i;
       }
       return sum;
    } else {return null;}
}