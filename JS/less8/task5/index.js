
const getKeys = obj => 
  Object.keys(obj).forEach(el =>
    console.log(el)
    );
   


const obj ={
  name: 'bob',
  age: 24,
  active: false,
}

getKeys(obj);

 