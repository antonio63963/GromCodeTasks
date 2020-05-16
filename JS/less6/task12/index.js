// let arr = [10, 4, 78, 54, 93];

function sortAsc(arr) {
    if(Array.isArray(arr)) {
        arr.sort(function(a, b) {
            return a - b;
        });
    } else {
        return null;
    }
    return arr;
}

function sortDesc(arr) {
    if(Array.isArray(arr)) {
        arr.sort(function(a, b) {
            return b - a;
        });
    } else {
        return null;
    }
    return arr;
}

// sortAsc(arr);
// console.log(sortAsc(arr));
