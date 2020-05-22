const arrNum = [12, 44, 456, 100, 12.34];

const getRandomNumbers = (start, end, length) => {
    let arrInt = [];
    const getMethod = (start, end) =>
        end - start > 0 ? Math.floor : Math.ceil;
        
    for (let i = 0; i < length; i++) {
        arrInt.push(getMethod(start, end)(Math.random() * start + (end - start)));
        // console.log(end - start);
    }
    return arrInt;
};

console.log(getRandomNumbers(3.4, -3.5, 8));