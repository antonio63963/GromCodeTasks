

const flatArray = arr => {
    return arr.flat();
}


let arr = [ 10, 3, 4, [10, 5], 6, 7];

// const flatArray = arr => {
//        return arr.reduce((acc, num) => {
//         return acc.concat(num);
//     }, []);
// };
console.log(flatArray(arr));
console.log(arr);