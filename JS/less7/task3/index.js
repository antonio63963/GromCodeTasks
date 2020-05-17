
// вариант 1
const flatArray = arr => {
    return arr.flat();
}


// вариант 2

// const flatArray = arr => {
//        return arr.reduce((acc, num) => {
//         return acc.concat(num);
//     }, []);
// };

let arr = [ 10, 3, 4, [10, 5], 6, 7];
console.log(flatArray(arr));
console.log(arr);