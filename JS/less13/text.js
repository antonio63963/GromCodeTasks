export const getSquareArray = arr =>
arr.map(num => num**2);

export const getOddNumbers = arr =>
arr.filter(item => item %2 == 1);

export default (a, b) =>
a + b;



import getSum, {
    getSquareArray,
    getOddNumbers
} from './calculator.js';

it('should get squared num', ()=> {
    const result = getSquareArray([1, 2, 3]);
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