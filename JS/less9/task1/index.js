const getAdults = objUsers =>
    Object.entries(objUsers)
        .filter(user => user[1] >= 18)
        .map(user => user[0]);


const userObject = {
    Frank: 14,
    Mat: 18,
    Ann: 19,
    Julie: 17,
    Adam: 22,
};
const empty = {};

console.log(getAdults(userObject));