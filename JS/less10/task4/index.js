

const arrNum = [-12, 44, -456, 100, -12.34, '-23.5'];

const getMaxAbsoluteNumber = arr => {
    const absArr = arr.map(num => Math.abs(num));
    return Math.max(...absArr);
};

console.log(getMaxAbsoluteNumber(arrNum));