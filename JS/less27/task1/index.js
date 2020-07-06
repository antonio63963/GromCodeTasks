export const getLocalStorageData = () => {
    const local = Object.entries(localStorage);
    console.log(local);
    let gottenValue;
    return local.reduce((acc, [key, value]) => {
            try {
                gottenValue = JSON.parse(value);
            } catch (e) {
                gottenValue = value;
            }
            return {
                ...acc,
                [key]: gottenValue
        }

    }, {});

};


// localStorage.setItem('name', 'Tom');
// localStorage.setItem('hobbies', JSON.stringify({
//     1: 'basket',
//     2: 'coocking'
// }));
// localStorage.setItem('isActive', true);

// console.log(getLocalStorageData())