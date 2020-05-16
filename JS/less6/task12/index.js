// let arr = [10, 4, 78, 54, 93];

function sortAsc(arr) {
    if(Array.isArray(arr)) {
        arr.sort(function(a, b) {
            return a - b;
        });
    } else {
        return null;
    }
}

function sortDesc(arr) {
    if(Array.isArray(arr)) {
        arr.sort(function(a, b) {
            return b - a;
        });
    } else {
        return null;
    }

}

// sortAsc(arr);
// console.log(arr);
