const pinger = (amount, msec) => {
    console.log('Ping');
    const intervalId = setInterval(() => {
        if(--amount) {
        console.log("Ping");
        } else {
            clearInterval(intervalId);
        }
    }, msec);
    // 
}

pinger(5, 1000)
