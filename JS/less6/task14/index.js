
function getSubArray(arr, num) {
    let subArr = [];
    for(let i = 0; i <= num -1; i++) {
        subArr.push(arr[i]);
    }
    return subArr;
}

let arr = [10, 3, 56, 66];
console.log(getSubArray(arr, 3));