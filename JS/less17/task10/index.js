
export function bind(func, context) {
   
   const[fn, cont, ...args] = arguments;
    
    return function() {
       
        return fn.apply(cont, args.concat([...arguments]));
    };
}


