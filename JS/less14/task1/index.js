'use strict'; 


let message = 'Good morning';


export const sendMessage = name => {
    console.log(`${name}, ${message}! Your Gromcode`);
};

export const setMessage = sms => {
    message = sms;
};

sendMessage('Ann');
setMessage('Hello');
sendMessage('Ann');