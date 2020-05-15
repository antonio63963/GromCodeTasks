
function sum(from, to) {
    return from + to;
}
function compareSums(a, b, c, d) {
    if(sum(a, b) > sum(c, d)) {
        return true;
    } else {
        return false;
    }
}

// console.log(compareSums(10, 3, 5, 6));