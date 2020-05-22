const arrNum = [12, 44, 456, 100, 12.34];

const getRandomNumbers = (length, start, end ) => {
    let arrInt = [];
    const getMethod = (start, end) =>
        end - start > 0 ? Math.floor : Math.ceil;

    for (let i = 0; i < length; i++) {
        arrInt.push(getMethod(start, end)(Math.random() * (end - start) + start));
        // console.log(end - start);
    }
    return arrInt;
};

console.log(getRandomNumbers(8, 3.4, -3.5));