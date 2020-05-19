const addPropertyV1 = (userData, userid) => {
  userData.id = userid;
  return userData;
}

const addPropertyV2 = (userData, userid) => {
Object.assign(userData, userid);
return userData;
};

const addPropertyV3 = (userData, userid) => {
Object.assign({}, userData, userid);
return userData;
};

const addPropertyV4 = (userData, userid) => {

return [...userData];
};

const obj = {
  name: 'jeen',
  age: 999,
};

console.log(addPropertyV1(obj, 123));
console.log(addPropertyV2(obj, 123));
console.log(addPropertyV3(obj, 123));
console.log(addPropertyV4(obj, 123));