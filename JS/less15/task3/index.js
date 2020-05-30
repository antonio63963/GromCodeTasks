'use strict';

export function createLogger() {

    let memory = [];
    const warn = sms => {

        memory.push({
            message: sms,
            dateTime: new Date(),
            type: 'warn',
        });
        // console.log(memory);
    };
    const error = sms => {
        memory.push({
            message: sms,
            dateTime: new Date(),
            type: 'error',
        });
    };
    const log = sms => {
        memory.push({
            message: sms,
            dateTime: new Date(),
            type: 'log',
        });
    };
    const getRecords = (typeSms) => {

        if (typeof typeSms == 'undefined') {
            return memory.reverse();
        }
        let result = memory
            .filter(item => item.type == typeSms)
            .reverse();
        return result;
    };
    return {
        warn,
        error,
        log,
        getRecords,
    };
}

const logger = createLoger();

logger.log('im happy');
logger.error('wtf!!!');
console.log(logger.getRecords());
logger.warn('be cauful');
logger.warn('be cauful');
logger.warn('Oh my God!');
logger.warn('be cauful');
console.log(logger.getRecords());

logger.log('some sms');

