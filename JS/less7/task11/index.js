
let names = ['ann', 'bob', 'jenifer', 'antonio'];

const filterNames = (arr, text) => 
      arr.filter(name => 
        name.includes(text));


console.log(filterNames(names, 'an'));
