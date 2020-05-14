function getSum(numStart, numEnd) {
    let evenNum = 0;
    for(let i = numStart; i <= numEnd; i++) {
        if(i % 2 === 0) {
            evenNum += i;
        } else {
            continue;
        }
    }
    return evenNum;
}

// console.log(getSum(10, 20));