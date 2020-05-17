// function removeDuplicates(arrNum) {

//     if (Array.isArray(arrNum)) {
//         const filterResult = new Set(arrNum);
//         const newArr = [...filterResult];
//         return newArr;
//     }
// }

function removeDuplicates(arrNum) {

    let newArr = [];
    if (Array.isArray(arrNum)) {
        let index;
        let checkigArr= [];
       for(let i = 0; i < arrNum.length; i=0) {
            index= arrNum[i];
            arrNum.splice(i, 1);
            for(let j of arrNum) {
                if(j === index) {
                    checkigArr.push(arrNum[i]);
                } else {continue;}
            }
            if(checkigArr.length === 0) {
                newArr.push(index);
            } else {
                checkigArr.splice(0, checkigArr.length);
                continue;
            }
       }
    }
    return newArr;
}

// let arr = [10, 33, 45, 53, 33, 23, 33, 23, 33, 53, 53, 53, 33];
// // let n = 13;
// console.log(removeDuplicates(arr));