
const sortDesc = arr => {
    const copyArr = arr.slice();
    return copyArr.sort((a, b) => b - a);
}

let arr = [10, 66, 34, 5, 43, 11, 124];
console.log(sortDesc(arr));
console.log(arr);