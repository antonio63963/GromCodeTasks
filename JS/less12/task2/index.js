

const reverseString = string => {
    if(typeof string !== 'string') {
        return null;
    } else {
    let arrString = string.split('');
    return arrString.reverse().join('');
    }
};

console.log(revrseString('32 437'));