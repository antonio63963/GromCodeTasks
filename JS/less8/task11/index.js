const keyList = ['name', 'active'];
const userCard = {
  name: "Bob",
  status: 'manager',
  active: true,
  age: 23,
};

const pickProps = (keyList, userObj) => {
  let resultObj = {};
  const keyArr = Object.keys(userObj);

  keyList.forEach(key => {
    if (keyArr.indexOf(key) !== -1) {
      resultObj[key] = userObj[key];
    }
  });
  
  return resultObj;
};



console.log(pickProps(keyList, userCard));