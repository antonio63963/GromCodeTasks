import { createLogger } from './index.js';

it(" should get arr of obj", () => {
    const logger = createLogger();
    logger.warn('it have works!');
    logger.error("it's mistake");
    logger.log("move on");
    expect(logger.getRecords()).toEqual([{message: 'move on', dateTime: new Date(),
    type: 'log'},  {message: "it's mistake", dateTime: new Date(),
    type: 'error'}, {message: 'it have works!', dateTime: new Date(),
    type: 'warn'}]);
});

it(" should get arr with only selected obj 'warn' ", () => {
    const logger = createLogger();
    logger.warn('it have works!');
    logger.error("it's mistake");
    logger.log("move on");
    expect(logger.getRecords('warn')).toEqual([{message: 'it have works!', dateTime: new Date(),
    type: 'warn'}]);
});

it(" should get empty arr ", () => {
    const logger = createLogger();
    logger.warn('it have works!');
    logger.error("it's mistake");
    logger.log("move on");
    expect(logger.getRecords('someone else')).toEqual([]);
});

