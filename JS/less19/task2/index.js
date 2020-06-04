'use strict';

export function getOwnProps(obj) {
    return Object.entries(obj)
        .filter(item => typeof item[1] !== 'function')
        .map(item => item[0]);


}

const user = {
    name: "Joe",
    sirname: "baiden",
    sayHi() {
        console.log(`${this.name} are your big frend, Petya!`);
    }
};

console.log(getOwnProps(user));