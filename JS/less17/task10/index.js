'use strict';

export function bind(func, context) {
   const newFun = func.call(context, ...arguments);
    return newFun();

}