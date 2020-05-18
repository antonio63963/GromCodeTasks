let arr = ['name', 12, true];
let arr2 = [];
  
const transformToObject = arr => {
    let obj = {};
    arr.forEach(item => 
        obj[item] = item);
    return obj;

};

console.log(transformToObject(arr2));