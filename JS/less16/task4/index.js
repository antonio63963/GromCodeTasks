'use strict';
console.log(foo);
var foo = 1; 
console.log(foo);
function bar() { 
    if (!foo) { 
        let foo = 10; 
    } 

    return foo;
}

var foo = bar();
export default foo;
console.log(foo);