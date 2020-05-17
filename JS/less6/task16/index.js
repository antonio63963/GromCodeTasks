function removeDuplicates(arrNum) {

    if (Array.isArray(arrNum)) {
        const filterResult = new Set(arrNum);
        const newArr = [...filterResult];
        return newArr;
    }
}

let arr = [10, 33, 45, 53, 33, 23, 33, 23, 33, 53, 53, 53, 33];
// let n = 13;
console.log(removeDuplicates(arr));