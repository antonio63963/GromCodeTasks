
const keyList = ['name', 'age', 'status', 'active'];
const valueList = ['bob', 34, 'manager', true];

const buildObject = (keyList, valueList) => {
  let newObj ={};
  if(keyList.length == valueList.length) {
    keyList.reduce((acc, elem, index) => {
      newObj[elem] = valueList[index];
    },0 );
  } 
  return newObj;
};

console.log(buildObject(keyList, valueList));
