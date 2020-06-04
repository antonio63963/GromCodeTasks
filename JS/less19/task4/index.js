'use strict';

export default {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const arr = value.split(' ');
        this.firstName = arr[0];
        this.lastName = arr[1];
    },
};

console.log(user.fullName);
user.fullName ='James Bond';
console.log(user.fullName);
