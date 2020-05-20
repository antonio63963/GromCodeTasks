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

let obj4 = {
  age: 1,
  name: 'jeen',
  country: "Ukraine",
  isMarried: false,
};


const compareObjects = (obj1, obj2) => {
  let coloneArr1 = Object.keys(obj1);
  let coloneArr2 = Object.keys(obj2);
  let trueFalseArr = [];

  if (coloneArr1.length == coloneArr2.length) {
    for (let p of coloneArr1) {
      console.log(obj1[p], '  ', obj2[p]);
      trueFalseArr.push(coloneArr2.indexOf(p) !== -1 &&
        obj1[p] === obj2[p]);
    }
  } else { return false;}
  console.log(trueFalseArr);

  return trueFalseArr.indexOf(false) == -1; 
};

console.log(compareObjects(obj1, obj4));

// let arrW = [ true, false, true, true ];
// console.log(arrW.indexOf(false));