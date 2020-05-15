// let arr = [10, 2, 3, 4];
function squareArray(numArr) {
    let squareArray = [];
    if(Array.isArray(numArr)) {
        for(let i of numArr) {
            squareArray.push(i**2);
        }
        return squareArray;
    } else { return null;}
}

// let newArr = squareArray(arr);
// console.log(newArr);