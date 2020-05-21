const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54,
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17,
    },
    'customer-id-3': {
        name: 'Frank',
        age: 30,
    }
};
console.log(customers);

const getCustomersList = obj => 
     Object.entries({...obj})
    .map(elem => {
        let copyElem = Object.assign({}, elem[1]);
        copyElem.id = elem[0];
        return copyElem;
    })   
    .sort((a, b) => a.age - b.age);
    


// console.log(getCustomersList(customers));
console.log(getCustomersList(customers));
console.log(customers);