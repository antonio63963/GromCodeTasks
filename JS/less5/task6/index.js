function getPrimes(num) {
    
    for(let i = 2; i <= num; i++) {
        if(i % i === 0 && i % 1 === 0 && Math.sign(i) === 1) {
            console.log(i);
            // console.log(Math.sign(i));
        } else {
            continue;
        }
    }
    
}
// console.log(getPrimes(10));

