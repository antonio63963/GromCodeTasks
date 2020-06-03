
// export function bind(func, context) {
//     // обрезаем ненужные аргументы (функцию и контекст)
//    let bindArgs = [].slice.call(arguments, 2);
 
//     return function() {
//       // здесь все аргументы будут необходимы
//       let fnArgs = [].slice.call(arguments);
   
//       // собираем все 
//       return func.apply(context, bindArgs.concat(fnArgs));
//     };
//   };


function bind() {
     
    // let arg = [];
    // for(let i = 2; i < arguments.length; i++) {
    //    arg.push(arguments[i]);
    // }
   
    // console.log(arg);
    const [fn, cont, ...args] = arguments;
    return function() {
       
        return fn.apply(cont, args);
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


const a = bind(obj.sum, {name: 'Frank'}, 2, 8);
a(2, 8);
a.call(obj2);
a.bind({name: 'Misha'}, 'saddad', 'dfsfsf');
const b = obj.sum.bind({name: 'Misha'}, 3, 9);
b();
b.bind({ name: 'Sasha'});
b();