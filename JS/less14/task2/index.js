'use strict';


export function createMessenger() {
    let message = 'Just learn it';
    let sender = 'Gromcode';
    
    function sendMessage(name) {
        console.log(`${name}, ${message}! Your ${sender}`);
    };

    const setMessage = sms => {
        message = sms;
    };

    const setSender = whoSend => {
        sender = whoSend;
    };
    return {
        sendMessage,
        setMessage,
        setSender,
    };
}