'use strict';

export function bind(func, context) {
    const newFunc = func();
    return newFunc.call(context, ...arguments);

}