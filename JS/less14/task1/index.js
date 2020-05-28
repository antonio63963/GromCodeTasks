let message = 'Good morning';

function messenger() {
    const sendMessage = name => {
        console.log(`${name}, ${message}! Your Gromcode`);
    };

    const setMessage = sms => {
        message = sms;
    };
    return {
        sendMessage,
        setMessage,
    };
}

let a = messenger();
a.sendMessage('Ann');
a.setMessage('Hello');
a.sendMessage('Ann');