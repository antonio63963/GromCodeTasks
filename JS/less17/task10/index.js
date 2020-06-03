
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


function bind(func, context) {
     
    // let arg = [];
    // for(let i = 2; i < arguments.length; i++) {
    //    arg.push(arguments[i]);
    // }
   
    // console.log(arg);
    return function() {
        const [...args] = arguments;
       
        return func.apply(context, args);
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
const b = bind(obj.sum, {name: 'Misha'});
b(3, 9);
