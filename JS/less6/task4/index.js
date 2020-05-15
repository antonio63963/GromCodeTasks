// let numArr = [ 10, 22, 44, 54, 45];
function swap(arr) {
    const [firstElem, ...rest] = arr;
    return [...rest, firstElem];
}

// let newArr = swap(numArr);
// console.log(newArr);
// console.log(numArr);