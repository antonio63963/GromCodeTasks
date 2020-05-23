let myString = 'mySuperText';

const splitText = (text, amount) => {
    let resArr = [];
    let count = 0;
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
    return resArr.join('\n');
};

console.log(splitText(myString, 4));