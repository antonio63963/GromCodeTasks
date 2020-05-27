let arrNum = [10, 12, 3, 5, 4];

export const increaseEvenEl = (arrNum, delta) => {
    
    if(Array.isArray(arrNum)) {
     return  arrNum.map(num => 
        num % 2 === 0 ? num + delta : num);
     } else {return   null;} 
};
console.log(increaseEvenEl(arrNum, 10));


let arrNum = [10, 12, 3, 5, 4];

export const cloneArr = (arrNum) => 
    Array.isArray(arrNum) ? [...arrNum] : null;

console.log(cloneArr(arrNum));
console.log(arrNum);

let arr = ['name', 12, true];
let arr2 = [];
  
export const transformToObject = arr => {
    let obj = {};
    arr.forEach(item => 
        obj[item] = item);
    return obj;

};

console.log(transformToObject(arr2));

const obj = {
    name: 'John',
    age: 34,
    active: true,
}

export const concatProps = obj => {
    let arr = [];
    for(let key in obj) {
        arr.push(obj[key]);
    }
    return arr;
};

console.log(concatProps(obj));