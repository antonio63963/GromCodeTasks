'use strict';

export default {
    firstName: 'Mik',
    lastName: 'Jagger',
    getfullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    setfullName(value) {
        const arr = value.split(' ');
        this.firstName = arr[0];
        this.lastName = arr[1];
    },
};

console.log(user.fullName);
user.fullName ='James Bond';
console.log(user.fullName);
