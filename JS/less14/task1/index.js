'use strict'; 



let message = 'Just learn it';

export function sendMessage(name) {
    const sender = 'Your Gromcode';
    console.log(`${name}, ${message}! ${sender}`);
};

export const setMessage = sms => {
    message = sms;
};

