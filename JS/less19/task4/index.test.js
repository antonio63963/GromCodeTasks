import user from './index.js';

it("should get native fullname", () => {
    const result = user.fullName;
    expect(result).toEqual('John Doe'); 
});

it("shold get new values of fullName", () => {
    user.fullName = 'James Bond';
    expect(user.fullName).toEqual('James Bond');
});