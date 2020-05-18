
let names = ['ann', 'bob', 'jenifer', 'antonio'];

const filterNames = (arr, text) => 
      arr.filter(name => 
        name.includes(text) && name.length > 5);


console.log(filterNames(names, 'an'));
