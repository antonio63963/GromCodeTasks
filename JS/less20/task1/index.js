'use strict';

export class User {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hi, I am ${this.name} `);
    }

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }

    setAge(value) {
        if(value < 0) {
            return false;
        } else {
            return this.age;
        }
    } 

    static createEmpty() {
        this.name = '';
        this.age = null;
    }
}






