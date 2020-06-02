

export function bind(func, context) {
     
     const arg = arguments;
    return function() {return func.apply(context, arg);};
}
// const obj = {
//     name: 'Denny',
//     gritting(make, len) {
//         console.log(`Hi, I'm ${this.name} i ${make} my brain by ${len}`);
//     }
// };

// const a = bind(obj.gritting, {name: 'Frank'});
// a('split', 'JS');
