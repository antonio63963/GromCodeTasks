'use strict'; 




export const sendMessage = name => {
    let message = 'Good morning';
    console.log(`${name}, ${message}! Your Gromcode`);
};

export const setMessage = sms => {
    message = sms;
};

sendMessage('Ann');
setMessage('Hello');
sendMessage('Ann');