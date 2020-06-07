'use strict';



export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get sessionId() {
        return this._sessionId;
    }
}

export class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    }
    get users() {
        return this._users;
    }
    getUserName() {
        return this._users.map(({
            name
        }) => name);
    }
    getUserIds() {
        return this._users.map(({
            id
        }) => id);
    }
    getUserById(idValue) {
        let userName;
        this._users.forEach(({
            id,
            name
        }) => {
            if (id == idValue) {
                userName = name;
            }
        });
        return userName;
    }
}

// const user = new User(24, 'Bob', 32323);
// // user.id = 12;
// console.log(user.id);

// const arr = [{
//     name: 'Bob',
//     age: 23,
//     id: 2323
// }, {
//     name: 'Jack',
//     age: 55,
//     id: 1212
// }];



