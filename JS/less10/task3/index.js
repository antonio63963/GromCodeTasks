let num = 12.1654;

const multyRound = num => [
    Math.floor(num * 100)/100, 
    Math.round(num * 100)/100,
    Math.ceil(num * 100)/100,
    Math.trunc(num),
    Number(num.toFixed(2))
   
];

console.log(multyRound(num));