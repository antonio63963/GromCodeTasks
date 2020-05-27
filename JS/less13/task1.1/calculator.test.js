import getSum, {
    getSquaredArray,
    getOddNumbers
} from './calculator.js';

it('should get squared num', ()=> {
    const result = getSquaredArray([1, 2, 3]);
    expect(result).toEqual([1, 4, 9]);
});

it('should get odd nums', () => {
    const result = getOddNumbers([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 3, 5]);
});

it('should get sum of numbers', () => {
    let result = getSum(10, 5);
    expect(result).toEqual(15);
});