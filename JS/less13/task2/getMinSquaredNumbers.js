export const getMinSquaredNumber = arr => {
    if(Array.isArray(arr) && arr.length > 0) {
  return Math.min(...arr.map(item => 
        item**2
    ));
  } else { return null;}
};

let arr = [-12, 3, 4.45, 24];
console.log(getMinSquaredNumber());