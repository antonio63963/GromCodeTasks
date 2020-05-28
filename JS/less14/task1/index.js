let message = 'sdfasdfasdf';
const sendMessage = name => {
    console.log(`${name}, ${message}! Your Gromcode`);
};

const setMessage = sms => {
    message = sms;
};

sendMessage('Ann');
setMessage('Hello');
sendMessage('Ann');