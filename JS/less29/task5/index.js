// export { requestUserData, callback1 }

// function requestUserData(userId, callback) {
//     const random = Math.ceil(Math.random() * 3000);
//     setTimeout(() => callback(userId, 'Failed to load data'), random);


// }

// const callback1 = (id, text) => {
//     const result = id == 'broken' ? text : {
//         userId: id,
//         email: `${id}@example.com`
//     };
//     console.log(result);
// };
// console.log(requestUserData('user777', callback1));
// console.log(requestUserData('broken', callback1));

function requestUserData(userId, callback) {
    setTimeout(() => {
        if (userId === 'broken') {
            callback(null, 'Failed to load user data');
            return;
        }
        callback({
            name: 'John',
            age: 17,
            userId,
            email: `${userId}@example.com`,
        });
    }, Math.floor(Math.random() * 3 + 1) * 1000);
};

export { requestUserData };