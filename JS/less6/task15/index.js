
function includes(arrNum, num) {
    let result = false;
    for(let i of arrNum) {
        if(i == num) { 
            result = true; 
        }
    }
    return result;
}

// let arr = [10, 33, 45, 53];
// let n = 13;
// console.log(includes(arr, n));