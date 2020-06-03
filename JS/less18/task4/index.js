'use strict';


function saveCalls(fn) {

    let calls = [];
    function withMemory() {
        calls.push([...arguments]);
        return fn.call(null, arguments);
    }
    withMemory.calls = calls;
    return withMemory;
}

function test(a, b) {
    return a + b;
}

const testWithMemory = saveCalls(test);
testWithMemory(4, 5);
testWithMemory(10, 3);
console.log(testWithMemory.calls);