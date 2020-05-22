const arrNum = [12, 44, 456, 100, 12.34];

const getTotalPrice = arr => {
    let sum = arr.reduce((acc, num) => {
        return acc + num;
    }, 0);
   
    return '$' + Math.floor(sum * 100) / 100;
};

console.log(getTotalPrice(arrNum));