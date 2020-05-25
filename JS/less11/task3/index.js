const myString = 'sooooperLoooongStreeenggg';

// const splitString = (string, len = 10) => {
//     let resArr = [];
//     let startIndex = 0;
//     if (typeof string !== 'string') {
//         return null;
//     }
//     while (true) {
//         let chunk = string.substr(startIndex, len);
//         //вычисляю колличество точек
//         let dots = (chunk, len) => {
//             if (len - chunk.length < 10) {
//                 return ".".repeat(len - chunk.length);
//             }
//         };
//         if (chunk.length === 0) {
//             break;
//         }

//         // пушу массив и если нужны точки - добавляю  
//         resArr.push(chunk[0].toUpperCase() + chunk.slice(1) + dots(chunk, len));
//         startIndex += len;
//     }
//     return resArr;
// };

// const dotsAmount = num =>
//     console.log(".".repeat(num));

// f(20);
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
        resArr.push(chunk[0].toUpperCase() + chunk.slice(1) + ".".repeat(len - chunk.length));
        startIndex += len;
    }
    return resArr;
};
console.log(splitString(myString, 3));