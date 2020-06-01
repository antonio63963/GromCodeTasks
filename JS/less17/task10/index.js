'use strict';

export function bind(func, context, arg1, arg2, [argn]) {
    return func.call(context, arg1, arg2, ...[argn]);

}