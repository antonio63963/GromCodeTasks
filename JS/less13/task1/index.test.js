

it('17 равно 17', () => {
    expect(17).toEqual(17);
});

it('18 не равно 17', () => {
    expect(18).not.toEqual(17);
});

const arr = [1, 2, 3, 4, 5];

const getEvenNumbers = arr => {
    return arr.filter(num =>
        num % 2 == 0);
};

it('получаем четные числа', () => {
    const result = getEvenNumbers(arr);
    expect(result).toEqual([2, 4]);
});