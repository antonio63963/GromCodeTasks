let myString = 'mySuperText';

const splitText = (text, len) => {
    let resArr = [];
    
    let amount = !Number.isNaN(len) && typeof len === 'undefined' ?  10 : len;
    let count = 0;
    if (typeof text === 'string') {
        while (true) {
            let chunk = text.substr(count, amount);
            if (chunk.length === 0) {
                break;
            }
            resArr.push(chunk[0].toUpperCase() + chunk.slice(1));
            count += amount;
            // console.log(chunk);
            // console.log(resArr);
        }
    } else {
        return null;
    }
    return resArr.join('\n');
};

console.log(splitText('ewrqwerqewrrqwr'));