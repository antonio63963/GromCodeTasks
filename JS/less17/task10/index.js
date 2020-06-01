'use strict';

export function bind(func, context) {
   
    return () => func.call(context.apply(bind), ...arguments);

}