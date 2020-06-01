'use strict';

export function bind(func, context) {
   
    return () => func.call(context.bind(bind), ...arguments);

}