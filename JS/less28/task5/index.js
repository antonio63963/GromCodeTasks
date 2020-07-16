
const getMethod = {
    years: 'getFullYear',
    months: 'getMonth',
    days: 'getDate',
    hours: 'getHours',
    minutes: 'getMinutes',
    seconds: 'getSeconds',
    milliseconds: 'getMilliseconds'
};
const setMethod = {
    years: 'setFullYear',
    months: 'setMonth',
    days: 'setDate',
    hours: 'setHours',
    minutes: 'setMinutes',
    seconds: 'setSeconds',
    milliseconds: 'setMilliseconds'
};
export const shmoment = (date) => {
    let result = new Date(date);
    const methods = {
        add(unit, amount) {
            result = new Date(result[setMethod[unit]](result[getMethod[unit]]() + amount));
            return this; 
        },
        substruct(unit, amount) {
            result = new Date(result[setMethod[unit]](result[getMethod[unit]]() - amount));
            return this;
        },
        result() {
            return result;
        }
    }
    return methods;
};

// console.log(shmoment(new Date()).add('months', 5).substruct('days', 6).substruct('years', 5).result());