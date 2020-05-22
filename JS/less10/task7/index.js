
let num = 12.1536;

const superRound = (num, amount) => {
    const tail = 10**amount;
    
   return [
        Math.floor(num * tail) / tail,
        Math.round(num * tail) /tail,
        Math.ceil(num * tail) / tail,
        Math.trunc(num * tail) / tail,
        Number(num.toFixed(amount))
    ];
};

console.log(superRound(num, 4));

