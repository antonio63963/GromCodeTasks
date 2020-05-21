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

const getCustomersList = obj => 
     Object.entries({...obj})
    .map(elem => {
        elem[1].id = elem[0];
        return elem[1];
    })   
    .sort((a, b) => a.age - b.age);
    


// console.log(getCustomersList(customers));
console.log(getCustomersList(customers));