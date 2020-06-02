

export function bind(func, context) {
     
    let arg = [];
    for(let i = 2; i < arguments.length; i++) {
       arg.push(arguments[i]);
    }
   
    console.log(arg);
    return function() {
       
        return func.apply(context, arg);
    };
}
const obj = {
    name: 'Denny',
    gritting(make, len) {
        console.log(`Hi, I'm ${this.name} i ${make} my brain by ${len}`);
    }
};

const a = bind(obj.gritting, {name: 'Frank'}, 'split', 'JS');
a();
a('fg', 'c==');
