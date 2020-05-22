
const arr = ['12px', '45"', '35 sm', 'text', null, undefined, NaN, '45.34m', '76.04  deg'];

const getParsedIntegers = arr => 
arr.map(elem => Number.parseInt(elem));

const getParsedIntegersV2 = arr => 
arr.map(elem => parseInt(elem));

const getParsedFloats = arr => 
arr.map(elem => Number.parseFloat(elem));

const getParsedFloatsV2 = arr => 
arr.map(elem => parseFloat(elem));


console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));


console.log(arr);