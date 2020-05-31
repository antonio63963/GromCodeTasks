


function defer(func, ms) {
    return function () {
        setTimeout(() => func.call(this, ...arguments), ms);
    };

}

const sum = (a, b) => {
    console.log(a + b);
};
const user = {
    name: "Tom",
    sayHi() {
        console.log(`Hi, I'm ${this.name}`);
    }
};


const delaySaying = defer(user.sayHi, 1000);
delaySaying.call({ name: 'jeck'});