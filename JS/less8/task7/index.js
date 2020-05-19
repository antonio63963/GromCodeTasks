const addPropertyV1 = (obj, key, value) => {
  obj[key] = value;
  return obj;
}

const addPropertyV2 = (obj, key, value) => {
userData = Object.assign(obj, {[key]:value});
return userData;
};

const addPropertyV3 = (obj, key, value) => {
  return Object.assign({}, obj, {[key]: value,});
 
};

const addPropertyV4 = (obj, key, value) => {

return {...obj, ...{[key]: value,}};
};

const obj = {
  name: 'jeen',
  age: 999,
};

// console.log(addPropertyV1(obj, 123));
// console.log(addPropertyV2(obj, 'status', true));
// console.log(addPropertyV3(obj, 123));
console.log(obj);
console.log(addPropertyV4(obj, 123));