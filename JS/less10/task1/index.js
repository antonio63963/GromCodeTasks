// const arr = [12, 4.12, 3, 99.01, true, undefined, NaN, 'test', '123', null];

const getFiniteNumbers = arr =>
    arr.filter(num => Number.isFinite(num));

const getFiniteNumbersV2 = arr =>
    arr.filter(num => isFinite(num));

const getNaN = arr =>
    arr.filter(num => Number.isNaN(num));

const getNaNV2 = arr =>
    arr.filter(num => isNaN(num));

const getIntengers = arr =>
    arr.filter(num => Number.isInteger(num));


// console.log(getFiniteNumbers(arr));
// console.log(getFiniteNumbersV2(arr));
// console.log(getNaN(arr));
// console.log(getNaNV2(arr));
// console.log(getIntengers(arr));
// console.log(arr);