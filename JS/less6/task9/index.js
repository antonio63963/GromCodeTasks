// let arr = [10, 2, 3, 4];
function reverseArray(arr) {
    let [...newArr] = arr;
       if(Array.isArray(newArr)) {
       return newArr.reverse();
    } else { return null;}
}

// let newArr = reverseArray(arr);
// console.log(newArr);
// console.log(arr);