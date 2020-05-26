import { getMinSquaredNumber } from './getMinSquaredNumbers.js';

it('if input is empty arr', () => {
    const result = getMinSquaredNumber('');
    expect(result).toEqual(null);
});

it("if i feed its by string", () => {
    const result = getMinSquaredNumber('asdfs');
    expect(result).toEqual(null);
});

it("should get min modul num", () => {
    const result = getMinSquaredNumber([-2, 4, 5.5]);
    expect(result).toEqual(4);
});