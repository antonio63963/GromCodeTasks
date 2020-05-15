// let arr = [10, 2, 3, 4];
function cloneArray(arr) {
    if (Array.isArray(arr)) {
        let [...newArr] = arr;
        return newArr;
    } else {
        return null;
    }
}

// let newArr = reverseArray(arr);
// console.log(newArr);
// console.log(arr);