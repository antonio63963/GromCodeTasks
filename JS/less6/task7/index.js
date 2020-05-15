// let arr = [10, 2, 3, 4];
function checkSum(numArr) {
    let sum = 0;
    for(let i of numArr) {
        sum += i;
    }
    if(sum > 100) {
        return true;
    } else {
        return false;
    }
    
}

// let newArr = squareArray(arr);
// console.log(newArr);