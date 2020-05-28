'use strict'; 



let message = 'Good morning';

export const sendMessage = name => {
    const sender = 'Your Gromcode';
    console.log(`${name}, ${message}! ${sender}`);
};

export const setMessage = sms => {
    message = sms;
};

sendMessage('Ann');
setMessage('Hello');
sendMessage('Ann');