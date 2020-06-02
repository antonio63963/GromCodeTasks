

export function bind(func, context) {
     
    let arg = [];
    for(let i = 2; i < arguments.length; i++) {
       arg.push(arguments[i]);
    }
   
    console.log(arg);
    return function() {
       
         func.apply(context, arg);
    };
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


const a = bind(obj.gritting, {name: 'Frank'}, 'split', 'JS');
a();
a.call(obj2);
a.bind({name: 'Misha'}, 'saddad', 'rrwerwer');
