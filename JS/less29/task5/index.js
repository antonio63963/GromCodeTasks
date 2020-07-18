export { requestUserData, callback1 }

function requestUserData(userId, callback) {
    const random = Math.ceil(Math.random() * 3000);
    setTimeout(() => callback(userId, 'Failed to load data'), random);


}

const callback1 = (id, text) => {
    const result = id == 'broken' ? text : {
        userId: id,
        email: `${id}@example.com`
    };
    console.log(result);
};
// console.log(requestUserData('user777', callback1));
// console.log(requestUserData('broken', callback1));