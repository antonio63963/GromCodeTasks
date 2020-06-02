

export function bind(func, context) {
     
    let arg = [];
    for(let i = 2; i < arguments.length; i++) {
       arg.push(arguments[i]);
    }
    console.log(arg);
   function newFunc(func, context, arg) {
        func.apply(context, arg);
    }
    return newFunc(func, context, arg);
}
const obj = {
    name: 'Denny',
    gritting(make, len) {
        console.log(`Hi, I'm ${this.name} i ${make} my brain by ${len}`);
    }
};
const obj2 = {
    name: 'SHmeny',
    
};


 bind(obj.gritting, {name: 'Frank'}, 'split', 'JS');

// a.call(obj2);
// a.bind({name: 'Misha'}, 'saddad', 'rrwerwer');
