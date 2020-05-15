
function getSpecialNumbers(m, n) {
    let numArr= [];
    for(let i = m; i < n; i++) {
        if(i % 3 === 0) {
            numArr.push(i);
        }
    }
    return numArr;
}

// let a = getSpecialNumbers(10, 20);
// console.log(a);