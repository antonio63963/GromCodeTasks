// let arr = [10, 2, 3, 4];
function checker(arr) {
    let sum = 0;
    if (Array.isArray(arr)) {
       for(let i of arr) {
           sum += i;
       }
       if(sum > 1000) {
           return true;
       } else { return false;}
    } else {
        return null;
    }
}

// let newArr = reverseArray(arr);
// console.log(newArr);
// console.log(arr);