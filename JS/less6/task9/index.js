// let arr = [10, 2, 3, 4];
function reverseArray(arr) {
    if (Array.isArray(arr)) {
        let [...newArr] = arr;
        return newArr.reverse();
    } else {
        return null;
    }
}

// let newArr = reverseArray(arr);
// console.log(newArr);
// console.log(arr);