
 function bind(func, context) {
   
   const[fn, cont, ...args] = arguments;
    
    return function() {
        const [...argsFn] = arguments;
        return fn.apply(cont, args.concat(argsFn));
    };
}


