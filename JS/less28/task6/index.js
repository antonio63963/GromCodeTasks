

export const maxFibonacci = (num) => {
    let first = 0;
    let second = 1;
    let midle;

    while(second < num) {
        midle = second;
        second += first;
        first = midle;
    }
    return second > num ? first : second;
  
};

// console.log(maxFibonacci(100))
