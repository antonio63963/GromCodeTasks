const getRandomNumbers = (length, start, end) => {
    let arrInt = [];
    //выбираю метод для округления
    const getMethod = (start, end) =>
        end - start < 1 ? Math.floor : Math.ceil;
    // создаю массив целых чисел 
    if (end - start < 1 && end - start > -1) {
        return null;
    } else {
        for (let i = 0; i < length; i++) {
            arrInt.push(getMethod(start, end)(Math.random() * (end - start) + start));
            console.log(end - start);
        }
        return arrInt;
    }
    // проверяю, на всякий случай - вдруг Округлятор не округлил!

    // arrInt.forEach(item => {
    //     if(Number.isInteger(item)) {
    //       return  arrInt ;
    //     } else { return null}
    // });

};

console.log(getRandomNumbers(10, 30, 30.5));