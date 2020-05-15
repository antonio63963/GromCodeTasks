// let arr = [10, 2, 3, 4];
function increaseEvenEl(arr, delta) {
    let newIncreaseArr = [];
    if(Array.isArray(arr)) {
        for(let i of arr) {
            if(i % 2 === 0) {

                newIncreaseArr.push(i + delta);
            }
        }
        return newIncreaseArr;
    } else { return null;}
}

// let newArr = squareArray(arr);
// console.log(newArr);s