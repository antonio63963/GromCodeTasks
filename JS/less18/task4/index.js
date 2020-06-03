'use strict';


export function saveCalls(fn) {

    let calls = [];
    function withMemory() {
        calls.push([...arguments]);
        return  fn.call(this, arguments);
    }
    withMemory.calls = calls;
    return withMemory;
}

function test(a, b) {
    return a + b;
}
const user = {
    name:"John",
    sayHi() {
        return this.name;
    }
};

const testWithMemory = saveCalls(test);
testWithMemory(4, 5);
testWithMemory(10, 3);
console.log(testWithMemory.calls);

const methodWithMemory = saveCalls(user.sayHi);
methodWithMemory.call({name: 'Bob'}, 23);
console.log(methodWithMemory.calls);