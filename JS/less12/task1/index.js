let a = '3 + 4';

const calc = expression => {
    const [a, operator, b] = expression.split(' ');
    let result;

    switch (operator) {
        case '+':
            result = Number(a) + Number(b);
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }
    return `${a} ${operator} ${b} = ${result}`;
};

console.log(calc('8 / 2'));