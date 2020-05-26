import { calc } from './calculator.js';

it('should get plus operation', () => {
    let result = calc('5 + 3');
    expect(result).toEqual('5 + 3 = 8');
});

it('should get minus operation', () => {
    let result = calc('5 - 3');
    expect(result).toEqual('5 - 3 = 2');
});

it('should get myltiply operation', () => {
    let result = calc('5 * 3');
    expect(result).toEqual('5 * 3 = 15');
});

it('should get division operation', () => {
    let result = calc('6 / 3');
    expect(result).toEqual('6 / 3 = 2');
});

it('should get null if comes not a string', () => {
    let result = calc(3+5);
    expect(result).toEqual(null);
});