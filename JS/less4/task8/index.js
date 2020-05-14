let bigNum = 0; 

for(let i = 1; i <= 1000; i++) {
    bigNum += i;
}

console.log(bigNum);
let a = Math.trunc(bigNum / 1234);
let b = bigNum % 1234;
// console.log(a);
// console.log(b);

console.log(a > b);