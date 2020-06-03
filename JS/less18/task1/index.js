'use strict';

export const event = {
    message: 'welcome to the party!',
    guests: [
        {
            name: 'Den',
            age: 18,
            email: 'den@gmail.com',
        },
        {
            name: 'Mik',
            age: 16,
            email: 'mik@gmail.com',
        },
        {
            name: 'Tom',
            age: 22,
            email: 'tom@gmail.com',
        }
    ],
    getInvitations() {
        return this.guests.filter(({age}) => age >= 18)
        .map(({name, email}) => ({
            email, message: `Dear ${name}! ${this.message}`
        }));
    }
};

console.log(event.getInvitations());





