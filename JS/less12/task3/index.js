

const cleanTransactionsList = arrSum => {
    return arrSum.map(sum => parseFloat(sum));
};

const a = [' 345 ', '  -12 dollars', '13.6', '1.7'];
 
console.log(cleanTransactionsList(a).join(','));