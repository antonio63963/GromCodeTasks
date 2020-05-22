

const getRandomNumbers = (length, start, end ) => {
    let arrInt = [];
//выбираю метод для округления
    const getMethod = (start, end) =>
        end - start < 1 ? Math.floor : Math.ceil;
// создаю массив целых чисел 
    for (let i = 0; i < length; i++) {
        arrInt.push(getMethod(start, end)(Math.random() * (end - start) + start));
        console.log(end - start);
    }
    // проверяю, на всякий случай - вдруг Округлятор не округлил!
  
    arrInt.forEach(item => {
        if(!Number.isInteger(item)) {
            arrInt = null;
        } 
    });
    return arrInt;
    
};

console.log(getRandomNumbers(10, 2, 20));