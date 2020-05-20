const people = {
  'joe': 19,
  'Nik': 17,
  'Ann': 20,
  'Rick': 14,
  'Martin': 22,
  'Julie': 30,
  'frank': 18,
};

const getAdults = obj => {
  let resultObj = {};
  const keysArr = Object.keys(obj);
  
  keysArr.forEach(item => {
    if(people[item] >= 18) {
      resultObj[item] = people[item];
    }
  });
  return resultObj;
};

console.log(getAdults(people));