'use strict';

function saveCalls(fn) {
   let calls = [];
   return function withMemory() {
       calls.push([...arguments]);
       
       console.log(calls);
     return  fn.call(null, arguments);
   };
    
}

function test(a, b) {
    return a + b;
}

const testWithMemory = saveCalls(test);
testWithMemory(4, 5);
testWithMemory(10, 3);
console.log(testWithMemory.calls);