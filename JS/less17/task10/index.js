'use strict';

export function bind(func, context, arg1, arg2) {
    const newFunc = func;
    return newFunc.call(context, arg1, arg2);

}