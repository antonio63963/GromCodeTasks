'use strict';

export function bind(func, context, arg1, arg2) {
    return func.call(context.apply(bind), arg1, arg2);

}