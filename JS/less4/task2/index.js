const m = 1;
const n = 10;
let result = 1;

for(let i = m; i <= n; i++){
    if(i % 2 == 0) {
        continue;
    }
    result *= i;
}
console.log('Result: ' + result);
