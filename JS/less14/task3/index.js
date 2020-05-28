'use strict';

let memory = 0;
export const add = num => memory = memory + num;
export const decrease = num => memory = memory - num;
export const reset = () => memory = 0;
export const getMemo = () => memory;