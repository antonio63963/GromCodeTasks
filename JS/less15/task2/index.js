'use strict';


export function createCalculator() {
    let memory = 0;
    const add = num => memory += num;
    const decrease = num => memory -= num;
    const reset = num => memory = 0;
    const getMemo = () => memory;
    return {
        add,
        decrease,
        reset,
        getMemo,
    };
}

// let calc1 = createCalculator();
// let calc2 = createCalculator();
// console.log(calc1.add(10));
// console.log(calc1.decrease(-5));

// console.log(calc2.decrease(-50));
// console.log(calc2.decrease(5));



