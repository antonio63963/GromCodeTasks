

const cleanTransactionsList = arrSum => {
    return arrSum.map(sum => parseFloat(sum))
        .filter(item => !Number.isNaN(item))
        .map(item => '$' + item.toFixed(2));
};

const a = [' 345 ', '  -12 dollars', '13.6', '1.7', '1qwe', 'wqeqwe', ' ', undefined, null, true];
 
console.log(cleanTransactionsList(a));
console.log(a);

