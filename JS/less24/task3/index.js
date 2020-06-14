

export const getDiff = (startDate, endDate) => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const resultMillisec = Math.abs(end - start);
    const millisecDiff = new Date(resultMillisec);

    let timeLeft = millisecDiff;
    const day = 1000 * 3600 * 24;
    const hour = 1000 * 3600;
    const minute = 1000 * 60;
    const sec = 1000;

    const days = Math.trunc(timeLeft / day);
    timeLeft = timeLeft % day;
    const hours = Math.trunc(timeLeft / hour);
    timeLeft = timeLeft % hour;
    const minutes = Math.trunc(timeLeft / minute);
    timeLeft = timeLeft % minute;
    const seconds = timeLeft / 1000;

    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

};
