// const add2 = value => value + 2;
// const square = value => value **2;
// const half = value => value / 2;


export const compose = (...funcs) => value => {
  return  funcs.reduce((acc, func) => 
       { return func(acc)}, value
    );
};

// const superFunc = compose(add2, square, half);
// console.log(superFunc(2));