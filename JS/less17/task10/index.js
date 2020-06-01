'use strict';

export function bind(func, context) {
   
    return function() {func.call(context, ...arguments);};

}