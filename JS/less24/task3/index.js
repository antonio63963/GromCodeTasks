export const getDiff = (startDate, endDate) => {

    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const diffPerMillisec = end - start;
    
    const arrValues = [1000 * 3600 * 24, 1000 * 3600, 1000 * 60, 1000];
    let leftTime = Math.abs(diffPerMillisec);
    let timeArr = [];
    for (let i of arrValues) {
        timeArr.push(Math.trunc(leftTime / i));
        leftTime = leftTime % i;
    }

    const [days, hours, minutes, seconds] = timeArr;
    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

// const date1 = new Date(2020, 06, 14);
// const date2 = new Date(2020, 06, 20, 15, 47, 59);
// getDiff(date2, date1);