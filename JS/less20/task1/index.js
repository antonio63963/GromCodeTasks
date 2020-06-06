'use strict';

export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }

    setAge(value) {
        if (value < 0) {
            return false;
        } else {
            this.age = value;
            if (value >= 25) {
                this.requestNewPhoto();
            }

            return value;
        }
    }

    static createEmpty() {
        const user = {

            name: '',
            age: null,

        };
        return user;
    }
}