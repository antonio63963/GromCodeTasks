

export function bind(func, context) {
    return function(...arguments) {return func.call(context);};
}
// const obj = {
//     name: 'Denny',
//     gritting(make, len) {
//         console.log(`Hi, I'm ${this.name} i ${make} my brain by ${len}`);
//     }
// };

// const a = bind(obj.gritting, {name: 'Frank'});
// a('split', 'JS');
