
let obj1 = {
  name: 'jeen',
  age: 999,
  isMarried: false,
};

let obj2 = {
  name: 'John',
  status: 'active',
  country: 'Ukraine',
  isMarried: true,
};

const mergeObjectsV1 = (obj1, obj2) => {
  return Object.assign(obj1, obj2,);
};

const mergeObjectsV2 = (obj1, obj2) => {
  return Object.assign(obj2, obj1,);
};

const mergeObjectsV4 = (obj1, obj2) => {
  return {...obj2, ...obj1};
};

const mergeObjectsV3 = (obj1, obj2) => {
  return {...obj1, ...obj2};
};



// console.log(mergeObjectsV1(obj1, obj2));
// console.log(mergeObjectsV2(obj1, obj2));
// console.log(mergeObjectsV3(obj1, obj2));
// console.log(mergeObjectsV4(obj1, obj2));
// console.log(obj1);
