const keyList = ['name', 'active', 'merried'];
const wtf = ['dede', 'fdf'];
const userCard = {
  name: "Bob",
  status: 'manager',
  active: true,
  age: 23,
};

const pickProps = (userObj, keyList) => {
  let resultObj = {};
  const keyArr = Object.keys(userObj);

  keyList.forEach(key => {
    if (keyArr.indexOf(key) !== -1) {
      resultObj[key] = userObj[key];
    }
  });

  return resultObj;
};



console.log(pickProps(userCard, keyList));
console.log(userCard);
console.log(pickProps(userCard, wtf));