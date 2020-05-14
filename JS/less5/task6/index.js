function getPrimes(num) {
    
    for(let i = 2; i <= num; i++) {
        if(i % i === 0) {
            console.log(i);
        } else {
            continue;
        }
    }
    
}

