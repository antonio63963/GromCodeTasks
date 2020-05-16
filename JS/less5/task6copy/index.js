// function getPrimes(num) {
//     Primes: for (let i = 2; i <= num; i++) {

//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 continue Primes;
//             }
//         }
//         console.log(i);

//     }

// }
// console.log(getPrimes(17));
function isPrimeNum(num) {
    let rightNum = true;
    for (let j = 2; j < num; j++) {
        if (num % j == 0) {
            rightNum = false;
            continue;
        }
    }
    if (rightNum === true) {
        // console.log(num);
        return num;
    }
}

// let num = isPrimeNum(15);
// console.log(num);

function getPrimes(num) {
    for (let i = 4; i <= num; i++) {
        if (typeof isPrimeNum(i) !== 'undefined') {
            console.log(isPrimeNum(i));
        }
    }
}

getPrimes(20);