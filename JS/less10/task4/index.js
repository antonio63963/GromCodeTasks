

const arrNum = [-12, 44, -456, 100, -12.34, '-23.5'];

const getMaxAbsoluteNumber = arr => {
    
    if(Array.isArray(arr) && arr.length > 0) {
    const absArr = arr.map(num => Math.abs(num));
    return Math.max(...absArr);
    } else { return null;}
    
};

console.log(getMaxAbsoluteNumber(arrNum));