let arr = [10, 11, 20, -10, -1];

const sum = arr => {
    return arr.reduce((acc, item) => {
        return acc + item;
    }, 0);
}


console.log(sum(arr));