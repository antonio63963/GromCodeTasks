function getPrimes(num) {
Primes:
    for (let i = 2; i <= num; i++) {
      
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    continue Primes;
                }                
            }
            console.log(i);
        
    }

}
console.log(getPrimes(17));