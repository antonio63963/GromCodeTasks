const addPropertyV1 = (userData, userid) => {
  userData.id = userid;
  return userData;
}

const addPropertyV2 = (userData, userid) => {
userData = Object.assign(userData, {id: userid});
return userData;
};

const addPropertyV3 = (userData, userid) => {
  return Object.assign({}, userData, {id: userid});
 
};

const addPropertyV4 = (userData, userid) => {

return {...userData, ...{id: userid,}};
};

const obj = {
  name: 'jeen',
  age: 999,
};

// console.log(addPropertyV1(obj, 123));
// console.log(addPropertyV2(obj, 123));
console.log(addPropertyV3(obj, 123));
console.log(obj);
// console.log(addPropertyV4(obj, 123));