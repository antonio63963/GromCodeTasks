const addPropertyV1 = (obj, userid) => {
  obj.id = userid;
  return obj;
}

const addPropertyV2 = (obj, userid) => {
Object.assign(obj, userid);
return obj;
};

const addPropertyV3 = (obj, userid) => {
Object.assign({}, obj, userid);
return obj;
};

const addPropertyV4 = (obj, userid) => {

return [...obj];
};

const obj = {
  name: 'jeen',
  age: 999,
};

console.log(addPropertyV1(obj, 123));
console.log(addPropertyV2(obj, 123));
console.log(addPropertyV3(obj, 123));
console.log(addPropertyV4(obj, 123));