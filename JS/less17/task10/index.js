
 function bind(func, context) {
   
   const[fn, cont, ...args] = arguments;
    // console.log(arg);
    return function() {
        const [...argsFn] = arguments;
       
        return func.apply(context, args.concat(argsFn));
    };
}
const obj = {
    name: 'Denny',
    sum(a, b) {
        const c = a + b;
        console.log(`${this.name}  made a new function  ${c}`);
    }
};
const obj2 = {
    name: 'SHmeny',
    
};


const a = bind(obj.sum, {name: 'Frank'});
a(2, 8);
a.call(obj2, 5, 15);
a.bind({name: 'Misha'}, 'saddad', 'dfsfsf');
const b = bind(obj.sum, {name: 'Misha'}, 3, 9);
b();


