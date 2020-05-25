

const cleanTransactionsList = arrSum => {
    return arrSum.map(sum => '$' + parseFloat(sum).toFixed(2))
        .filter(item => !item.includes('NaN'));
};

const a = [' 345 ', '  -12 dollars', '13.6', '1.7', '1qwe', 'wqeqwe', ' ', undefined, null, true];
 
console.log(cleanTransactionsList(a));
console.log(a);