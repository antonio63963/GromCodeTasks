const myString = 'sooooperLoooongStreeenggg';


const splitString = (string, len = 10) => {
    let resArr = [];
    let startIndex = 0;
    if (typeof string !== 'string') {
        return null;
    }
    while (true) {
        let chunk = string.substr(startIndex, len);
     
        if (chunk.length === 0) {
            break;
        }
        // пушу массив и если нужны точки - добавляю  
        resArr.push(chunk + ".".repeat(len - chunk.length));
        startIndex += len;
    }
    return resArr;
};
console.log(splitString(myString, 3));

