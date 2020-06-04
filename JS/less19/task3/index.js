'use strict';

export function User(name, age) {
    this.name = name;
    this.age = age;
    User.prototype.sayHi() {
        console.log(`Hi, I'am ${this.name}`);
    }
    User.prototype.requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }
    User.prototype.setAge(value) {
        if (value < 0) {
            return false;
        } else {
            this.age = value;
            if (this.age >= 25) {
                this.requestNewPhoto();
            }
            return this.age;
        }

    }
}