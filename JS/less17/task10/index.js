'use strict';

export function bind(func, context) {
    const newFunc = func.call(context, ...[arguments]);
    return newFunc;

}