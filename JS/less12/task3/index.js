

const cleanTransactionsList = arrSum => {
    return arrSum.map(sum => '$' + parseFloat(sum).toFixed(2));
};

const a = [' 345 ', '  -12 dollars', '13.6', '1.7', '1qwe'];
 
console.log(cleanTransactionsList(a));
console.log(a);