let obj1 = {
  name: 'jeen',
  age: 999,
  isMarried: false,
  country: "Ukraine",
};

let obj2 = {
  name: 'John',
  status: 'active',
  country: 'Ukraine',
  isMarried: true,
  age: 999,
};

let obj3 = {
  age: 999,
  name: 'jeen',
  country: "Ukraine",
  isMarried: false,
};

const compareObjects = (obj1, obj2) => {
  let coloneArr1 = Object.keys(obj1);
  let coloneArr2 = Object.keys(obj2);

  if (coloneArr1.length == coloneArr2.length) {
    for (let p of coloneArr1) {
      return coloneArr2.indexOf(p) !== -1 &&
        obj1[p] == obj2[p] ? true : false;
    }
  } else { return false;}
}

console.log(compareObjects(obj1, obj3));