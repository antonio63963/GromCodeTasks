const obj = {
    name: 'John',
    age: 34,
    active: true,
}

const concatProps = obj => {
    let arr = [];
    for(let key in obj) {
        arr.push(obj[key]);
    }
    return arr;
};

console.log(concatProps(obj));
 