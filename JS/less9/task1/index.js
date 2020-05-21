
const getAdults = objUsers => {
    const userArr = Object.entries(objUsers);
    console.log(userArr);
    return userArr.filter(user => user[1] >= 18);
};

const userObject = {
    Frank: 14,
    Mat: 18,
    Ann: 19,
    Julie: 17,
    Adam: 22,
};

console.log(getAdults(userObject));